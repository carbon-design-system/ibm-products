const genReplaceRule = (cjsPath, esPath) => (moduleType) => ({
  from: moduleType === 'cjs' ? esPath : cjsPath,
  to: moduleType === 'cjs' ? cjsPath : esPath,
});

const replaceRules = [
  genReplaceRule('carbon-components-react/lib/', 'carbon-components-react/es/'),
];

function plugin(babel) {
  const { types: t } = babel;
  const moduleType = babel.env();

  function replacePath(path) {
    if (!path.get('source').node) {
      return;
    }

    replaceRules.forEach((replaceRuleFromType) => {
      const replaceRule = replaceRuleFromType(moduleType);
      if (path.get('source').node.value.includes(replaceRule.from)) {
        const replacement = t.stringLiteral(
          path
            .get('source')
            .node.value.replace(replaceRule.from, replaceRule.to)
        );
        path.get('source').replaceWith(replacement);
      }
    });
  }

  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}
module.exports = plugin;

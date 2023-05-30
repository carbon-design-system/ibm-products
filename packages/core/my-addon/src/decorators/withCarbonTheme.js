import { useEffect } from '@storybook/preview-api';
import { PARAM_KEY } from '../constants';

export const withCarbonTheme = (StoryFn, context) => {
  const { globals, parameters } = context;

  const globalCarbonTheme = globals[PARAM_KEY];
  const storyCarbonTheme = parameters[PARAM_KEY];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const selector =
      context.viewMode === 'docs'
        ? `#anchor--${context.id} .docs-story`
        : '.sb-show-main';

    const rootElements = document.querySelectorAll(selector);
    rootElements.forEach((rootElement) => {
      console.log('xxxxx 1', globalCarbonTheme, storyCarbonTheme);
      console.log(`Setting theme to ${globalCarbonTheme ?? storyCarbonTheme}`);
      rootElement.setAttribute(
        'storybook-carbon-theme',
        globalCarbonTheme ?? storyCarbonTheme
      );
    });
  }, [context.id, context.viewMode, globalCarbonTheme, storyCarbonTheme]);

  return StoryFn();
};

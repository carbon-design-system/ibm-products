/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs-extra');
const path = require('path');
const ts = require('typescript');

async function build() {
  const packageRoot = path.resolve(__dirname, '..');
  const declarationTsconfigPath = path.resolve(
    __dirname,
    '..',
    'tsconfig.declarations.json'
  );

  // Generate declarations once to es/ directory
  console.log('Generating TypeScript declarations...');
  await emitDeclarations(declarationTsconfigPath, path.join(packageRoot, 'es'));

  // Copy declarations from es/ to lib/ for CJS parity
  console.log('Copying declarations to lib/...');
  await copyDeclarations(
    path.join(packageRoot, 'es'),
    path.join(packageRoot, 'lib')
  );

  console.log('✅ Declaration generation complete!');
}

async function copyDeclarations(fromDir, toDir) {
  const entries = await fs.readdir(fromDir, { withFileTypes: true });

  for (const entry of entries) {
    const fromPath = path.join(fromDir, entry.name);
    const toPath = path.join(toDir, entry.name);

    if (entry.isDirectory()) {
      await fs.ensureDir(toPath);
      await copyDeclarations(fromPath, toPath);
      continue;
    }

    if (entry.name.endsWith('.d.ts') || entry.name.endsWith('.d.ts.map')) {
      await fs.copy(fromPath, toPath);
    }
  }
}

async function emitDeclarations(tsconfigPath, outDir) {
  const sourceRoot = path.resolve(__dirname, '..', 'src');
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

  if (configFile.error) {
    throw new Error(formatDiagnostics([configFile.error]));
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(tsconfigPath),
    {
      declaration: true,
      declarationMap: true,
      emitDeclarationOnly: true,
      noEmit: false,
      noEmitOnError: false,
      outDir,
      rootDir: sourceRoot,
      sourceMap: false,
    },
    tsconfigPath
  );

  const rootNames = parsed.fileNames;
  const program = ts.createProgram({
    options: parsed.options,
    rootNames,
  });
  const emitResult = program.emit();
  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);

  if (emitResult.emitSkipped) {
    throw new Error(formatDiagnostics(diagnostics));
  }

  if (diagnostics.length > 0) {
    // Surface diagnostics as warnings without failing the build
    console.warn(formatDiagnostics(diagnostics));
  }
}

function formatDiagnostics(diagnostics) {
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName(filepath) {
      return filepath;
    },
    getCurrentDirectory() {
      return process.cwd();
    },
    getNewLine() {
      return '\n';
    },
  });
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});

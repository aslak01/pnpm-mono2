import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  readJson,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { SkprojGeneratorSchema } from './schema';

export async function skprojGenerator(
  tree: Tree,
  options: SkprojGeneratorSchema
) {
  const scopeName = readJson(tree, 'package.json').name

  const resolvedOptions = {
    ...options,
    name: names(options.name).fileName,
    scope: scopeName
  }

  const projectRoot = `apps/${resolvedOptions.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default skprojGenerator;

import fs from 'fs-extra';
import path from 'path';
import yaml from 'yaml';

const CONTROL_DIR = path.resolve(process.cwd(), 'data/control');

export async function readYaml<T>(filename: string): Promise<T | null> {
  try {
    const filePath = path.join(CONTROL_DIR, filename);
    if (!await fs.pathExists(filePath)) {
      return null;
    }
    const fileContents = await fs.readFile(filePath, 'utf8');
    return yaml.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading YAML file ${filename}:`, error);
    return null;
  }
}

export async function writeYaml(filename: string, data: any): Promise<boolean> {
  try {
    const filePath = path.join(CONTROL_DIR, filename);
    const yamlString = yaml.stringify(data);
    await fs.ensureDir(CONTROL_DIR);
    await fs.writeFile(filePath, yamlString, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing YAML file ${filename}:`, error);
    return false;
  }
}

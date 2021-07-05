/* eslint-disable @typescript-eslint/naming-convention */
import vscode, { workspace } from 'vscode';

var configFolder: any = workspace.getConfiguration().get('filenameSearchSidebar.folder') || undefined;

if (configFolder === '') {
  configFolder = undefined;
}
if (configFolder === undefined) {
  if (vscode.workspace.workspaceFolders !== undefined) {
    var foldercollection: string[] = [];
    var folders = vscode.workspace.workspaceFolders;
    // iterate over all workspaces
    folders.forEach((folder) => {
      foldercollection.push(folder.uri.fsPath);
    });
    configFolder = foldercollection.join(',');
  }
}

export const CONFIG_DEPTH = 0;
export const CONFIG_FOLDER = `${configFolder}`;
export const CONFIG_SEARCH_MINIMUM = 15;

export enum ConfigShowPaths {
  ALWAYS = 'Always',
  AS_NEEEDED = 'As needed',
  NEVER = 'Never'
}
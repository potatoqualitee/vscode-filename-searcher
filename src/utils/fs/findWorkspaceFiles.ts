import * as os from 'os';
import { workspace } from 'vscode';
import { checkFile, collectFilesFromFolder } from '.';
import { CONFIG_DEPTH, CONFIG_FOLDER, FS_WS_FILETYPE } from '../../constants';
import { WsFiles } from '../../webviews/Workspace/WorkspaceViewProvider.interface';

export const findWorkspaceFiles = async (): Promise<WsFiles | false> => {
  try {
    const folder: string =
      workspace.getConfiguration().get('filenameSearchSidebar.folder') || CONFIG_FOLDER;
    const maxDepth: number =
      workspace.getConfiguration().get('filenameSearchSidebar.depth') ?? CONFIG_DEPTH;
    const homeDir = os.homedir();
    const baseFolder = folder ? folder.replace(`~`, homeDir) : homeDir;
    const allFiles: any[] = [];

    async function getIt(baseFolder: string) {
      const folderCollection = baseFolder.split(",");
      for (var folder of folderCollection) {
        if (checkFile(folder)) {
          allFiles.push(await collectFilesFromFolder(folder.trim(), FS_WS_FILETYPE, maxDepth, 0));
        }
      }
    };

    await getIt(baseFolder);
    await Promise.all(allFiles);
    return [].concat(...allFiles);
  } catch (err) {
    return [];
  }
};
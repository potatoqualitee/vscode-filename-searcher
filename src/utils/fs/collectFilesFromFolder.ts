import * as fs from 'fs';
import { workspace } from 'vscode';
import { getFilenamesOfType, isHiddenFile } from '.';
import { WsFiles } from '../../webviews/Workspace/WorkspaceViewProvider.interface';

const foldersToAllow = ['.vscode']; // Some users store workspaces files here

export const collectFilesFromFolder = async (
  folder: string,
  fileType: string,
  maxDepth: number,
  curDepth: number
): Promise<WsFiles> => {
  if (curDepth <= maxDepth) {
    try {
      var foldersToIgnoreconfig: string =
        workspace.getConfiguration().get('filenameSearchSidebar.excludeFolders') || ''; // Folders that slow down collection or won't have workspace files in
      var foldersToIgnore: string[] = foldersToIgnoreconfig.replace(/\s/g, '').split(',');
      const filenames = await fs.promises.readdir(folder).then((files) => {
        return files.reduce((allFiles: string[], curFile) => {
          if (
            foldersToAllow.includes(curFile) ||
            (!isHiddenFile(curFile) && !foldersToIgnore.includes(curFile))
          ) {
            return [...allFiles, curFile];
          }

          return allFiles;
        }, []);
      });

      const folders = getFilenamesOfType('folders', filenames, folder);
      let files = getFilenamesOfType('files', filenames, folder);

      if (folders.length > 0) {
        for (let index = 0; index < folders.length; index++) {
          const subFiles = await collectFilesFromFolder(
            folders[index],
            fileType,
            maxDepth,
            curDepth + 1
          );
          files = [...files, ...subFiles];
        }
      }

      return files;
    } catch (err) {
      return [];
    }
  }

  return [];
};

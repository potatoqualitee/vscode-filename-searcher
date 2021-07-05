import * as path from 'path';
import { workspace } from 'vscode';
import { checkFile } from '.';
import { WsFiles } from '../../webviews/Workspace/WorkspaceViewProvider.interface';

export const getFilenamesOfType = (
  requiredType: 'folders' | 'files',
  filenames: WsFiles,
  folder: string
) => {
  return filenames.reduce((allFiles: any, curFile: string) => {
    const curPath = path.join(folder, curFile);
    const { isFile, isFolder } = checkFile(curPath);
    // has to be in here because the person may change the extension
    var fileType: string =
      (workspace.getConfiguration().get('filenameSearchSidebar.includeFileTypes') || '');

    if (isFile && requiredType === 'files') {
      if (fileType !== '') {
        var fileExtension = curFile.substring(curFile.lastIndexOf('.') + 1);
        //remove all spaces from filetype
        fileType = fileType.replace(/\s/g, '');
        var ftarray = fileType.split(',');

        if (ftarray.includes(fileExtension)) {
          return [...allFiles, curPath];
        }
      } else {
        return [...allFiles, curPath];
      }
    } else if (isFolder && requiredType === 'folders') {
      return [...allFiles, curPath];
    }

    return allFiles;
  }, [] as WsFiles);
};

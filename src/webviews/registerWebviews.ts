import * as vscode from 'vscode';
import { WorkspaceViewProvider } from '.';
import { isWorkspacefile } from '../utils';

export const registerWebviews = (
  context: vscode.ExtensionContext,
  workspaceViewProvider: WorkspaceViewProvider
): void => {
  const regWebview = vscode.window.registerWebviewViewProvider(
    WorkspaceViewProvider.viewType,
    workspaceViewProvider
  );

  const configChange = vscode.workspace.onDidChangeConfiguration(
    (event: vscode.ConfigurationChangeEvent) => {
      if (event.affectsConfiguration('filenameSearchSidebar.depth')) {
        workspaceViewProvider.refresh();
      } else if (event.affectsConfiguration('filenameSearchSidebar.folder')) {
        workspaceViewProvider.refresh();
      } else if (event.affectsConfiguration('filenameSearchSidebar.showPaths')) {
        workspaceViewProvider.updatePaths();
      } else if (event.affectsConfiguration('filenameSearchSidebar.searchMinimum')) {
        workspaceViewProvider.refresh(true);
      }
    }
  );

  const createFiles = vscode.workspace.onDidCreateFiles((event: vscode.FileCreateEvent) => {
    const isWorkspace = event.files.some((file) => isWorkspacefile(file.path, file.scheme));

    if (isWorkspace) {
      workspaceViewProvider.refresh();
    }
  });

  context.subscriptions.push(regWebview);
  context.subscriptions.push(configChange);
  context.subscriptions.push(createFiles);
};

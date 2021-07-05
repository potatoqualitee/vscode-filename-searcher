import { workspace } from 'vscode';
import { t } from 'vscode-ext-localisation';
import { RenderVars } from '../../../webviews/webviews.interface';
import { File } from '../../../webviews/Workspace/WorkspaceViewProvider.interface';

export const listItem = (file: File, renderVars: RenderVars) => {
  const { file: dataFile, isSelected, label, path } = file;
  const tooltip = isSelected
    ? t('webViews.workspace.listItem.selected')
    : t('webViews.workspace.listItem.openCurWin', { label });
  const classes = `list__element ${isSelected ? 'list__element--selected' : 'list__element--unselected'
    }`;
  const codicon: string =
    workspace.getConfiguration().get('filenameSearchSidebar.codicon') || '';

  return `
    <li class="list__item">
      <span class="${classes}" data-file="${dataFile}" tabindex="0" title="${tooltip}">
      <i class="codicon codicon-${codicon}"></i> <span class="list__title">&nbsp;${label}</span>&nbsp;
        ${path ? `<span class="list__description">${path}</span>` : ''}

      </span>
    </li>
  `;
};

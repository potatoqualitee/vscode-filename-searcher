import { RenderVars } from '../../../webviews/webviews.interface';
import { getImgUrls } from '../../getImgUrls';

export const listItemIcon = (renderVars: RenderVars) => {
  const { dark, light } = getImgUrls(renderVars, 'file');

  return `
      <img alt="" width="16px" height="16px" data-theme="dark" src="${dark}" />
      <img alt="" width="16px" height="16px" data-theme="light" src="${light}" />
  `;
};

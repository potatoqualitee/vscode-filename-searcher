import { CONFIG_FOLDER } from "./config";
const configfolder = CONFIG_FOLDER.replace(/ /g, '');

export const EXT = 'filename-search';
export const EXT_LOADED = `${EXT}-list-loaded`;
export const EXT_WSLIST_VIEW_ID = `${EXT}-list`;
export const EXT_WSLIST_ITEM_CTX = `${EXT_WSLIST_VIEW_ID}-item`;
export const EXT_WSLIST_ITEM_ACTIVE_CTX = `${EXT_WSLIST_ITEM_CTX}-active`;
export const EXT_WSLIST_ITEM_ERROR_CTX = `${EXT_WSLIST_VIEW_ID}-error`;
export const EXT_WSLIST_ITEM_ERROR_SUB_CTX = `${EXT_WSLIST_VIEW_ID}-error-sub`;
export const EXT_WSLIST_ITEM_LOADING_CTX = `${EXT_WSLIST_VIEW_ID}-loading`;

// Global State
// but add cache per workspace
export const EXT_WSSTATE_CACHE = `${EXT}-cache-${configfolder}`;
export const EXT_WSSTATE_CACHE_DURATION = 604800; // 7 days
export const EXT_SORT = `${EXT}-sort`;
export const EXT_WEBVIEW_WS = `${EXT}-webview-workspace`;

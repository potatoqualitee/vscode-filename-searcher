(function () {
  const vscode = acquireVsCodeApi();
  import { workspace } from 'vscode';
  const newWinIcons = Array.from(document.getElementsByClassName('list__buttons'));
  const searchForm = document.getElementById('searchWorkspacesForm');
  const searchInput = document.getElementById('searchWorkspaces');
  const viewLinks = Array.from(document.getElementsByClassName('view__link'));
  const wsElements = Array.from(document.getElementsByClassName('list__element--unselected'));
  let searchTerm = '';

  vscode;

  const sendMessage = (action, payload) => {
    const message = { action };

    if (payload !== undefined) {
      message.payload = payload;
    }

    vscode.postMessage(message);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    sendMessage('OPEN_NEW_WINDOW', event.currentTarget.dataset.file);
  };

  const handleElementClick = (event) => {
    event.stopPropagation();
    sendMessage('OPEN_CUR_WINDOW', event.currentTarget.dataset.file);
  };

  const handleViewLInkClick = (event) => {
    event.stopPropagation();
    sendMessage('SHOW_SETTINGS');
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSearchSubmit = (event) => {
    sendMessage('SEARCH', searchTerm);
    // Stop submit navigating: https://github.com/microsoft/vscode/issues/125485
    // Should be done after sending message otherwise the message is not dispatched
    if (event) {
      event.preventDefault();
    }
  };

  const handleSearchChange = (event) => {
    searchTerm = event.target.value;
  };

  var timeout = null;
  //const autoSearchEnabled = workspace.getConfiguration().get('filenameSearchSidebar.autoSearchEnabled') || true;
  //const searchDelay = workspace.getConfiguration().get('filenameSearchSidebar.searchDelay') || 750;
  const autoSearchEnabled = true;
  const searchDelay = 750;
  const handleSearchKeyUp = (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (event.key === 'Escape') {
        searchTerm = '';
      } else {
        searchTerm = event.target.value;
      }
      handleSearchSubmit();
    }, searchDelay);
  };


  const handleSearch = (event) => {
    if (event.target.value === '') {
      searchTerm = '';
      handleSearchSubmit();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    newWinIcons.forEach((element) => {
      element.addEventListener('click', handleIconClick);
    });

    if (searchForm) {
      searchForm.addEventListener('submit', handleSearchSubmit);
    }

    if (searchInput) {
      searchInput.addEventListener('change', handleSearchChange);
      searchInput.addEventListener('keyup', handleSearchKeyUp);
      searchInput.addEventListener('search', handleSearch);
    }

    viewLinks.forEach((element) => {
      element.addEventListener('click', handleViewLInkClick);
    });

    wsElements.forEach((element) => {
      element.addEventListener('contextmenu', handleRightClick);
      element.addEventListener('click', handleElementClick);
    });

    if (searchInput && document.activeElement.id !== 'searchWorkspaces') {
      //searchInput.focus();
      //searchInput.setSelectionRange(100, 100);
    }
  });

  window.addEventListener('message', event => {
    const message = event.data;

    switch (message.action) {
      case 'FOCUS_SEARCH':
        if (searchInput && document.activeElement.id !== 'searchWorkspaces') {
          //searchInput.focus();
          //searchInput.setSelectionRange(1000, 1000);
        }
        break;

      default:
        break;
    }
  });

  window.addEventListener('unload', () => {
    newWinIcons.forEach((element) => {
      element.removeEventListener('click', handleIconClick);
    });

    if (searchForm) {
      searchForm.removeEventListener('submit', handleSearchSubmit);
    }

    if (searchInput) {
      searchInput.removeEventListener('change', handleSearchChange);
      searchInput.removeEventListener('keyup', handleSearchKeyUp);
      searchInput.removeEventListener('search', handleSearch);
    }

    viewLinks.forEach((element) => {
      element.removeEventListener('click', handleViewLInkClick);
    });

    wsElements.forEach((element) => {
      element.removeEventListener('contextmenu', handleRightClick);
      element.removeEventListener('click', handleElementClick);
    });
  });
})();

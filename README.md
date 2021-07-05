# Filename Sidebar Search

**(vscode-filename-search)**

<img align="left" src=./logo.png alt="logo">  This VS Code Extension adds a sidebar to VSCode that lists files in your workspace and lets you open them in a new window. A search box is also available to allow you to filter down to specific files.

Files can also be sorted ascending or descending.

The results are cached for 12 Hours but there is a refresh button that you can click to recollect filenames at any time. The search refreshes automatically when files are renamed, created, and deleted.

![alt text](https://user-images.githubusercontent.com/8278033/124402645-f6484700-dd31-11eb-9852-e62d4b4bdfe9.gif 'Filename Sidebar Search')

## Settings

| Setting | Description | Default Value | Type |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------- |
| Case Sensitive | Case sensitive search | false | Boolean |
| Codicon | The codicon that shows up on the side of the filename. Alternatives include `file-binary`, `book`, and more. | file | String |
| Depth | The depth of subfolders to include in the search. | 0 | Number 0-5 |
| Folder | The folder to look for workspace files in. If Folder is empty, your home folder will be used. | None (all of your current workspaces will be used) | String |
| Include File Types | Return only these specific file types. Example: php, ts, ps1 | | String |
| Search minimum | The minimum number of workspaces required before the search box is displayed. 0 Will always display the search box. | 15 | Number 0-100 |
| Show Paths | Show the paths to the workspaces in the sidebar. Available options are: 'Always', 'Never', 'As needed' (will only display paths if there are duplicate labels). | As Needed | Dropdown List |


## Thanks
Big thanks to [sketchbuch](https://github.com/sketchbuch) for their work on [vsc-workspace-sidebar](https://github.com/sketchbuch/vsc-workspace-sidebar) which I used as a starting point.
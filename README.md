# Filename Sidebar Search

**(vscode-filename-search)**

<img align="left" src="https://github.com/potatoqualitee/vscode-filename-search/raw/main/logo.png" alt="logo">  This VS Code Extension is for people who use their mouse instead of complex key combos. It adds a sidebar to VSCode that lists and searches files in your workspace and lets you open them in a new window, with a click.

Files can be sorted ascending or descending.

The results are cached for 7 days but there is a refresh button that you can click to recollect filenames at any time. The search refreshes automatically when files are renamed, created, and deleted.

https://user-images.githubusercontent.com/8278033/124448117-5f57ab00-dd82-11eb-8929-a830a885c9d7.mp4

I wrote this because I'm not good at key combos and prefer using a mouse for searches. It also replicates functionality that I used to appreciate in PowerShell Studio.

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

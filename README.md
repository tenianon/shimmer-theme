<br/> <br/>

<div align="center">

![icon.png](https://i.postimg.cc/13dVCSNm/icon.png)

<br/> <br/>

  <h1>Shimmer Theme README</h1>
  <br/>

English Docs |
[中文文档](https://github.com/tenianon/shimmer-theme/blob/main/README_zh-cn.md)

</div>

## Effects

#### Dark Melancholy

<div align="center">

![shimmer-theme-dark-melancholy.png](https://i.postimg.cc/dqzyyc3z/shimmer-theme-dark-melancholy.png)

</div>

#### Dark Melancholy Block

<div align="center">

![shimmer-theme-dark-melancholy-block.png](https://i.postimg.cc/D7wLVcRY/shimmer-theme-dark-melancholy-block.png)

</div>

#### Dark Neutral

<div align="center">

![shimmer-theme-dark-neutral.png](https://i.postimg.cc/Q81WgYWV/shimmer-theme-dark-neutral.png)

</div>

#### Dark Neutral Block

<div align="center">

![shimmer-theme-dark-neutral-block.png](https://i.postimg.cc/yVJRx81m/shimmer-theme-dark-neutral-block.png)

</div>

#### Dark Modern

<div align="center">

![shimmer-theme-dark-modern.png](https://i.postimg.cc/BJ7DJK0Z/shimmer-theme-dark-modern.png)

</div>

## Recommend

It is recommended to turn off **Bracket Pair Coloring** when using this theme, Open `Manage → Settings` → Search for `bracket pair` → Uncheck Controls whether bracket pair colorization is enabled or not.

## Using

#### Method 1

After the installation is complete, press `ctrl + shift + p` to display all command pop-ups, enter `Color Theme` in the input box, find the option `Preferences: Color Theme` in the result bar, press Enter, and select the theme with the name starting with `Shimmer Theme` in the color theme list.

#### Method 2

Open `Manage` -> `Themes` -> `Color Theme`, and select the theme that starts with `Shimmer Theme` in the color theme list pop-up window.

## Modify color scheme

Open `Manage` -> `Settings` -> `Open Settings(Json)` -> `Open Settings (UI)` **[icon column on the right side of the tab bar]** and add the following content to the `setting.json` file

#### Example

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    // Current theme name
   "[Shimmer Theme Dark Melancholy]": {
     // Change primary color
     "activityBar.foreground": "#ff00ff",
     "activityBarBadge.background": "#ff00ff",
     "activityBarTop.activeBorder": "#ff00ff",
     "activityBarTop.foreground": "#ff00ff",
     "badge.background": "#ff00ff",
     "badge.foreground": "#ff00ff",
     "breadcrumb.focusForeground": "#ff00ff",
     "button.background": "#ff00ff",
     "button.hoverBackground": "#ff00ff",
     "editorSuggestWidget.highlightForeground": "#ff00ff",
     "inputOption.activeBackground": "#ff00ff",
     "panelTitle.activeBorder": "#ff00ff",
     "panelTitle.activeForeground": "#ff00ff",
     "peekViewTitleLabel.foreground": "#ff00ff",
     "progressBar.background": "#ff00ff",
     "statusBarItem.remoteHoverBackground": "#ff00ff",
     "statusBarItem.remoteHoverForeground": "#ff00ff",
     "tab.activeBackground": "#ff00ff",
     "tab.activeBorderTop": "#ff00ff",
     // other color scheme
   }
  }
}
```

View [Theme Color Doc](https://code.visualstudio.com/api/references/theme-color)

## Color matching rules

This theme is matched using [Adobe Color Accessibility Tools](https://color.adobe.com/en/create/color-contrast-analyzer) WCAG 2.1 level (**AA**) and meets color matching level requirements

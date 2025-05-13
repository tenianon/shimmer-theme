<br/> <br/>

<div align="center">

  ![icon.png](https://i.postimg.cc/13dVCSNm/icon.png)

  <br/> <br/>
  <h1>Shimmer Theme README</h1>
  <br/>

  [English Docs]
    [中文文档](https://github.com/tenianon/shimmer-theme/blob/main/README_zh-cn.md)
    
</div>

## Effects


#### Dark Melancholy
<div align="center">

  ![shimmer-theme-dark-melancholy.png](https://i.postimg.cc/FFMGc0w9/Pix-Pin-2025-05-09-05-42-10.png)
</div>

#### Dark Neutral
<div align="center">

  ![shimmer-theme-dark-neutral.png](https://i.postimg.cc/3r4ndtSS/Pix-Pin-2025-05-09-05-41-35.png)

</div>

## Install

#### Method 1

After the installation is complete, press `ctrl + shift + p` to display all command pop-ups, enter `Color Theme` in the input box, find the option `Preferences: Color Theme` in the result bar, press Enter, and select the theme with the name starting with `Shimmer Theme` in the color theme list.



#### Method 2

Click `Manage -> Themes -> Color Theme`, and select the theme that starts with `Shimmer Theme` in the color theme list pop-up window.

## Modify color scheme

Click `Manage -> Settings -> Open Settings(Json) -> Open Settings (UI) [icon column on the right side of the tab bar]` and add the following content to the `setting.json` file

#### Example

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    // Current theme name
   "[Shimmer Theme Dark Melancholy]": {
     // Change primary color
     "button.background": "#ff00ff",
     "button.foreground": "#ff00ff",
     "button.hoverBackground": "#ff00ff",
     "inputOption.activeBackground": "#ff00ff",
     "inputOption.activeForeground": "#ff00ff",
     "badge.foreground": "#ff00ff",
     "badge.background": "#ff00ff",
     "progressBar.background": "#ff00ff",
     "activityBar.foreground": "#ff00ff",
     "activityBarBadge.background": "#ff00ff",
     "activityBarBadge.foreground": "#ff00ff",
     "activityBarTop.foreground": "#ff00ff",
     "activityBarTop.activeBorder": "#ff00ff",
     "tab.activeBorderTop": "#ff00ff",
     "editorSuggestWidget.focusHighlightForeground": "#ff00ff",
     "editorSuggestWidget.highlightForeground": "#ff00ff",
     "peekViewTitleLabel.foreground": "#ff00ff",
     "panel.background": "#ff00ff",
     "panel.dropBorder": "#ff00ff",
     "panelTitle.activeBorder": "#ff00ff",
     "panelTitle.activeForeground": "#ff00ff",
     "statusBarItem.remoteHoverForeground": "#ff00ff",
     "breadcrumb.focusForeground": "#ff00ff"
     // other color scheme
   }
  }
}
```

View [Theme Color Doc](https://code.visualstudio.com/api/references/theme-color)

## Color matching rules

This theme is matched using [Adobe Color Accessibility Tools](https://color.adobe.com/en/create/color-contrast-analyzer) WCAG 2.1 level (**AA**) and meets color matching level requirements

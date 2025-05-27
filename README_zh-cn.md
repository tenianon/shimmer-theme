<br/> <br/>

<div align="center">

![icon.png](https://i.postimg.cc/13dVCSNm/icon.png)

<br/> <br/>

  <h1>Shimmer Theme README</h1>
  <br/>

[English Docs](https://github.com/tenianon/shimmer-theme/blob/main/README.md)
[中文文档]

</div>

## 效果图


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


## 建议

使用该主题时建议把 **括号对着色** 关闭，打开 `管理` -> `设置` 在输入框输入 `启用括号` ，取消勾选 **控制是否启用括号对着色配置**

## 使用

#### 方式一

安装完成后，按下 `ctrl + shift + p` 显示所有命令弹窗，在输入框输入 `颜色主题` 或 `Color Theme` ，在结果栏中查找选项 `首选项: 颜色(Preferences: Color Theme)` ，按下回车，在颜色主题列表中选择 `Shimmer Theme` 开头的名称主题

#### 方式二

打开 `管理` -> `主题` -> `颜色主题`，颜色主题列表弹窗中选择 `Shimmer Theme` 开头的名称主题

## 修改配色

打开 `管理` -> `设置` -> `打开设置(Json)` -> `打开设置(ui)` **[标签栏右边的图标列]** ，在 `setting.json` 文件里追加以下内容

#### 例子

```json
// setting.json
{
  ...
  "workbench.colorCustomizations": {
    // 当前主题名称
   "[Shimmer Theme Dark Melancholy]": {
     // 修改主调色
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
     // 其他配色
   }
  }
}
```

查看 [主题颜色文档](https://code.visualstudio.com/api/references/theme-color)

## 配色规则

该主题使用 [Adobe Color Accessibility Tools](https://color.adobe.com/zh/create/color-contrast-analyzer) WCAG 2.1 等级(**AA**)进行搭配且符合配色等级要求

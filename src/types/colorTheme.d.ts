// Auto-generated from VS Code schemas using custom parser
// Generated at: 2025/12/13 00:17:49
// Sources:
//   - vscode://schemas/color-theme
//   - vscode://schemas/token-styling
//   - vscode://schemas/workbench-colors
//   - vscode://schemas/textmate-colors

declare type SemanticTokenStyle =
	| string
	| {
			/** 标记的前景色。 */
			foreground?: string
			background?: string
			/** 设置规则的所有字形: "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线) 或是上述的组合。所有未列出的字形都将取消设置。空字符串将取消设置的所有字形。 */
			fontStyle?:
				| ''
				| 'italic'
				| 'bold'
				| 'underline'
				| 'strikethrough'
				| 'italic bold'
				| 'italic underline'
				| 'italic strikethrough'
				| 'bold underline'
				| 'bold strikethrough'
				| 'underline strikethrough'
				| 'italic bold underline'
				| 'italic bold strikethrough'
				| 'italic underline strikethrough'
				| 'bold underline strikethrough'
				| 'italic bold underline strikethrough'
			/** 将字形设置为粗体或取消粗体设置。请注意，如果存在 "fontStyle"，则会替代此设置。 */
			bold?: boolean
			/** 将字形设置为倾斜或取消倾斜设置。请注意，如果存在 "fontStyle"，则会替代此设置。 */
			italic?: boolean
			/** 将字形设置为下划线或取消下划线设置。请注意，如果存在 "fontStyle"，则会替代此设置。 */
			underline?: boolean
			/** 将字形设置为下划线或取消下划线设置。请注意，如果存在 "fontStyle"，则会替代此设置。 */
			strikethrough?: boolean
	  }

declare interface WorkbenchColors {
	/** 操作栏中切换的操作项的背景色 */
	'actionBar.toggledBackground'?: string
	/** 活动项的活动栏背景颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换 */
	'activityBar.activeBackground'?: string
	/** 活动项的活动栏边框颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换 */
	'activityBar.activeBorder'?: string
	/** 活动项的活动栏焦点边框颜色。活动栏显示在最左侧或右侧，并允许在侧栏视图之间切换 */
	'activityBar.activeFocusBorder'?: string
	/** 活动栏背景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换 */
	'activityBar.background'?: string
	/** 活动栏分隔侧边栏的边框颜色。活动栏显示在最左侧或最右侧，并可以切换侧边栏的视图 */
	'activityBar.border'?: string
	/** 拖放活动栏项的反馈颜色。活动栏显示在最左侧或最右侧，并允许在侧边栏视图之间切换 */
	'activityBar.dropBorder'?: string
	/** 活动栏项在活动时的前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换 */
	'activityBar.foreground'?: string
	/** 活动栏项在非活动时的前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换 */
	'activityBar.inactiveForeground'?: string
	/** 活动通知徽章背景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换 */
	'activityBarBadge.background'?: string
	/** 活动通知徽章前景色。活动栏显示在最左侧或最右侧，并允许在侧边栏的视图间切换 */
	'activityBarBadge.foreground'?: string
	/** 活动栏中的活动项位于顶部/底部时的背景色。该活动允许在侧边栏的不同视图之间进行切换 */
	'activityBarTop.activeBackground'?: string
	/** 活动栏中的活动项位于顶部/底部时的焦点边框颜色。活动允许在边栏视图之间切换 */
	'activityBarTop.activeBorder'?: string
	/** 设置为顶部/底部时活动栏的背景色 */
	'activityBarTop.background'?: string
	/** 活动栏中的项位于顶部/底部时的拖放反馈颜色。活动允许在边栏视图之间切换 */
	'activityBarTop.dropBorder'?: string
	/** 活动栏中的项位于顶部/底部时的活动前景色。活动允许在边栏视图之间切换 */
	'activityBarTop.foreground'?: string
	/** 活动栏中的项位于顶部/底部时的非活动前景色。活动允许在边栏视图之间切换 */
	'activityBarTop.inactiveForeground'?: string
	/** 错误活动徽章的背景色 */
	'activityErrorBadge.background'?: string
	/** 错误活动徽章的前景色 */
	'activityErrorBadge.foreground'?: string
	/** 警告活动徽章的背景色 */
	'activityWarningBadge.background'?: string
	/** 警告活动徽章的前景色 */
	'activityWarningBadge.foreground'?: string
	/** Badge 背景色。Badge 是小型的信息标签，如表示搜索结果数量的标签 */
	'badge.background'?: string
	/** Badge 前景色。Badge 是小型的信息标签，如表示搜索结果数量的标签 */
	'badge.foreground'?: string
	/** 横幅背景颜色。横幅显示在窗口的标题栏下 */
	'banner.background'?: string
	/** 横幅前景色。横幅显示在窗口的标题栏下 */
	'banner.foreground'?: string
	/** 横幅图标颜色。横幅显示在窗口的标题栏下 */
	'banner.iconForeground'?: string
	/** 已选导航路径项的颜色 */
	'breadcrumb.activeSelectionForeground'?: string
	/** 导航路径项的背景色 */
	'breadcrumb.background'?: string
	/** 焦点导航路径的颜色 */
	'breadcrumb.focusForeground'?: string
	/** 焦点导航路径的颜色 */
	'breadcrumb.foreground'?: string
	/** 导航路径项选择器的背景色 */
	'breadcrumbPicker.background'?: string
	/** 按钮背景色 */
	'button.background'?: string
	/** 按钮边框颜色 */
	'button.border'?: string
	/** 按钮前景色 */
	'button.foreground'?: string
	/** 按钮在悬停时的背景颜色 */
	'button.hoverBackground'?: string
	/** 辅助按钮背景色 */
	'button.secondaryBackground'?: string
	/** 辅助按钮前景色 */
	'button.secondaryForeground'?: string
	/** 悬停时的辅助按钮背景色 */
	'button.secondaryHoverBackground'?: string
	/** 按钮分隔符颜色 */
	'button.separator'?: string
	/** 图表的轴颜色 */
	'chart.axis'?: string
	/** 图表的参考线 */
	'chart.guide'?: string
	/** 图表的线条颜色 */
	'chart.line'?: string
	/** 图表可视化效果中使用的蓝色 */
	'charts.blue'?: string
	/** 图表中使用的前景颜色 */
	'charts.foreground'?: string
	/** 图表可视化效果中使用的绿色 */
	'charts.green'?: string
	/** 用于图表中的水平线条的颜色 */
	'charts.lines'?: string
	/** 图表可视化效果中使用的橙色 */
	'charts.orange'?: string
	/** 图表可视化效果中使用的紫色 */
	'charts.purple'?: string
	/** 图表可视化效果中使用的红色 */
	'charts.red'?: string
	/** 图表可视化效果中使用的黄色 */
	'charts.yellow'?: string
	/** 聊天头像的背景色 */
	'chat.avatarBackground'?: string
	/** 聊天头像的前景色 */
	'chat.avatarForeground'?: string
	/** 聊天检查点分隔符颜色 */
	'chat.checkpointSeparator'?: string
	/** 已编辑文件列表中聊天编辑文件的前景色 */
	'chat.editedFileForeground'?: string
	/** 在聊天代码块药丸形状中添加了行的前景色 */
	'chat.linesAddedForeground'?: string
	/** 移除了聊天代码块药丸形状中的行前景色 */
	'chat.linesRemovedForeground'?: string
	/** 聊天请求的背景色 */
	'chat.requestBackground'?: string
	/** 聊天请求的边框颜色 */
	'chat.requestBorder'?: string
	/** 聊天请求气泡的背景色 */
	'chat.requestBubbleBackground'?: string
	/** 鼠标悬停时聊天请求气泡的背景色 */
	'chat.requestBubbleHoverBackground'?: string
	/** 聊天请求气泡中代码块的边框颜色 */
	'chat.requestCodeBorder'?: string
	/** 聊天斜线命令的背景色 */
	'chat.slashCommandBackground'?: string
	/** 聊天斜线命令的前景色 */
	'chat.slashCommandForeground'?: string
	/** The color of the Chat Management editor splitview sash border */
	'chatManagement.sashBorder'?: string
	/** 复选框小部件的背景颜色 */
	'checkbox.background'?: string
	/** 复选框小部件的边框颜色 */
	'checkbox.border'?: string
	/** 变暗的复选框的背景 */
	'checkbox.disabled.background'?: string
	/** 变暗的复选框的前景 */
	'checkbox.disabled.foreground'?: string
	/** 复选框小部件的前景色 */
	'checkbox.foreground'?: string
	/** 选择复选框小组件所在的元素时该小组件的背景色 */
	'checkbox.selectBackground'?: string
	/** 选择复选框小组件所在的元素时该小组件的边框颜色 */
	'checkbox.selectBorder'?: string
	/** 命令中心的活动背景色 */
	'commandCenter.activeBackground'?: string
	/** 命令中心的活动边框颜色 */
	'commandCenter.activeBorder'?: string
	/** 命令中心的活动前景色 */
	'commandCenter.activeForeground'?: string
	/** 命令中心背景色 */
	'commandCenter.background'?: string
	/** 命令中心的边框颜色 */
	'commandCenter.border'?: string
	/** 调试程序时的命令中心背景色 */
	'commandCenter.debuggingBackground'?: string
	/** 命令中心前景色 */
	'commandCenter.foreground'?: string
	/** 窗口处于非活动状态时命令中心的边框颜色 */
	'commandCenter.inactiveBorder'?: string
	/** 窗口处于非活动状态时命令中心的前景色 */
	'commandCenter.inactiveForeground'?: string
	/** 解析批注的图标颜色 */
	'commentsView.resolvedIcon'?: string
	/** 未解析批注的图标颜色 */
	'commentsView.unresolvedIcon'?: string
	/** 在活动元素周围额外的一层边框，用来提高对比度从而区别其他元素 */
	contrastActiveBorder?: string
	/** 在元素周围额外的一层边框，用来提高对比度从而区别其他元素 */
	contrastBorder?: string
	/** Foreground color for error messages in debug REPL console */
	'debugConsole.errorForeground'?: string
	/** Foreground color for info messages in debug REPL console */
	'debugConsole.infoForeground'?: string
	/** Foreground color for source filenames in debug REPL console */
	'debugConsole.sourceForeground'?: string
	/** Foreground color for warning messages in debug REPL console */
	'debugConsole.warningForeground'?: string
	/** Foreground color for debug console input marker icon */
	'debugConsoleInputIcon.foreground'?: string
	/** 异常小组件背景颜色 */
	'debugExceptionWidget.background'?: string
	/** 异常小组件边框颜色 */
	'debugExceptionWidget.border'?: string
	/** 当前断点堆栈帧的图标颜色 */
	'debugIcon.breakpointCurrentStackframeForeground'?: string
	/** 禁用断点的图标颜色 */
	'debugIcon.breakpointDisabledForeground'?: string
	/** 断点图标颜色 */
	'debugIcon.breakpointForeground'?: string
	/** 所有断点堆栈帧的图标颜色 */
	'debugIcon.breakpointStackframeForeground'?: string
	/** 未验证断点的图标颜色 */
	'debugIcon.breakpointUnverifiedForeground'?: string
	/** 用于继续的调试工具栏图标 */
	'debugIcon.continueForeground'?: string
	/** 用于断开连接的调试工具栏图标 */
	'debugIcon.disconnectForeground'?: string
	/** 用于暂停的调试工具栏图标 */
	'debugIcon.pauseForeground'?: string
	/** 用于重启的调试工具栏图标 */
	'debugIcon.restartForeground'?: string
	/** 用于开始调试的调试工具栏图标 */
	'debugIcon.startForeground'?: string
	/** 用于后退的调试工具栏图标 */
	'debugIcon.stepBackForeground'?: string
	'debugIcon.stepIntoForeground'?: string
	'debugIcon.stepOutForeground'?: string
	/** 用于跳过的调试工具栏图标 */
	'debugIcon.stepOverForeground'?: string
	/** 用于停止的调试工具栏图标 */
	'debugIcon.stopForeground'?: string
	/** Foreground color for booleans in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.boolean'?: string
	/** Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console */
	'debugTokenExpression.error'?: string
	/** Foreground color for the token names shown in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.name'?: string
	/** Foreground color for numbers in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.number'?: string
	/** Foreground color for strings in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.string'?: string
	/** Foreground color for the token types shown in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.type'?: string
	/** Foreground color for the token values shown in the debug views (ie. the Variables or Watch view) */
	'debugTokenExpression.value'?: string
	/** 调试工具栏背景颜色 */
	'debugToolBar.background'?: string
	/** 调试工具栏边框颜色 */
	'debugToolBar.border'?: string
	/** Background color for a label shown in the CALL STACK view when the debugger breaks on an exception */
	'debugView.exceptionLabelBackground'?: string
	/** Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception */
	'debugView.exceptionLabelForeground'?: string
	/** Background color for a label in the CALL STACK view showing the current session's or thread's state */
	'debugView.stateLabelBackground'?: string
	/** Foreground color for a label in the CALL STACK view showing the current session's or thread's state */
	'debugView.stateLabelForeground'?: string
	/** Color used to highlight value changes in the debug views (ie. in the Variables view) */
	'debugView.valueChangedHighlight'?: string
	/** 提供其他信息的说明文本的前景色，例如标签文本 */
	descriptionForeground?: string
	/** 两个文本编辑器之间的边框颜色 */
	'diffEditor.border'?: string
	/** 差异编辑器的对角线填充颜色。对角线填充用于并排差异视图 */
	'diffEditor.diagonalFill'?: string
	/** 已插入的行的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'diffEditor.insertedLineBackground'?: string
	/** 已插入的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'diffEditor.insertedTextBackground'?: string
	/** 插入的文本的轮廓颜色 */
	'diffEditor.insertedTextBorder'?: string
	/** 在差异编辑器中移动的文本的边框颜色 */
	'diffEditor.move.border'?: string
	/** 在差异编辑器中移动的文本的活动边框颜色 */
	'diffEditor.moveActive.border'?: string
	/** 已删除的行的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'diffEditor.removedLineBackground'?: string
	/** 已删除的文本的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'diffEditor.removedTextBackground'?: string
	/** 被删除文本的轮廓颜色 */
	'diffEditor.removedTextBorder'?: string
	/** 差异编辑器中未更改代码的背景色 */
	'diffEditor.unchangedCodeBackground'?: string
	/** 差异编辑器中未更改块的背景色 */
	'diffEditor.unchangedRegionBackground'?: string
	/** 差异编辑器中未更改块的前景色 */
	'diffEditor.unchangedRegionForeground'?: string
	/** 未更改区域小组件周围的阴影颜色 */
	'diffEditor.unchangedRegionShadow'?: string
	/** 插入行的边距的背景色 */
	'diffEditorGutter.insertedLineBackground'?: string
	/** 删除行的边距的背景色 */
	'diffEditorGutter.removedLineBackground'?: string
	/** 插入内容的差异概述标尺前景 */
	'diffEditorOverview.insertedForeground'?: string
	/** 删除内容的差异概述标尺前景 */
	'diffEditorOverview.removedForeground'?: string
	/** 已禁用元素的整体前景色。仅在未由组件替代时才能使用此颜色 */
	disabledForeground?: string
	/** 下拉列表背景色 */
	'dropdown.background'?: string
	/** 下拉列表边框 */
	'dropdown.border'?: string
	/** 下拉列表前景色 */
	'dropdown.foreground'?: string
	/** 下拉列表背景色 */
	'dropdown.listBackground'?: string
	/** 编辑器背景色 */
	'editor.background'?: string
	/** 输入法组合的边框颜色 */
	'editor.compositionBorder'?: string
	/** 当前搜索匹配项的颜色 */
	'editor.findMatchBackground'?: string
	/** 当前搜索匹配项的边框颜色 */
	'editor.findMatchBorder'?: string
	/** 当前搜索匹配项的文本颜色 */
	'editor.findMatchForeground'?: string
	/** 其他搜索匹配项的颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.findMatchHighlightBackground'?: string
	/** 其他搜索匹配项的边框颜色 */
	'editor.findMatchHighlightBorder'?: string
	/** 其他搜索匹配项的前景色 */
	'editor.findMatchHighlightForeground'?: string
	/** 限制搜索范围的颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.findRangeHighlightBackground'?: string
	/** 限制搜索的范围的边框颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.findRangeHighlightBorder'?: string
	/** 堆栈帧中焦点一行的高亮背景色 */
	'editor.focusedStackFrameHighlightBackground'?: string
	/** 折叠范围后面的背景颜色。颜色必须设为透明，以免隐藏底层装饰 */
	'editor.foldBackground'?: string
	/** 在折叠范围的第一行后的折叠文本的颜色 */
	'editor.foldPlaceholderForeground'?: string
	/** 编辑器默认前景色 */
	'editor.foreground'?: string
	/** 在下面突出显示悬停的字词。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.hoverHighlightBackground'?: string
	/** 非活动编辑器中所选内容的颜色，颜色必须透明，以免隐藏下面的装饰效果 */
	'editor.inactiveSelectionBackground'?: string
	/** 调试内联值背景的颜色 */
	'editor.inlineValuesBackground'?: string
	/** 调试内联值文本的颜色 */
	'editor.inlineValuesForeground'?: string
	/** 光标所在行高亮内容的背景颜色 */
	'editor.lineHighlightBackground'?: string
	/** 光标所在行四周边框的背景颜色 */
	'editor.lineHighlightBorder'?: string
	/** 编辑器根据类型自动重命名时的背景色 */
	'editor.linkedEditingBackground'?: string
	/** 编辑器中占位符文本的前景色 */
	'editor.placeholder.foreground'?: string
	/** 背景颜色的高亮范围，喜欢通过快速打开和查找功能。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.rangeHighlightBackground'?: string
	/** 高亮区域边框的背景颜色 */
	'editor.rangeHighlightBorder'?: string
	/** 编辑器所选内容的颜色 */
	'editor.selectionBackground'?: string
	/** 用以彰显高对比度的所选文本的颜色 */
	'editor.selectionForeground'?: string
	/** 具有与所选项相关内容的区域的颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.selectionHighlightBackground'?: string
	/** 与所选项内容相同的区域的边框颜色 */
	'editor.selectionHighlightBorder'?: string
	/** 代码片段中最后的 Tab 位的高亮背景色 */
	'editor.snippetFinalTabstopHighlightBackground'?: string
	/** 代码片段中最后的制表位的高亮边框颜色 */
	'editor.snippetFinalTabstopHighlightBorder'?: string
	/** 代码片段 Tab 位的高亮背景色 */
	'editor.snippetTabstopHighlightBackground'?: string
	/** 代码片段 Tab 位的高亮边框颜色 */
	'editor.snippetTabstopHighlightBorder'?: string
	/** 堆栈帧中顶部一行的高亮背景色 */
	'editor.stackFrameHighlightBackground'?: string
	/** 高亮显示符号的背景颜色，例如转到定义或转到下一个/上一个符号。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.symbolHighlightBackground'?: string
	/** 高亮显示符号周围的边框的背景颜色 */
	'editor.symbolHighlightBorder'?: string
	/** 读取访问期间符号的背景色，例如读取变量时。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.wordHighlightBackground'?: string
	/** 符号在进行读取访问操作时的边框颜色，例如读取变量 */
	'editor.wordHighlightBorder'?: string
	/** 写入访问过程中符号的背景色，例如写入变量时。颜色必须透明，以免隐藏下面的修饰效果 */
	'editor.wordHighlightStrongBackground'?: string
	/** 符号在进行写入访问操作时的边框颜色，例如写入变量 */
	'editor.wordHighlightStrongBorder'?: string
	/** 符号在文本中出现时的背景色。颜色必须透明，以免隐藏下层的修饰 */
	'editor.wordHighlightTextBackground'?: string
	/** 符号在文本中出现时的边框颜色 */
	'editor.wordHighlightTextBorder'?: string
	/** 操作列表背景色 */
	'editorActionList.background'?: string
	/** 聚焦项目的操作列表背景色 */
	'editorActionList.focusBackground'?: string
	/** 聚焦项目的操作列表前景色 */
	'editorActionList.focusForeground'?: string
	/** 操作列表前景色 */
	'editorActionList.foreground'?: string
	/** 编辑器活动行号的颜色 */
	'editorActiveLineNumber.foreground'?: string
	/** 括号的前景色(1)。需要启用括号对着色 */
	'editorBracketHighlight.foreground1'?: string
	/** 括号的前景色(2)。需要启用括号对着色 */
	'editorBracketHighlight.foreground2'?: string
	/** 括号的前景色(3)。需要启用括号对着色 */
	'editorBracketHighlight.foreground3'?: string
	/** 括号的前景色(4)。需要启用括号对着色 */
	'editorBracketHighlight.foreground4'?: string
	/** 括号的前景色(5)。需要启用括号对着色 */
	'editorBracketHighlight.foreground5'?: string
	/** 括号的前景色(6)。需要启用括号对着色 */
	'editorBracketHighlight.foreground6'?: string
	/** 方括号出现意外的前景色 */
	'editorBracketHighlight.unexpectedBracket.foreground'?: string
	/** 匹配括号的背景色 */
	'editorBracketMatch.background'?: string
	/** 匹配括号外框的颜色 */
	'editorBracketMatch.border'?: string
	/** 活动括号对指南的背景色(1)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground1'?: string
	/** 活动括号对指南的背景色(2)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground2'?: string
	/** 活动括号对指南的背景色(3)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground3'?: string
	/** 活动括号对指南的背景色(4)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground4'?: string
	/** 活动括号对指南的背景色(5)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground5'?: string
	/** 活动括号对指南的背景色(6)。需要启用括号对指南 */
	'editorBracketPairGuide.activeBackground6'?: string
	/** 非活动括号对指南的背景色(1)。需要启用括号对指南 */
	'editorBracketPairGuide.background1'?: string
	/** 非活动括号对指南的背景色(2)。需要启用括号对指南 */
	'editorBracketPairGuide.background2'?: string
	/** 非活动括号对指南的背景色(3)。需要启用括号对指南 */
	'editorBracketPairGuide.background3'?: string
	/** 非活动括号对指南的背景色(4)。需要启用括号对指南 */
	'editorBracketPairGuide.background4'?: string
	/** 非活动括号对指南的背景色(5)。需要启用括号对指南 */
	'editorBracketPairGuide.background5'?: string
	/** 非活动括号对指南的背景色(6)。需要启用括号对指南 */
	'editorBracketPairGuide.background6'?: string
	/** 编辑器 CodeLens 的前景色 */
	'editorCodeLens.foreground'?: string
	/** 当前选定或悬停注释范围的背景色 */
	'editorCommentsWidget.rangeActiveBackground'?: string
	/** 注释范围的背景色 */
	'editorCommentsWidget.rangeBackground'?: string
	/** 批注回复输入框的背景色 */
	'editorCommentsWidget.replyInputBackground'?: string
	/** 已解析评论的边框和箭头颜色 */
	'editorCommentsWidget.resolvedBorder'?: string
	/** 未解析评论的边框和箭头颜色 */
	'editorCommentsWidget.unresolvedBorder'?: string
	/** 编辑器光标的背景色。可以自定义块型光标覆盖字符的颜色 */
	'editorCursor.background'?: string
	/** 编辑器光标颜色 */
	'editorCursor.foreground'?: string
	/** 编辑器中错误文本的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorError.background'?: string
	/** 如果设置，编辑器中错误的双下划线颜色 */
	'editorError.border'?: string
	/** 编辑器中错误波浪线的前景色 */
	'editorError.foreground'?: string
	/** 编辑器中虚影文本的背景色 */
	'editorGhostText.background'?: string
	/** 编辑器中虚影文本的边框颜色 */
	'editorGhostText.border'?: string
	/** 编辑器中虚影文本的前景色 */
	'editorGhostText.foreground'?: string
	/** 将多个编辑器组彼此分隔开的颜色。编辑器组是编辑器的容器 */
	'editorGroup.border'?: string
	/** 拖动编辑器时的背景颜色。此颜色应有透明度，以便编辑器内容能透过背景 */
	'editorGroup.dropBackground'?: string
	/** 拖动文件时编辑器上显示的文本背景色。此文本通知用户可以按住 Shift 放入编辑器中 */
	'editorGroup.dropIntoPromptBackground'?: string
	/** 拖动文件时在编辑器上显示的文本边框颜色。此文本通知用户可以按住 Shift 来拖入编辑器中 */
	'editorGroup.dropIntoPromptBorder'?: string
	/** 拖动文件时编辑器上显示的文本前景色。此文本通知用户可以按住 Shift 来拖入编辑器中 */
	'editorGroup.dropIntoPromptForeground'?: string
	/** 空编辑器组的背景色。编辑器组是编辑器的容器 */
	'editorGroup.emptyBackground'?: string
	/** 空编辑器组被聚焦时的边框颜色。编辑组是编辑器的容器 */
	'editorGroup.focusedEmptyBorder'?: string
	/** 编辑器组标题标头的边框颜色。编辑器组是编辑器的容器 */
	'editorGroupHeader.border'?: string
	/** 禁用选项卡(“"workbench.editor.showTabs": "single"”)时编辑器组标题颜色。编辑器组是编辑器的容器 */
	'editorGroupHeader.noTabsBackground'?: string
	/** 启用选项卡时编辑器组标题的背景颜色。编辑器组是编辑器的容器 */
	'editorGroupHeader.tabsBackground'?: string
	/** 选项卡启用时编辑器组标题的边框颜色。编辑器组是编辑器的容器 */
	'editorGroupHeader.tabsBorder'?: string
	/** 编辑器导航线中已插入行的背景颜色 */
	'editorGutter.addedBackground'?: string
	/** 编辑器导航线中已插入行的次要背景色 */
	'editorGutter.addedSecondaryBackground'?: string
	/** 编辑器导航线的背景色。导航线包括边缘符号和行号 */
	'editorGutter.background'?: string
	/** 编辑器装订线中评论字形的装饰颜色 */
	'editorGutter.commentGlyphForeground'?: string
	/** 用于标注范围的编辑器装订线装饰颜色。此颜色应不透明 */
	'editorGutter.commentRangeForeground'?: string
	/** 编辑器装订线修饰颜色，用于注释未解析注释线程的字形 */
	'editorGutter.commentUnresolvedGlyphForeground'?: string
	/** 编辑器导航线中被删除行的背景颜色 */
	'editorGutter.deletedBackground'?: string
	/** 编辑器导航线中已删除行的次要背景色 */
	'editorGutter.deletedSecondaryBackground'?: string
	/** 编辑器装订线中折叠控件的颜色 */
	'editorGutter.foldingControlForeground'?: string
	/** 用于装订线项目背景的编辑器装订线装饰颜色。此颜色应不透明 */
	'editorGutter.itemBackground'?: string
	/** 用于装订线项目图标的编辑器装订线装饰颜色 */
	'editorGutter.itemGlyphForeground'?: string
	/** 编辑器导航线中被修改行的背景颜色 */
	'editorGutter.modifiedBackground'?: string
	/** 编辑器导航线中已修改行的次要背景色 */
	'editorGutter.modifiedSecondaryBackground'?: string
	/** 如果设置，编辑器中提示的双下划线颜色 */
	'editorHint.border'?: string
	/** 编辑器中提示波浪线的前景色 */
	'editorHint.foreground'?: string
	/** 编辑器悬停提示的背景颜色 */
	'editorHoverWidget.background'?: string
	/** 光标悬停时编辑器的边框颜色 */
	'editorHoverWidget.border'?: string
	/** 编辑器悬停的前景颜色 */
	'editorHoverWidget.foreground'?: string
	/** 参数提示中活动项的前景色 */
	'editorHoverWidget.highlightForeground'?: string
	/** 编辑器悬停状态栏的背景色 */
	'editorHoverWidget.statusBarBackground'?: string
	/** 编辑器活动缩进参考线的颜色 */
	'editorIndentGuide.activeBackground'?: string
	/** 编辑器活动缩进参考线 (1) 的颜色 */
	'editorIndentGuide.activeBackground1'?: string
	/** 编辑器活动缩进参考线 (2) 的颜色 */
	'editorIndentGuide.activeBackground2'?: string
	/** 编辑器活动缩进参考线 (3) 的颜色 */
	'editorIndentGuide.activeBackground3'?: string
	/** 编辑器活动缩进参考线 (4) 的颜色 */
	'editorIndentGuide.activeBackground4'?: string
	/** 编辑器活动缩进参考线 (5) 的颜色 */
	'editorIndentGuide.activeBackground5'?: string
	/** 编辑器活动缩进参考线 (6) 的颜色 */
	'editorIndentGuide.activeBackground6'?: string
	/** 编辑器缩进参考线的颜色 */
	'editorIndentGuide.background'?: string
	/** 编辑器缩进参考线 (1) 的颜色 */
	'editorIndentGuide.background1'?: string
	/** 编辑器缩进参考线 (2) 的颜色 */
	'editorIndentGuide.background2'?: string
	/** 编辑器缩进参考线 (3) 的颜色 */
	'editorIndentGuide.background3'?: string
	/** 编辑器缩进参考线 (4) 的颜色 */
	'editorIndentGuide.background4'?: string
	/** 编辑器缩进参考线 (5) 的颜色 */
	'editorIndentGuide.background5'?: string
	/** 编辑器缩进参考线 (6) 的颜色 */
	'editorIndentGuide.background6'?: string
	/** 编辑器中信息文本的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorInfo.background'?: string
	/** 如果设置，编辑器中信息的双下划线颜色 */
	'editorInfo.border'?: string
	/** 编辑器中信息波浪线的前景色 */
	'editorInfo.foreground'?: string
	/** 内联提示的背景色 */
	'editorInlayHint.background'?: string
	/** 内联提示的前景色 */
	'editorInlayHint.foreground'?: string
	/** 参数内联提示的背景色 */
	'editorInlayHint.parameterBackground'?: string
	/** 参数内联提示的前景色 */
	'editorInlayHint.parameterForeground'?: string
	/** 类型内联提示的背景色 */
	'editorInlayHint.typeBackground'?: string
	/** 类型内联提示的前景色 */
	'editorInlayHint.typeForeground'?: string
	/** 用于灯泡操作图标的颜色 */
	'editorLightBulb.foreground'?: string
	/** 用于灯泡 AI 图标的颜色 */
	'editorLightBulbAi.foreground'?: string
	/** 用于灯泡自动修复操作图标的颜色 */
	'editorLightBulbAutoFix.foreground'?: string
	/** 编辑器活动行号的颜色 */
	'editorLineNumber.activeForeground'?: string
	/** 将 editor.renderFinalNewline 设置为灰色时最终编辑器行的颜色 */
	'editorLineNumber.dimmedForeground'?: string
	/** 编辑器行号的颜色 */
	'editorLineNumber.foreground'?: string
	/** 活动链接颜色 */
	'editorLink.activeForeground'?: string
	/** 编辑器标记导航小组件背景色 */
	'editorMarkerNavigation.background'?: string
	/** 编辑器标记导航小组件错误颜色 */
	'editorMarkerNavigationError.background'?: string
	/** 编辑器标记导航小组件错误标题背景色 */
	'editorMarkerNavigationError.headerBackground'?: string
	/** 编辑器标记导航小组件信息颜色 */
	'editorMarkerNavigationInfo.background'?: string
	/** 编辑器标记导航小组件信息标题背景色 */
	'editorMarkerNavigationInfo.headerBackground'?: string
	/** 编辑器标记导航小组件警告颜色 */
	'editorMarkerNavigationWarning.background'?: string
	/** 编辑器标记导航小组件警告标题背景色 */
	'editorMarkerNavigationWarning.headerBackground'?: string
	/** 插入了内联聊天的内容的缩略图标记颜色 */
	'editorMinimap.inlineChatInserted'?: string
	/** 存在多个游标时主要编辑器游标的背景色。允许自定义块游标重叠的字符的颜色 */
	'editorMultiCursor.primary.background'?: string
	/** 存在多个游标时主要编辑器游标的颜色 */
	'editorMultiCursor.primary.foreground'?: string
	/** 存在多个游标时辅助编辑器游标的背景色。允许自定义块游标重叠的字符的颜色 */
	'editorMultiCursor.secondary.background'?: string
	/** 存在多个游标时辅助编辑器游标的颜色 */
	'editorMultiCursor.secondary.foreground'?: string
	/** 概览标尺中已增加内容的颜色 */
	'editorOverviewRuler.addedForeground'?: string
	/** 编辑器概述标尺的背景色 */
	'editorOverviewRuler.background'?: string
	/** 概览标尺边框的颜色 */
	'editorOverviewRuler.border'?: string
	/** 概览标尺上表示匹配括号的标记颜色 */
	'editorOverviewRuler.bracketMatchForeground'?: string
	/** 解析批注的编辑器概述标尺修饰颜色。此颜色应为不透明 */
	'editorOverviewRuler.commentForeground'?: string
	/** 编辑器概述未解析注释的标尺修饰颜色。此颜色应为不透明 */
	'editorOverviewRuler.commentUnresolvedForeground'?: string
	/** 内联合并冲突中共同祖先区域的概览标尺前景色 */
	'editorOverviewRuler.commonContentForeground'?: string
	/** 内联合并冲突中当前版本区域的概览标尺前景色 */
	'editorOverviewRuler.currentContentForeground'?: string
	/** 概览标尺中已删除内容的颜色 */
	'editorOverviewRuler.deletedForeground'?: string
	/** 概览标尺中错误标记的颜色 */
	'editorOverviewRuler.errorForeground'?: string
	/** 用于查找匹配项的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorOverviewRuler.findMatchForeground'?: string
	/** 内联合并冲突中传入的版本区域的概览标尺前景色 */
	'editorOverviewRuler.incomingContentForeground'?: string
	/** 概览标尺中信息标记的颜色 */
	'editorOverviewRuler.infoForeground'?: string
	/** 内联聊天插入内容的概述标尺的标记颜色 */
	'editorOverviewRuler.inlineChatInserted'?: string
	/** 内联聊天删除的内容的概述标尺的标记颜色 */
	'editorOverviewRuler.inlineChatRemoved'?: string
	/** 概览标尺中已修改内容的颜色 */
	'editorOverviewRuler.modifiedForeground'?: string
	/** 用于突出显示范围的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorOverviewRuler.rangeHighlightForeground'?: string
	/** 用于突出显示所选内容的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorOverviewRuler.selectionHighlightForeground'?: string
	/** 概览标尺中警告标记的颜色 */
	'editorOverviewRuler.warningForeground'?: string
	/** 用于突出显示符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorOverviewRuler.wordHighlightForeground'?: string
	/** 用于突出显示写权限符号的概述标尺标记颜色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorOverviewRuler.wordHighlightStrongForeground'?: string
	/** 符号在文本中出现时的概述标尺标记颜色。颜色必须透明，以免隐藏下层的修饰 */
	'editorOverviewRuler.wordHighlightTextForeground'?: string
	/** 居中编辑器布局中左侧与右侧编辑器窗格的背景色 */
	'editorPane.background'?: string
	/** 编辑器标尺的颜色 */
	'editorRuler.foreground'?: string
	/** 编辑器中粘滞滚动的背景色 */
	'editorStickyScroll.background'?: string
	/** 编辑器中粘滞滚动的边框颜色 */
	'editorStickyScroll.border'?: string
	/**  编辑器中粘滞滚动的阴影颜色 */
	'editorStickyScroll.shadow'?: string
	/** 编辑器中粘滞滚动的装订线部件的背景色 */
	'editorStickyScrollGutter.background'?: string
	/** 在编辑器中悬停时粘滞滚动的背景色 */
	'editorStickyScrollHover.background'?: string
	/** 建议小组件的背景色 */
	'editorSuggestWidget.background'?: string
	/** 建议小组件的边框颜色 */
	'editorSuggestWidget.border'?: string
	/** 当某项获得焦点时，在建议小组件中突出显示的匹配项的颜色 */
	'editorSuggestWidget.focusHighlightForeground'?: string
	/** 建议小组件的前景色 */
	'editorSuggestWidget.foreground'?: string
	/** 建议小组件中匹配内容的高亮颜色 */
	'editorSuggestWidget.highlightForeground'?: string
	/** 建议小组件中所选条目的背景色 */
	'editorSuggestWidget.selectedBackground'?: string
	/** 建议小组件中所选条目的前景色 */
	'editorSuggestWidget.selectedForeground'?: string
	/** 建议小组件中所选条目的图标前景色 */
	'editorSuggestWidget.selectedIconForeground'?: string
	/** 建议小组件状态的前景色 */
	'editorSuggestWidgetStatus.foreground'?: string
	/** 用于突出显示 Unicode 字符的背景颜色 */
	'editorUnicodeHighlight.background'?: string
	/** 用于突出显示 Unicode 字符的边框颜色 */
	'editorUnicodeHighlight.border'?: string
	/** 编辑器中不必要(未使用)的源代码的边框颜色 */
	'editorUnnecessaryCode.border'?: string
	/** 非必须(未使用)代码的在编辑器中显示的不透明度。例如，"#000000c0" 将以 75% 的不透明度显示代码。对于高对比度主题，请使用 ”editorUnnecessaryCode.border“ 主题来为非必须代码添加下划线，以避免颜色淡化 */
	'editorUnnecessaryCode.opacity'?: string
	/** 编辑器中警告文本的背景色。颜色必须透明，以免隐藏下面的修饰效果 */
	'editorWarning.background'?: string
	/** 如果设置，编辑器中警告的双下划线颜色 */
	'editorWarning.border'?: string
	/** 编辑器中警告波浪线的前景色 */
	'editorWarning.foreground'?: string
	/** 编辑器水印中标签的前景色 */
	'editorWatermark.foreground'?: string
	/** 编辑器中空白字符的颜色 */
	'editorWhitespace.foreground'?: string
	/** 编辑器组件(如查找/替换)背景颜色 */
	'editorWidget.background'?: string
	/** 编辑器小部件的边框颜色。此颜色仅在小部件有边框且不被小部件重写时适用 */
	'editorWidget.border'?: string
	/** 编辑器小部件的前景色，如查找/替换 */
	'editorWidget.foreground'?: string
	/** 编辑器小部件大小调整条的边框颜色。此颜色仅在小部件有调整边框且不被小部件颜色覆盖时使用 */
	'editorWidget.resizeBorder'?: string
	/** 错误信息的整体前景色。此颜色仅在不被组件覆盖时适用 */
	errorForeground?: string
	/** Background color of the entire line containing error */
	'errorLens.errorBackground'?: string
	/** Background color of the entire line containing error (Only in light themes) */
	'errorLens.errorBackgroundLight'?: string
	/** Text color used to highlight lines containing errors */
	'errorLens.errorForeground'?: string
	/** Text color used to highlight lines containing errors (Only in light themes) */
	'errorLens.errorForegroundLight'?: string
	/** Background color of the error message */
	'errorLens.errorMessageBackground'?: string
	/** Background color of the error range (when errorLens.problemRangeDecorationEnabled setting enabled) */
	'errorLens.errorRangeBackground'?: string
	/** Background color used to highlight lines containing hints */
	'errorLens.hintBackground'?: string
	/** Background color used to highlight lines containing hints (Only in light themes) */
	'errorLens.hintBackgroundLight'?: string
	/** Text color used to highlight lines containing hints */
	'errorLens.hintForeground'?: string
	/** Text color used to highlight lines containing hints (Only in light themes) */
	'errorLens.hintForegroundLight'?: string
	/** Background color of the hint message */
	'errorLens.hintMessageBackground'?: string
	/** Background color of the hint range (when errorLens.problemRangeDecorationEnabled setting enabled) */
	'errorLens.hintRangeBackground'?: string
	/** Background color used to highlight lines containing info */
	'errorLens.infoBackground'?: string
	/** Background color used to highlight lines containing info (Only in light themes) */
	'errorLens.infoBackgroundLight'?: string
	/** Text color used to highlight lines containing info */
	'errorLens.infoForeground'?: string
	/** Text color used to highlight lines containing info (Only in light themes) */
	'errorLens.infoForegroundLight'?: string
	/** Background color of the info message */
	'errorLens.infoMessageBackground'?: string
	/** Background color of the info range (when errorLens.problemRangeDecorationEnabled setting enabled) */
	'errorLens.infoRangeBackground'?: string
	/** Status bar item error color */
	'errorLens.statusBarErrorForeground'?: string
	/** Status bar item hint color */
	'errorLens.statusBarHintForeground'?: string
	/** Status bar icon item error color. Foreground is used when the `errorLens.statusBarIconsUseBackground` setting is disabled */
	'errorLens.statusBarIconErrorForeground'?: string
	/** Status bar icon item error color. Foreground is used when the `errorLens.statusBarIconsUseBackground` setting is disabled */
	'errorLens.statusBarIconWarningForeground'?: string
	/** Status bar item info color */
	'errorLens.statusBarInfoForeground'?: string
	/** Status bar item warning color */
	'errorLens.statusBarWarningForeground'?: string
	/** Background color used to highlight lines containing warnings */
	'errorLens.warningBackground'?: string
	/** Background color used to highlight lines containing warnings (Only in light themes) */
	'errorLens.warningBackgroundLight'?: string
	/** Text color used to highlight lines containing warnings */
	'errorLens.warningForeground'?: string
	/** Text color used to highlight lines containing warnings (Only in light themes) */
	'errorLens.warningForegroundLight'?: string
	/** Background color of the warning message */
	'errorLens.warningMessageBackground'?: string
	/** Background color of the warning range (when errorLens.problemRangeDecorationEnabled setting enabled) */
	'errorLens.warningRangeBackground'?: string
	/** 扩展视图中远程徽标的背景色 */
	'extensionBadge.remoteBackground'?: string
	/** 扩展视图中远程徽标的前景色 */
	'extensionBadge.remoteForeground'?: string
	/** 扩展操作的按钮背景色 */
	'extensionButton.background'?: string
	/** 扩展操作的按钮前景色 */
	'extensionButton.foreground'?: string
	/** 扩展操作的按钮背景悬停颜色 */
	'extensionButton.hoverBackground'?: string
	/** 扩展操作中突出按钮背景色(比如安装按钮) */
	'extensionButton.prominentBackground'?: string
	/** 扩展操作中突出按钮前景色(比如安装按钮) */
	'extensionButton.prominentForeground'?: string
	/** 扩展操作中突出按钮被悬停时的颜色(比如安装按钮) */
	'extensionButton.prominentHoverBackground'?: string
	/** 扩展操作的按钮分隔符颜色 */
	'extensionButton.separator'?: string
	/** 预发布扩展的图标颜色 */
	'extensionIcon.preReleaseForeground'?: string
	/** 专用扩展的图标颜色 */
	'extensionIcon.privateForeground'?: string
	/** 扩展发起人的图标颜色 */
	'extensionIcon.sponsorForeground'?: string
	/** 扩展分级的图标颜色 */
	'extensionIcon.starForeground'?: string
	/** 已验证扩展的发布服务器图标颜色 */
	'extensionIcon.verifiedForeground'?: string
	/** 焦点元素的整体边框颜色。此颜色仅在不被其他组件覆盖时适用 */
	focusBorder?: string
	/** 整体前景色。此颜色仅在不被组件覆盖时适用 */
	foreground?: string
	/** 仪表背景色 */
	'gauge.background'?: string
	/** 仪表边框颜色 */
	'gauge.border'?: string
	/** 仪表错误背景色 */
	'gauge.errorBackground'?: string
	/** 仪表错误前景色 */
	'gauge.errorForeground'?: string
	/** 仪表前景色 */
	'gauge.foreground'?: string
	/** 仪表警告背景色 */
	'gauge.warningBackground'?: string
	/** 仪表警告前景色 */
	'gauge.warningForeground'?: string
	/** 追溯编辑器修饰的颜色 */
	'git.blame.editorDecorationForeground'?: string
	/** 已添加资源的颜色 */
	'gitDecoration.addedResourceForeground'?: string
	/** 存在冲突的资源的颜色 */
	'gitDecoration.conflictingResourceForeground'?: string
	/** 已删除资源的颜色 */
	'gitDecoration.deletedResourceForeground'?: string
	/** 已忽略资源的颜色 */
	'gitDecoration.ignoredResourceForeground'?: string
	/** 已修改资源的颜色 */
	'gitDecoration.modifiedResourceForeground'?: string
	/** 重命名或复制的资源的颜色 */
	'gitDecoration.renamedResourceForeground'?: string
	/** 已暂存的已删除资源的颜色 */
	'gitDecoration.stageDeletedResourceForeground'?: string
	/** 已暂存的已修改资源的颜色 */
	'gitDecoration.stageModifiedResourceForeground'?: string
	/** 子模块资源的颜色 */
	'gitDecoration.submoduleResourceForeground'?: string
	/** 未跟踪资源的颜色 */
	'gitDecoration.untrackedResourceForeground'?: string
	/** 工作台中图标的默认颜色 */
	'icon.foreground'?: string
	/** 交互式编辑器小组件的背景色 */
	'inlineChat.background'?: string
	/** 交互式编辑器小组件的边框颜色 */
	'inlineChat.border'?: string
	/** 交互式编辑器小组件的前景色 */
	'inlineChat.foreground'?: string
	/** 交互式编辑器小组件的阴影颜色 */
	'inlineChat.shadow'?: string
	/** 交互式编辑器输入中已插入文本的背景色 */
	'inlineChatDiff.inserted'?: string
	/** 交互式编辑器输入中已删除文本的背景色 */
	'inlineChatDiff.removed'?: string
	/** 交互式编辑器输入的背景色 */
	'inlineChatInput.background'?: string
	/** 交互式编辑器输入的边框颜色 */
	'inlineChatInput.border'?: string
	/** 聚焦时交互式编辑器输入的边框颜色 */
	'inlineChatInput.focusBorder'?: string
	/** 交互式编辑器输入占位符的前景色 */
	'inlineChatInput.placeholderForeground'?: string
	/** 内联编辑装订线指示器的背景色 */
	'inlineEdit.gutterIndicator.background'?: string
	/** 主要内联编辑装订线指示器的背景色 */
	'inlineEdit.gutterIndicator.primaryBackground'?: string
	/** 主要内联编辑装订线指示器的边框颜色 */
	'inlineEdit.gutterIndicator.primaryBorder'?: string
	/** 主要内联编辑装订线指示器的前景色 */
	'inlineEdit.gutterIndicator.primaryForeground'?: string
	/** 辅助内联编辑装订线指示器的背景色 */
	'inlineEdit.gutterIndicator.secondaryBackground'?: string
	/** 辅助内联编辑装订线指示器的边框颜色 */
	'inlineEdit.gutterIndicator.secondaryBorder'?: string
	/** 辅助内联编辑装订线指示器的前景色 */
	'inlineEdit.gutterIndicator.secondaryForeground'?: string
	/** 成功的内联编辑装订线指示器的背景色 */
	'inlineEdit.gutterIndicator.successfulBackground'?: string
	/** 成功内联编辑装订线指示器的边框颜色 */
	'inlineEdit.gutterIndicator.successfulBorder'?: string
	/** 成功内联编辑装订线指示器的前景色 */
	'inlineEdit.gutterIndicator.successfulForeground'?: string
	/** 内联编辑中已修改文本的背景色 */
	'inlineEdit.modifiedBackground'?: string
	/** 内联编辑中已修改文本的边框颜色 */
	'inlineEdit.modifiedBorder'?: string
	/** 内联编辑的修改文本中已更改行的背景色 */
	'inlineEdit.modifiedChangedLineBackground'?: string
	/** 内联编辑的修改文本中已更改文本的覆盖颜色 */
	'inlineEdit.modifiedChangedTextBackground'?: string
	/** 内联编辑中原始文本的背景色 */
	'inlineEdit.originalBackground'?: string
	/** 内联编辑中原始文本的边框颜色 */
	'inlineEdit.originalBorder'?: string
	/** 内联编辑的原始文本中已更改行的背景色 */
	'inlineEdit.originalChangedLineBackground'?: string
	/** 内联编辑的原始文本中已更改文本的覆盖颜色 */
	'inlineEdit.originalChangedTextBackground'?: string
	/** 按 Tab 键接受它时，内联编辑小组件修改后的边框颜色 */
	'inlineEdit.tabWillAcceptModifiedBorder'?: string
	/** 按 Tab 键接受它时，原始文本上方内联编辑小组件的原始边框颜色 */
	'inlineEdit.tabWillAcceptOriginalBorder'?: string
	/** 输入框背景色 */
	'input.background'?: string
	/** 输入框边框 */
	'input.border'?: string
	/** 输入框前景色 */
	'input.foreground'?: string
	/** 输入框中占位符的前景色 */
	'input.placeholderForeground'?: string
	/** 输入字段中选项的背景悬停颜色 */
	'inputOption.activeBackground'?: string
	/** 输入字段中已激活选项的边框颜色 */
	'inputOption.activeBorder'?: string
	/** 输入字段中已激活的选项的前景色 */
	'inputOption.activeForeground'?: string
	/** 输入字段中激活选项的背景颜色 */
	'inputOption.hoverBackground'?: string
	/** 输入验证结果为错误级别时的背景色 */
	'inputValidation.errorBackground'?: string
	/** 严重性为错误时输入验证的边框颜色 */
	'inputValidation.errorBorder'?: string
	/** 输入验证结果为错误级别时的前景色 */
	'inputValidation.errorForeground'?: string
	/** 输入验证结果为信息级别时的背景色 */
	'inputValidation.infoBackground'?: string
	/** 严重性为信息时输入验证的边框颜色 */
	'inputValidation.infoBorder'?: string
	/** 输入验证结果为信息级别时的前景色 */
	'inputValidation.infoForeground'?: string
	/** 严重性为警告时输入验证的背景色 */
	'inputValidation.warningBackground'?: string
	/** 严重性为警告时输入验证的边框颜色 */
	'inputValidation.warningBorder'?: string
	/** 输入验证结果为警告级别时的前景色 */
	'inputValidation.warningForeground'?: string
	/** 当编辑器具有焦点时，当前交互式代码单元格的边框颜色 */
	'interactive.activeCodeBorder'?: string
	/** 当编辑器没有焦点时，当前交互式代码单元格的边框颜色 */
	'interactive.inactiveCodeBorder'?: string
	/** 键绑定标签背景色。键绑定标签用于表示键盘快捷方式 */
	'keybindingLabel.background'?: string
	/** 键绑定标签边框色。键绑定标签用于表示键盘快捷方式 */
	'keybindingLabel.border'?: string
	/** 键绑定标签边框底部色。键绑定标签用于表示键盘快捷方式 */
	'keybindingLabel.bottomBorder'?: string
	/** 键绑定标签前景色。键绑定标签用于表示键盘快捷方式 */
	'keybindingLabel.foreground'?: string
	/** Background color for the keyboard shortcuts table header */
	'keybindingTable.headerBackground'?: string
	/** Background color for the keyboard shortcuts table alternating rows */
	'keybindingTable.rowsBackground'?: string
	/** 已选项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.activeSelectionBackground'?: string
	/** 已选项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.activeSelectionForeground'?: string
	/** 已选项在列表/树活动时的列表/树图标前景颜色。活动的列表/树具有键盘焦点，非活动的则没有 */
	'list.activeSelectionIconForeground'?: string
	/** 取消强调的项的列表/树前景色 */
	'list.deemphasizedForeground'?: string
	/** 使用鼠标移动项目时，列表或树进行拖放的背景颜色 */
	'list.dropBackground'?: string
	/** 使用鼠标在项目之间移动项时，列表/树拖放边框的颜色 */
	'list.dropBetweenBackground'?: string
	/** 包含错误的列表项的前景颜色 */
	'list.errorForeground'?: string
	/** 筛选后的匹配项的背景颜色 */
	'list.filterMatchBackground'?: string
	/** 筛选后的匹配项的边框颜色 */
	'list.filterMatchBorder'?: string
	/** 当列表/树处于活动状态且已选择时，重点项的列表/树边框颜色。活动的列表/树具有键盘焦点，但非活动的则没有 */
	'list.focusAndSelectionOutline'?: string
	/** 焦点项在列表或树活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.focusBackground'?: string
	/** 焦点项在列表或树活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.focusForeground'?: string
	/** 在列表或树中搜索时，匹配活动聚焦项的突出显示内容的列表/树前景色 */
	'list.focusHighlightForeground'?: string
	/** 列表/树活动时，焦点项目的列表/树边框色。活动的列表/树具有键盘焦点，非活动的没有 */
	'list.focusOutline'?: string
	/** 在列表或树中搜索时，其中匹配内容的高亮颜色 */
	'list.highlightForeground'?: string
	/** 使用鼠标移动项目时，列表或树的背景颜色 */
	'list.hoverBackground'?: string
	/** 鼠标在项目上悬停时，列表或树的前景颜色 */
	'list.hoverForeground'?: string
	/** 非活动的列表或树控件中焦点项的背景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.inactiveFocusBackground'?: string
	/** 列表/数非活动时，焦点项目的列表/树边框色。活动的列表/树具有键盘焦点，非活动的没有 */
	'list.inactiveFocusOutline'?: string
	/** 已选项在列表或树非活动时的背景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.inactiveSelectionBackground'?: string
	/** 已选项在列表或树非活动时的前景颜色。活动的列表或树具有键盘焦点，非活动的没有 */
	'list.inactiveSelectionForeground'?: string
	/** 已选项在列表/树非活动时的图标前景颜色。活动的列表/树具有键盘焦点，非活动的则没有 */
	'list.inactiveSelectionIconForeground'?: string
	/** 列表或树中无效项的前景色，例如资源管理器中没有解析的根目录 */
	'list.invalidItemForeground'?: string
	/** 包含警告的列表项的前景颜色 */
	'list.warningForeground'?: string
	/** 列表和树中类型筛选器小组件的背景色 */
	'listFilterWidget.background'?: string
	/** 当没有匹配项时，列表和树中类型筛选器小组件的轮廓颜色 */
	'listFilterWidget.noMatchesOutline'?: string
	/** 列表和树中类型筛选器小组件的轮廓颜色 */
	'listFilterWidget.outline'?: string
	/** 列表和树中类型筛选器小组件的阴影颜色 */
	'listFilterWidget.shadow'?: string
	/** Foreground color for caution alerts in markdown */
	'markdownAlert.caution.foreground'?: string
	/** Foreground color for important alerts in markdown */
	'markdownAlert.important.foreground'?: string
	/** Foreground color for note alerts in markdown */
	'markdownAlert.note.foreground'?: string
	/** Foreground color for tip alerts in markdown */
	'markdownAlert.tip.foreground'?: string
	/** Foreground color for warning alerts in markdown */
	'markdownAlert.warning.foreground'?: string
	/** 带星标的 mcp 的图标颜色 */
	'mcpIcon.starForeground'?: string
	/** 菜单项的背景颜色 */
	'menu.background'?: string
	/** 菜单的边框颜色 */
	'menu.border'?: string
	/** 菜单项的前景颜色 */
	'menu.foreground'?: string
	/** 菜单中所选菜单项的背景色 */
	'menu.selectionBackground'?: string
	/** 菜单中所选菜单项的边框颜色 */
	'menu.selectionBorder'?: string
	/** 菜单中选定菜单项的前景色 */
	'menu.selectionForeground'?: string
	/** 菜单中分隔线的颜色 */
	'menu.separatorBackground'?: string
	/** 菜单栏中选定菜单项的背景色 */
	'menubar.selectionBackground'?: string
	/** 菜单栏中所选菜单项的边框颜色 */
	'menubar.selectionBorder'?: string
	/** 菜单栏中选定菜单项的前景色 */
	'menubar.selectionForeground'?: string
	/** 内联合并冲突中标头和分割线的边框颜色 */
	'merge.border'?: string
	/** 内联合并冲突中的常见祖先内容背景。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.commonContentBackground'?: string
	/** 内联合并冲突中的常见祖先标头背景。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.commonHeaderBackground'?: string
	/** 内联合并冲突中的当前内容背景。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.currentContentBackground'?: string
	/** 当前标题背景的内联合并冲突。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.currentHeaderBackground'?: string
	/** 内联合并冲突中的传入内容背景。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.incomingContentBackground'?: string
	/** 内联合并冲突中的传入标题背景。颜色必须透明，以免隐藏下面的修饰效果 */
	'merge.incomingHeaderBackground'?: string
	/** 更改的背景色 */
	'mergeEditor.change.background'?: string
	/** 字词更改的背景色 */
	'mergeEditor.change.word.background'?: string
	/** 基中更改的背景色 */
	'mergeEditor.changeBase.background'?: string
	/** 基中字更改的背景色 */
	'mergeEditor.changeBase.word.background'?: string
	/** 输入 1 中更改的前景色 */
	'mergeEditor.conflict.handled.minimapOverViewRuler'?: string
	/** 处理的重点冲突的边框颜色 */
	'mergeEditor.conflict.handledFocused.border'?: string
	/** 已处理的非重点冲突的边框颜色 */
	'mergeEditor.conflict.handledUnfocused.border'?: string
	/** 输入 1 中修饰的背景色 */
	'mergeEditor.conflict.input1.background'?: string
	/** 输入 2 中修饰的背景色 */
	'mergeEditor.conflict.input2.background'?: string
	/** 输入 1 中更改的前景色 */
	'mergeEditor.conflict.unhandled.minimapOverViewRuler'?: string
	/** 未处理的重点冲突的边框颜色 */
	'mergeEditor.conflict.unhandledFocused.border'?: string
	/** 未处理的非重点冲突的边框颜色 */
	'mergeEditor.conflict.unhandledUnfocused.border'?: string
	/** “冲突行”文本的背景 */
	'mergeEditor.conflictingLines.background'?: string
	/** 迷你地图背景颜色 */
	'minimap.background'?: string
	/** 迷你地图中挂起的编辑区域的颜色 */
	'minimap.chatEditHighlight'?: string
	/** 用于错误的迷你地图标记颜色 */
	'minimap.errorHighlight'?: string
	/** 用于查找匹配项的迷你地图标记颜色 */
	'minimap.findMatchHighlight'?: string
	/** 在缩略图中呈现的前景元素的不透明度。例如，"#000000c0" 将呈现不透明度为 75% 的元素 */
	'minimap.foregroundOpacity'?: string
	/** 信息的迷你地图标记颜色 */
	'minimap.infoHighlight'?: string
	/** 编辑器选区在迷你地图中对应的标记颜色 */
	'minimap.selectionHighlight'?: string
	/** 用于重复编辑器选择的缩略图标记颜色 */
	'minimap.selectionOccurrenceHighlight'?: string
	/** 用于警告的迷你地图标记颜色 */
	'minimap.warningHighlight'?: string
	/** 添加的线的迷你地图装订线背景颜色 */
	'minimapGutter.addedBackground'?: string
	/** 删除的线的迷你地图装订线背景颜色 */
	'minimapGutter.deletedBackground'?: string
	/** 修改的线的迷你地图装订线背景颜色 */
	'minimapGutter.modifiedBackground'?: string
	/** 单击时，迷你地图滑块的背景颜色 */
	'minimapSlider.activeBackground'?: string
	/** 迷你地图滑块背景颜色 */
	'minimapSlider.background'?: string
	/** 悬停时，迷你地图滑块的背景颜色 */
	'minimapSlider.hoverBackground'?: string
	/** 多文件差异编辑器的背景色 */
	'multiDiffEditor.background'?: string
	/** 多文件差异编辑器的边框颜色 */
	'multiDiffEditor.border'?: string
	/** 差异编辑器标题的背景色 */
	'multiDiffEditor.headerBackground'?: string
	/** 笔记本单元格的边框颜色 */
	'notebook.cellBorderColor'?: string
	/** 单元格编辑器背景色 */
	'notebook.cellEditorBackground'?: string
	/** 将鼠标悬停在单元格上时单元格的背景色 */
	'notebook.cellHoverBackground'?: string
	/** 笔记本单元格插入指示符的颜色 */
	'notebook.cellInsertionIndicator'?: string
	/** 笔记本单元格状态栏项的背景色 */
	'notebook.cellStatusBarItemHoverBackground'?: string
	/** 单元格底部工具栏中分隔符的颜色 */
	'notebook.cellToolbarSeparator'?: string
	/** 笔记本背景色 */
	'notebook.editorBackground'?: string
	/** 将焦点放在单元格上时单元格的背景色 */
	'notebook.focusedCellBackground'?: string
	/** 将焦点放在单元格上时单元格焦点指示器边框的颜色 */
	'notebook.focusedCellBorder'?: string
	/** 笔记本单元格编辑器边框的颜色 */
	'notebook.focusedEditorBorder'?: string
	/** 当主要焦点在编辑器外时，聚焦单元格时单元格的上下边框的颜色 */
	'notebook.inactiveFocusedCellBorder'?: string
	/** 选定多个单元格时单元格边框的颜色 */
	'notebook.inactiveSelectedCellBorder'?: string
	/** 笔记本输出容器背景的颜色 */
	'notebook.outputContainerBackgroundColor'?: string
	/** 笔记本输出容器的边框颜色 */
	'notebook.outputContainerBorderColor'?: string
	/** 选中某个单元格时该单元格的背景色 */
	'notebook.selectedCellBackground'?: string
	/** 选中单元格但未将焦点放在其上时单元格上边框和下边框的颜色 */
	'notebook.selectedCellBorder'?: string
	/** 突出显示的单元格的背景色 */
	'notebook.symbolHighlightBackground'?: string
	/** 笔记本编辑器概述标尺中正在运行的单元格修饰的颜色 */
	'notebookEditorOverviewRuler.runningCellForeground'?: string
	/** 单击时笔记本滚动条滑块的背景色 */
	'notebookScrollbarSlider.activeBackground'?: string
	/** 笔记本滚动条滑块的背景色 */
	'notebookScrollbarSlider.background'?: string
	/** 悬停时笔记本滚动条滑块的背景色 */
	'notebookScrollbarSlider.hoverBackground'?: string
	/** 单元格状态栏中笔记本单元格的错误图标颜色 */
	'notebookStatusErrorIcon.foreground'?: string
	/** 单元格状态栏中笔记本单元格的“正在运行”图标颜色 */
	'notebookStatusRunningIcon.foreground'?: string
	/** 单元格状态栏中笔记本单元格的错误图标颜色 */
	'notebookStatusSuccessIcon.foreground'?: string
	/** 通知中心的边框颜色。通知从窗口右下角滑入 */
	'notificationCenter.border'?: string
	/** 通知中心头部的背景色。通知从窗口右下角滑入 */
	'notificationCenterHeader.background'?: string
	/** 通知中心头部的前景色。通知从窗口右下角滑入 */
	'notificationCenterHeader.foreground'?: string
	/** 通知链接的前景色。通知从窗口右下角滑入 */
	'notificationLink.foreground'?: string
	/** 通知横幅的边框颜色。通知从窗口右下角滑入 */
	'notificationToast.border'?: string
	/** 通知的背景色。通知从窗口右下角滑入 */
	'notifications.background'?: string
	/** 通知中心中分隔通知的边框的颜色。通知从窗口右下角滑入 */
	'notifications.border'?: string
	/** 通知的前景色。通知从窗口右下角滑入 */
	'notifications.foreground'?: string
	/** 用于错误通知图标的颜色。通知从窗口右下角滑入 */
	'notificationsErrorIcon.foreground'?: string
	/** 用于信息通知图标的颜色。通知从窗口右下角滑入 */
	'notificationsInfoIcon.foreground'?: string
	/** 用于警告通知图标的颜色。通知从窗口右下角滑入 */
	'notificationsWarningIcon.foreground'?: string
	/** 输出视图背景色 */
	'outputView.background'?: string
	/** 输出视图粘滞滚动背景色 */
	'outputViewStickyScroll.background'?: string
	/** 面板的背景色。面板显示在编辑器区域下方，可包含输出和集成终端等视图 */
	'panel.background'?: string
	/** 将面板与编辑器隔开的边框的颜色。面板显示在编辑区域下方，包含输出和集成终端等视图 */
	'panel.border'?: string
	/** 拖放面板标题的反馈颜色。面板显示在编辑器区域的下方，包含输出和集成终端等视图 */
	'panel.dropBorder'?: string
	/** 用于面板中输入内容的输入框边框 */
	'panelInput.border'?: string
	/** 当多个视图在面板中水平堆叠时使用的面板区域边框颜色。面板显示在编辑器区域下方，其中包含输出和集成终端等视图。面板部分是嵌套在面板中的视图 */
	'panelSection.border'?: string
	/** 拖放面板区域的反馈颜色。颜色应具有透明度，以便面板区域仍可以显示出来。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图 */
	'panelSection.dropBackground'?: string
	/** 面板区域标题背景色。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图 */
	'panelSectionHeader.background'?: string
	/** 当多个视图在面板中垂直堆叠时使用的面板区域标题边框颜色。面板显示在编辑器区域下方，其中包含输出和集成终端等视图。面板部分是嵌套在面板中的视图 */
	'panelSectionHeader.border'?: string
	/** 面板区域标题前景色。面板显示在编辑器区域的下方，包含输出和集成终端等视图。面板部分是嵌套在面板中的视图 */
	'panelSectionHeader.foreground'?: string
	/** 面板中粘滞滚动的背景色 */
	'panelStickyScroll.background'?: string
	/** 面板中粘滞滚动的边框颜色 */
	'panelStickyScroll.border'?: string
	/** 面板中粘滞滚动的阴影颜色 */
	'panelStickyScroll.shadow'?: string
	/** 活动面板标题的边框颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图 */
	'panelTitle.activeBorder'?: string
	/** 活动面板的标题颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图 */
	'panelTitle.activeForeground'?: string
	/** 底部的面板标题边框颜色，将标题与视图隔开。面板显示在编辑器区域下方，可包含输出和集成终端等视图 */
	'panelTitle.border'?: string
	/** 非活动面板的标题颜色。面板显示在编辑器区域下方，并包含输出和集成终端等视图 */
	'panelTitle.inactiveForeground'?: string
	/** 面板标题徽章背景色。面板显示在编辑器区域下方，可包含输出和集成终端等视图 */
	'panelTitleBadge.background'?: string
	/** 面板标题徽章前景色。面板显示在编辑器区域下方，可包含输出和集成终端等视图 */
	'panelTitleBadge.foreground'?: string
	/** 速览视图边框和箭头颜色 */
	'peekView.border'?: string
	/** 速览视图编辑器背景色 */
	'peekViewEditor.background'?: string
	/** 在速览视图编辑器中匹配突出显示颜色 */
	'peekViewEditor.matchHighlightBackground'?: string
	/** 在速览视图编辑器中匹配项的突出显示边框 */
	'peekViewEditor.matchHighlightBorder'?: string
	/** 速览视图编辑器中装订线的背景色 */
	'peekViewEditorGutter.background'?: string
	/** 速览视图编辑器中粘滞滚动的背景色 */
	'peekViewEditorStickyScroll.background'?: string
	/** 速览视图编辑器中粘滞滚动的装订线部件的背景色 */
	'peekViewEditorStickyScrollGutter.background'?: string
	/** 速览视图结果列表背景色 */
	'peekViewResult.background'?: string
	/** 速览视图结果列表中文件节点的前景色 */
	'peekViewResult.fileForeground'?: string
	/** 速览视图结果列表中行节点的前景色 */
	'peekViewResult.lineForeground'?: string
	/** 在速览视图结果列表中匹配突出显示颜色 */
	'peekViewResult.matchHighlightBackground'?: string
	/** 速览视图结果列表中所选条目的背景色 */
	'peekViewResult.selectionBackground'?: string
	/** 速览视图结果列表中所选条目的前景色 */
	'peekViewResult.selectionForeground'?: string
	/** 速览视图标题区域背景颜色 */
	'peekViewTitle.background'?: string
	/** 速览视图标题信息颜色 */
	'peekViewTitleDescription.foreground'?: string
	/** 速览视图标题颜色 */
	'peekViewTitleLabel.foreground'?: string
	/** 快速选取器分组边框的颜色 */
	'pickerGroup.border'?: string
	/** 快速选取器分组标签的颜色 */
	'pickerGroup.foreground'?: string
	/** 具有关联的正在运行的进程的端口图标颜色 */
	'ports.iconRunningProcessForeground'?: string
	/** 用于问题错误图标的颜色 */
	'problemsErrorIcon.foreground'?: string
	/** 用于问题信息图标的颜色 */
	'problemsInfoIcon.foreground'?: string
	/** 用于问题警告图标的颜色 */
	'problemsWarningIcon.foreground'?: string
	/** 配置文件徽章背景色。配置文件徽章显示在活动栏中设置齿轮图标的顶部 */
	'profileBadge.background'?: string
	/** 配置文件徽章前景颜色。配置文件徽章显示在活动栏中设置齿轮图标的顶部 */
	'profileBadge.foreground'?: string
	/** 配置文件编辑器拆分视图窗体边框的颜色 */
	'profiles.sashBorder'?: string
	/** 表示长时间操作的进度条的背景色 */
	'progressBar.background'?: string
	/** 背景颜色快速选取器。快速选取器小部件是选取器(如命令调色板)的容器 */
	'quickInput.background'?: string
	/** 前景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器 */
	'quickInput.foreground'?: string
	'quickInput.list.focusBackground'?: string
	/** 焦点项目的快速选择器背景色 */
	'quickInputList.focusBackground'?: string
	/** 焦点项目的快速选择器前景色 */
	'quickInputList.focusForeground'?: string
	/** 焦点项目的快速选取器图标前景色 */
	'quickInputList.focusIconForeground'?: string
	/** 标题背景颜色快速选取器。快速选取器小部件是命令调色板等选取器的容器 */
	'quickInputTitle.background'?: string
	/** 活动单选选项的背景色 */
	'radio.activeBackground'?: string
	/** 活动单选选项的边框颜色 */
	'radio.activeBorder'?: string
	/** 活动单选选项的前景色 */
	'radio.activeForeground'?: string
	/** 非活动单选选项的背景色 */
	'radio.inactiveBackground'?: string
	/** 非活动单选选项的边框颜色 */
	'radio.inactiveBorder'?: string
	/** 非活动单选选项的前景色 */
	'radio.inactiveForeground'?: string
	/** 悬停时非活动单选选项的背景色 */
	'radio.inactiveHoverBackground'?: string
	/** 已添加资源的颜色 */
	'remoteHub.decorations.addedForegroundColor'?: string
	/** 存在冲突的资源的颜色 */
	'remoteHub.decorations.conflictForegroundColor'?: string
	/** 已删除资源的颜色 */
	'remoteHub.decorations.deletedForegroundColor'?: string
	/** 已忽略资源的颜色 */
	'remoteHub.decorations.ignoredResourceForeground'?: string
	/** 传入的已添加资源的颜色 */
	'remoteHub.decorations.incomingAddedForegroundColor'?: string
	/** 传入的已删除资源的颜色 */
	'remoteHub.decorations.incomingDeletedForegroundColor'?: string
	/** 传入修改的资源的颜色 */
	'remoteHub.decorations.incomingModifiedForegroundColor'?: string
	/** 传入的重命名资源的颜色 */
	'remoteHub.decorations.incomingRenamedForegroundColor'?: string
	/** 已修改资源的颜色 */
	'remoteHub.decorations.modifiedForegroundColor'?: string
	/** 可能发生冲突的资源的颜色 */
	'remoteHub.decorations.possibleConflictForegroundColor'?: string
	/** 子模块资源的颜色 */
	'remoteHub.decorations.submoduleForegroundColor'?: string
	/** 具有未提交更改的工作区存储库的颜色 */
	'remoteHub.decorations.workspaceRepositoriesView.hasUncommittedChangesForegroundColor'?: string
	/** 活动框格的边框颜色 */
	'sash.hoverBorder'?: string
	/** 源代码管理图前景色(1) */
	'scmGraph.foreground1'?: string
	/** 源代码管理图前景色(2) */
	'scmGraph.foreground2'?: string
	/** 源代码管理图前景色(3) */
	'scmGraph.foreground3'?: string
	/** 源代码管理图前景色(4) */
	'scmGraph.foreground4'?: string
	/** 源代码管理图前景色(5) */
	'scmGraph.foreground5'?: string
	/** 历史记录项基本引用颜色 */
	'scmGraph.historyItemBaseRefColor'?: string
	/** 历史记录项悬停添加项前景色 */
	'scmGraph.historyItemHoverAdditionsForeground'?: string
	/** 历史记录项悬停默认标签背景色 */
	'scmGraph.historyItemHoverDefaultLabelBackground'?: string
	/** 历史记录项悬停默认标签前景色 */
	'scmGraph.historyItemHoverDefaultLabelForeground'?: string
	/** 历史记录项悬停删除项前景色 */
	'scmGraph.historyItemHoverDeletionsForeground'?: string
	/** 历史记录项组悬停标签前景色 */
	'scmGraph.historyItemHoverLabelForeground'?: string
	/** 历史记录项引用颜色 */
	'scmGraph.historyItemRefColor'?: string
	/** 历史记录项远程引用颜色 */
	'scmGraph.historyItemRemoteRefColor'?: string
	/** Scrollbar track background color */
	'scrollbar.background'?: string
	/** 表示视图被滚动的滚动条阴影 */
	'scrollbar.shadow'?: string
	/** 滚动条滑块在被点击时的背景色 */
	'scrollbarSlider.activeBackground'?: string
	/** 滚动条滑块背景色 */
	'scrollbarSlider.background'?: string
	/** 滚动条滑块在悬停时的背景色 */
	'scrollbarSlider.hoverBackground'?: string
	/** 搜索 Viewlet 完成消息中文本的颜色 */
	'search.resultsInfoForeground'?: string
	/** 搜索编辑器查询匹配的颜色 */
	'searchEditor.findMatchBackground'?: string
	/** 搜索编辑器查询匹配的边框颜色 */
	'searchEditor.findMatchBorder'?: string
	/** 搜索编辑器文本输入框的边框 */
	'searchEditor.textInputBorder'?: string
	/** 工作台所选文本的背景颜色(例如输入字段或文本区域)。注意，本设置不适用于编辑器 */
	'selection.background'?: string
	/** 设置编辑器复选框背景 */
	'settings.checkboxBackground'?: string
	/** 设置编辑器复选框边框 */
	'settings.checkboxBorder'?: string
	/** 设置编辑器复选框前景 */
	'settings.checkboxForeground'?: string
	/** 设置编辑器下拉列表背景色 */
	'settings.dropdownBackground'?: string
	/** 设置编辑器下拉列表边框 */
	'settings.dropdownBorder'?: string
	/** 设置编辑器下拉列表前景色 */
	'settings.dropdownForeground'?: string
	/** 设置编辑器下拉列表边框。这会将选项包围起来，并将选项与描述分开 */
	'settings.dropdownListBorder'?: string
	/** 聚焦时设置行的背景色 */
	'settings.focusedRowBackground'?: string
	/** 将焦点放在行上时行的上边框和下边框的颜色 */
	'settings.focusedRowBorder'?: string
	/** 标头容器边框的颜色 */
	'settings.headerBorder'?: string
	/** 节标题或活动标题的前景颜色 */
	'settings.headerForeground'?: string
	/** 修改后的设置指示器的颜色 */
	'settings.modifiedItemIndicator'?: string
	/** 设置编辑器编号输入框背景 */
	'settings.numberInputBackground'?: string
	/** 设置编辑器编号输入框边框 */
	'settings.numberInputBorder'?: string
	/** 设置编辑器编号输入框前景 */
	'settings.numberInputForeground'?: string
	/** 悬停时设置行的背景色 */
	'settings.rowHoverBackground'?: string
	/** 设置编辑器分割檢視窗扇边框的颜色 */
	'settings.sashBorder'?: string
	/** 节标题或悬停标题的前景色 */
	'settings.settingsHeaderHoverForeground'?: string
	/** 设置编辑器文本输入框背景 */
	'settings.textInputBackground'?: string
	/** 设置编辑器文本输入框边框 */
	'settings.textInputBorder'?: string
	/** 设置编辑器文本输入框前景 */
	'settings.textInputForeground'?: string
	/** 侧边栏背景色。侧边栏是资源管理器和搜索等视图的容器 */
	'sideBar.background'?: string
	/** 侧边栏分隔编辑器的边框颜色。侧边栏包含资源管理器、搜索等视图 */
	'sideBar.border'?: string
	/** 侧边栏中的部分在拖放时的反馈颜色。此颜色应有透明度，以便侧边栏中的部分仍能透过。侧边栏是资源管理器和搜索等视图的容器。侧边栏部分是嵌套在侧边栏中的视图 */
	'sideBar.dropBackground'?: string
	/** 侧边栏前景色。侧边栏是资源管理器和搜索等视图的容器 */
	'sideBar.foreground'?: string
	/** 顶部/底部的活动栏与视图之间的边框颜色 */
	'sideBarActivityBarTop.border'?: string
	/** 侧边栏部分标题背景色。此侧边栏是资源管理器和搜索等视图的容器。侧边栏部分是在侧边栏中嵌套的视图 */
	'sideBarSectionHeader.background'?: string
	/** 侧边栏部分标题边界色。侧栏是类似资源管理器和搜索等视图的容器。侧栏部分是在侧栏中嵌套的视图 */
	'sideBarSectionHeader.border'?: string
	/** 侧边栏部分标题前景色。侧栏是类似资源管理器和搜索等视图的容器。侧栏部分是在侧栏中嵌套的视图 */
	'sideBarSectionHeader.foreground'?: string
	/** 侧边栏中粘滞滚动的背景色 */
	'sideBarStickyScroll.background'?: string
	/** 边栏中粘滞滚动的边框颜色 */
	'sideBarStickyScroll.border'?: string
	/** 边栏中粘滞滚动的阴影颜色 */
	'sideBarStickyScroll.shadow'?: string
	/** 边栏标题背景色。边栏是资源管理器和搜索等视图的容器 */
	'sideBarTitle.background'?: string
	/** 底部的侧栏标题边框颜色，将标题与视图隔开。边栏是资源管理器和搜索等视图的容器 */
	'sideBarTitle.border'?: string
	/** 侧边栏标题前景色。侧边栏是资源管理器和搜索等视图的容器 */
	'sideBarTitle.foreground'?: string
	/** 在编辑器组中上下并排显示时，用于分隔两个编辑器的颜色 */
	'sideBySideEditor.horizontalBorder'?: string
	/** 在编辑器组中左右并排显示时，用于区分两个编辑器的颜色 */
	'sideBySideEditor.verticalBorder'?: string
	/** 窗体边框颜色 */
	'simpleFindWidget.sashBorder'?: string
	/** 工作区或文件夹打开时状态栏的背景色。状态栏显示在窗口底部 */
	'statusBar.background'?: string
	/** 状态栏分隔侧边栏和编辑器的边框颜色。状态栏显示在窗口底部 */
	'statusBar.border'?: string
	/** 调试程序时状态栏的背景色。状态栏显示在窗口底部 */
	'statusBar.debuggingBackground'?: string
	/** 调试程序时区别于侧边栏和编辑器的状态栏边框颜色。状态栏显示在窗口底部 */
	'statusBar.debuggingBorder'?: string
	/** 调试程序时状态栏的前景色。状态栏显示在窗口底部 */
	'statusBar.debuggingForeground'?: string
	/** 聚焦于键盘导航时状态栏的边框颜色。状态栏显示在窗口底部 */
	'statusBar.focusBorder'?: string
	/** 工作区或文件夹打开时状态栏的前景色。状态栏显示在窗口底部 */
	'statusBar.foreground'?: string
	/** 没有打开文件夹时状态栏的背景色。状态栏显示在窗口底部 */
	'statusBar.noFolderBackground'?: string
	/** 当没有打开文件夹时，用来使状态栏与侧边栏、编辑器分隔的状态栏边框颜色。状态栏显示在窗口底部 */
	'statusBar.noFolderBorder'?: string
	/** 没有打开文件夹时状态栏的前景色。状态栏显示在窗口底部 */
	'statusBar.noFolderForeground'?: string
	/** 单击时的状态栏项背景色。状态栏显示在窗口底部 */
	'statusBarItem.activeBackground'?: string
	/** 悬停在包含两个悬停的项时的状态栏项背景色。状态栏显示在窗口底部 */
	'statusBarItem.compactHoverBackground'?: string
	/** 状态栏错误项的背景颜色。错误项比状态栏中的其他条目更醒目以显示错误条件。状态栏显示在窗口底部 */
	'statusBarItem.errorBackground'?: string
	'statusBarItem.errorForeground'?: string
	'statusBarItem.errorHoverBackground'?: string
	/** 悬停时状态错误项的前景色。错误项比状态栏中的其他条目更醒目以显示错误条件。状态栏显示在窗口底部 */
	'statusBarItem.errorHoverForeground'?: string
	/** 聚焦于键盘导航时的状态栏项目边框颜色。状态栏显示在窗口底部 */
	'statusBarItem.focusBorder'?: string
	/** 悬停时的状态栏项背景色。状态栏显示在窗口底部 */
	'statusBarItem.hoverBackground'?: string
	/** 悬停时的状态栏项前景色。状态栏显示在窗口底部 */
	'statusBarItem.hoverForeground'?: string
	/** 工作台脱机时的状态栏项背景色 */
	'statusBarItem.offlineBackground'?: string
	/** 工作台脱机时的状态栏项前景色 */
	'statusBarItem.offlineForeground'?: string
	/** 工作台脱机时，状态栏项背景悬停颜色 */
	'statusBarItem.offlineHoverBackground'?: string
	/** 工作台脱机时，状态栏项前台悬停颜色 */
	'statusBarItem.offlineHoverForeground'?: string
	/** 状态栏突出显示项的背景色。突出的项目从其他状态栏条目中突出显示，以指示重要性。状态栏显示在窗口底部 */
	'statusBarItem.prominentBackground'?: string
	/** 状态栏突出显示项的前景色。突出的项目从其他状态栏条目中突出显示，以指示重要性。状态栏显示在窗口底部 */
	'statusBarItem.prominentForeground'?: string
	/** 悬停时状态栏突出显示项的背景色。突出的项目从其他状态栏条目中突出显示，以指示重要性。状态栏显示在窗口底部 */
	'statusBarItem.prominentHoverBackground'?: string
	/** 悬停时状态栏突出显示项的前景色。突出的项目从其他状态栏条目中突出显示，以指示重要性。状态栏显示在窗口底部 */
	'statusBarItem.prominentHoverForeground'?: string
	/** 状态栏上远程指示器的背景色 */
	'statusBarItem.remoteBackground'?: string
	/** 状态栏上远程指示器的前景色 */
	'statusBarItem.remoteForeground'?: string
	/** 悬停时状态栏上远程指示器的背景色 */
	'statusBarItem.remoteHoverBackground'?: string
	/** 悬停时状态栏上远程指示器的前景色 */
	'statusBarItem.remoteHoverForeground'?: string
	/** 状态栏警告项的背景颜色。警告项比状态栏中的其他条目更醒目以显示警告条件。状态栏显示在窗口底部 */
	'statusBarItem.warningBackground'?: string
	'statusBarItem.warningForeground'?: string
	'statusBarItem.warningHoverBackground'?: string
	/** 悬停时状态警告项的前景色。警告项比状态栏中的其他条目更醒目以显示警告条件。状态栏显示在窗口底部 */
	'statusBarItem.warningHoverForeground'?: string
	/** 数组符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中 */
	'symbolIcon.arrayForeground'?: string
	/** 布尔符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.booleanForeground'?: string
	/** 类符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.classForeground'?: string
	/** 颜色符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.colorForeground'?: string
	/** 常量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.constantForeground'?: string
	/** 构造函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.constructorForeground'?: string
	/** 枚举符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.enumeratorForeground'?: string
	/** 枚举器成员符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.enumeratorMemberForeground'?: string
	/** 事件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.eventForeground'?: string
	/** 字段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.fieldForeground'?: string
	/** 文件符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.fileForeground'?: string
	/** 文件夹符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.folderForeground'?: string
	/** 函数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.functionForeground'?: string
	/** 接口符号的前景色。这些符号将显示在大纲、痕迹导航栏和建议小组件中 */
	'symbolIcon.interfaceForeground'?: string
	/** 键符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.keyForeground'?: string
	/** 关键字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.keywordForeground'?: string
	/** 方法符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.methodForeground'?: string
	/** 模块符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.moduleForeground'?: string
	/** 命名空间符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中 */
	'symbolIcon.namespaceForeground'?: string
	/** 空符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.nullForeground'?: string
	/** 数字符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.numberForeground'?: string
	/** 对象符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.objectForeground'?: string
	/** 运算符符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.operatorForeground'?: string
	/** 包符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.packageForeground'?: string
	/** 属性符号的前景色。这些符号出现在大纲、痕迹导航栏和建议小组件中 */
	'symbolIcon.propertyForeground'?: string
	/** 参考符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.referenceForeground'?: string
	/** 片段符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.snippetForeground'?: string
	/** 字符串符号的前景颜色。这些符号出现在轮廓、痕迹导航栏和建议小部件中 */
	'symbolIcon.stringForeground'?: string
	/** 结构符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.structForeground'?: string
	/** 文本符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.textForeground'?: string
	/** 类型参数符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.typeParameterForeground'?: string
	/** 单位符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.unitForeground'?: string
	/** 变量符号的前景颜色。这些符号出现在大纲、痕迹导航栏和建议小部件中 */
	'symbolIcon.variableForeground'?: string
	/** 活动选项卡的背景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.activeBackground'?: string
	/** 活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组 */
	'tab.activeBorder'?: string
	/** 活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组 */
	'tab.activeBorderTop'?: string
	/** 活动组中活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.activeForeground'?: string
	/** 活动组中已修改的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.activeModifiedBorder'?: string
	/** 用于将选项卡彼此分隔开的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组 */
	'tab.border'?: string
	/** 选项卡之间的边框，指示可以在两个选项卡之间插入选项卡。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.dragAndDropBorder'?: string
	/** 选项卡被悬停时的背景色。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.hoverBackground'?: string
	/** 选项卡被悬停时用于突出显示的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.hoverBorder'?: string
	/** 悬停时选项卡的前景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组 */
	'tab.hoverForeground'?: string
	/** 非活动选项卡的背景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.inactiveBackground'?: string
	/** 活动组中非活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.inactiveForeground'?: string
	/** 活动组中已修改的非活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.inactiveModifiedBorder'?: string
	/** 用于将固定的选项卡与其他选项卡隔开的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.lastPinnedBorder'?: string
	/** 所选选项卡的后台进程。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.selectedBackground'?: string
	/** 所选选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.selectedBorderTop'?: string
	/** 所选选项卡的前台进程。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.selectedForeground'?: string
	/** 非焦点组中的活动选项卡背景色。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedActiveBackground'?: string
	/** 在失去焦点的编辑器组中的活动选项卡底部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组 */
	'tab.unfocusedActiveBorder'?: string
	/** 在失去焦点的编辑器组中的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以存在多个编辑器组 */
	'tab.unfocusedActiveBorderTop'?: string
	/** 一个失去焦点的编辑器组中的活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedActiveForeground'?: string
	/** 未聚焦组中已修改的活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedActiveModifiedBorder'?: string
	/** 非焦点组选项卡被悬停时的背景色。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedHoverBackground'?: string
	/** 非焦点组选项卡被悬停时用于突出显示的边框。选项卡是编辑器区域中编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedHoverBorder'?: string
	/** 悬停时不带焦点的组中的选项卡前景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组 */
	'tab.unfocusedHoverForeground'?: string
	/** 不带焦点的组中处于非活动状态的选项卡的背景色。选项卡是编辑器区域中的编辑器的容器。可在一个编辑器组中打开多个选项卡。可存在多个编辑器组 */
	'tab.unfocusedInactiveBackground'?: string
	/** 在一个失去焦点的组中非活动选项卡的前景色。在编辑器区域，选项卡是编辑器的容器。可在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedInactiveForeground'?: string
	/** 未聚焦组中已修改的非活动选项卡顶部的边框。选项卡是编辑器区域中编辑器的容器。可以在一个编辑器组中打开多个选项卡。可以有多个编辑器组 */
	'tab.unfocusedInactiveModifiedBorder'?: string
	/** 终端中的 ANSI 颜色“Black” */
	'terminal.ansiBlack'?: string
	/** 终端中的 ANSI 颜色“Blue” */
	'terminal.ansiBlue'?: string
	/** 终端中的 ANSI 颜色“BrightBlack” */
	'terminal.ansiBrightBlack'?: string
	/** 终端中的 ANSI 颜色“BrightBlue” */
	'terminal.ansiBrightBlue'?: string
	/** 终端中的 ANSI 颜色“BrightCyan” */
	'terminal.ansiBrightCyan'?: string
	/** 终端中的 ANSI 颜色“BrightGreen” */
	'terminal.ansiBrightGreen'?: string
	/** 终端中的 ANSI 颜色“BrightMagenta” */
	'terminal.ansiBrightMagenta'?: string
	/** 终端中的 ANSI 颜色“BrightRed” */
	'terminal.ansiBrightRed'?: string
	/** 终端中的 ANSI 颜色“BrightWhite” */
	'terminal.ansiBrightWhite'?: string
	/** 终端中的 ANSI 颜色“BrightYellow” */
	'terminal.ansiBrightYellow'?: string
	/** 终端中的 ANSI 颜色“Cyan” */
	'terminal.ansiCyan'?: string
	/** 终端中的 ANSI 颜色“Green” */
	'terminal.ansiGreen'?: string
	/** 终端中的 ANSI 颜色“Magenta” */
	'terminal.ansiMagenta'?: string
	/** 终端中的 ANSI 颜色“Red” */
	'terminal.ansiRed'?: string
	/** 终端中的 ANSI 颜色“White” */
	'terminal.ansiWhite'?: string
	/** 终端中的 ANSI 颜色“Yellow” */
	'terminal.ansiYellow'?: string
	/** 终端的背景颜色，允许终端的颜色与面板不同 */
	'terminal.background'?: string
	/** 分隔终端中拆分窗格的边框的颜色。默认值为 panel.border 的颜色 */
	'terminal.border'?: string
	/** 在终端上拖动时的背景颜色。此颜色应有透明度，以便让终端内容透过背景 */
	'terminal.dropBackground'?: string
	/** 终端中当前搜索匹配项的颜色。颜色必须透明，以免隐藏基础终端内容 */
	'terminal.findMatchBackground'?: string
	/** 终端中当前搜索匹配项的边框颜色 */
	'terminal.findMatchBorder'?: string
	/** 终端中其他搜索匹配项的颜色。颜色必须透明，以免隐藏基础终端内容 */
	'terminal.findMatchHighlightBackground'?: string
	/** 终端中其他搜索匹配项的边框颜色 */
	'terminal.findMatchHighlightBorder'?: string
	/** 终端的前景颜色 */
	'terminal.foreground'?: string
	/** Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations */
	'terminal.hoverHighlightBackground'?: string
	/** 终端没有焦点时的选择背景色 */
	'terminal.inactiveSelectionBackground'?: string
	/** 终端初始提示的前景色 */
	'terminal.initialHintForeground'?: string
	/** 终端选中内容的背景颜色 */
	'terminal.selectionBackground'?: string
	/** 终端的选择前景色。如果此值为 null，则将保留所选前景并应用最小对比度功能 */
	'terminal.selectionForeground'?: string
	/** 面板中终端选项卡侧边的边框。此默认为 tab.activeBorder */
	'terminal.tab.activeBorder'?: string
	/** 默认终端命令修饰背景色 */
	'terminalCommandDecoration.defaultBackground'?: string
	/** 错误命令的终端命令修饰背景色 */
	'terminalCommandDecoration.errorBackground'?: string
	/** 成功命令的终端命令修饰背景色 */
	'terminalCommandDecoration.successBackground'?: string
	/** 鼠标悬停在命令及其输出上时，显示在其左侧的终端命令指南的前景色 */
	'terminalCommandGuide.foreground'?: string
	/** 终端光标的背景色。允许自定义被 block 光标遮住的字符的颜色 */
	'terminalCursor.background'?: string
	/** 终端光标的前景色 */
	'terminalCursor.foreground'?: string
	/** 概述标尺左侧边框颜色 */
	'terminalOverviewRuler.border'?: string
	/** 概述标尺光标颜色 */
	'terminalOverviewRuler.cursorForeground'?: string
	/** 用于在终端中查找匹配项的概述标尺标记颜色 */
	'terminalOverviewRuler.findMatchForeground'?: string
	/** 终端中粘滞滚动覆盖的背景色 */
	'terminalStickyScroll.background'?: string
	/** 终端中粘滞滚动覆盖层的边框 */
	'terminalStickyScroll.border'?: string
	/** 悬停时终端中粘滞滚动覆盖的背景色 */
	'terminalStickyScrollHover.background'?: string
	/** 别名图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.aliasForeground'?: string
	/** 参数图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.argumentForeground'?: string
	/** 分支图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.branchForeground'?: string
	/** 提交图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.commitForeground'?: string
	/** 文件图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.fileForeground'?: string
	/** 标志图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.flagForeground'?: string
	/** 文件夹图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.folderForeground'?: string
	/** 内联建议图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.inlineSuggestionForeground'?: string
	/** 方法图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.methodForeground'?: string
	/** 选项图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.optionForeground'?: string
	/** 枚举成员图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.optionValueForeground'?: string
	/** 已完成拉取请求图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.pullRequestDoneForeground'?: string
	/** 拉取请求图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.pullRequestForeground'?: string
	/** 远程图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.remoteForeground'?: string
	/** 储藏图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.stashForeground'?: string
	/** The foreground color for a plaintext suggestion. These icons will appear in the terminal suggest widget */
	'terminalSymbolIcon.symbolText'?: string
	/** 符号链接文件图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.symbolicLinkFileForeground'?: string
	/** 符号链接文件夹图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.symbolicLinkFolderForeground'?: string
	/** 标记图标的前景色。这些图标将显示在终端建议小组件中 */
	'terminalSymbolIcon.tagForeground'?: string
	/** 指明执行计数的徽章的背景 */
	'testing.coverCountBadgeBackground'?: string
	/** 指明执行计数的徽章的前景色 */
	'testing.coverCountBadgeForeground'?: string
	/** 未覆盖文本的背景色 */
	'testing.coveredBackground'?: string
	/** 未覆盖文本的边框颜色 */
	'testing.coveredBorder'?: string
	/** 代码已覆盖的区域的装订线颜色 */
	'testing.coveredGutterBackground'?: string
	/** 测试资源管理器中“出错”图标的颜色 */
	'testing.iconErrored'?: string
	/** 测试资源管理器中“出错”图标的停用颜色 */
	'testing.iconErrored.retired'?: string
	/** 测试资源管理器中“失败”图标的颜色 */
	'testing.iconFailed'?: string
	/** 测试资源管理器中“失败”图标的停用颜色 */
	'testing.iconFailed.retired'?: string
	/** 测试资源管理器中“已通过”图标的颜色 */
	'testing.iconPassed'?: string
	/** 测试资源管理器中“通过”图标的停用颜色 */
	'testing.iconPassed.retired'?: string
	/** 测试资源管理器中“已排队”图标的颜色 */
	'testing.iconQueued'?: string
	/** 测试资源管理器中“已排队”图标的停用颜色 */
	'testing.iconQueued.retired'?: string
	/** 测试资源管理器中“已跳过”图标的颜色 */
	'testing.iconSkipped'?: string
	/** 测试资源管理器中“已跳过”图标的停用颜色 */
	'testing.iconSkipped.retired'?: string
	/** 测试资源管理器中“未设置”图标的颜色 */
	'testing.iconUnset'?: string
	/** 测试资源管理器中“取消设置”图标的停用颜色 */
	'testing.iconUnset.retired'?: string
	/** 在编辑器中内联显示的测试错误消息的背景色 */
	'testing.message.error.badgeBackground'?: string
	/** 在编辑器中内联显示的测试错误消息的边框颜色 */
	'testing.message.error.badgeBorder'?: string
	/** 在编辑器中内联显示的测试错误消息的文本颜色 */
	'testing.message.error.badgeForeground'?: string
	/** 在编辑器中内联显示的错误消息旁边的边距颜色 */
	'testing.message.error.lineBackground'?: string
	/** 在编辑器中内联显示的测试信息消息的文本颜色 */
	'testing.message.info.decorationForeground'?: string
	/** 在编辑器中内联显示的信息消息旁边的边距颜色 */
	'testing.message.info.lineBackground'?: string
	/** 扫视记录的消息时速览视图边框和箭头的颜色 */
	'testing.messagePeekBorder'?: string
	/** 扫视记录的消息时速览视图边框和箭头的颜色 */
	'testing.messagePeekHeaderBackground'?: string
	/** 速览视图边框和箭头颜色 */
	'testing.peekBorder'?: string
	/** 速览视图边框和箭头颜色 */
	'testing.peekHeaderBackground'?: string
	/** 编辑器中“运行”图标的颜色 */
	'testing.runAction'?: string
	/** 未覆盖文本的背景色 */
	'testing.uncoveredBackground'?: string
	/** 未覆盖文本的边框颜色 */
	'testing.uncoveredBorder'?: string
	/** 为未覆盖的分支显示的小组件的背景 */
	'testing.uncoveredBranchBackground'?: string
	/** 代码未覆盖的区域的装订线颜色 */
	'testing.uncoveredGutterBackground'?: string
	/** 文本中块引用的背景颜色 */
	'textBlockQuote.background'?: string
	/** 文本中块引用的边框颜色 */
	'textBlockQuote.border'?: string
	/** 文本中代码块的背景颜色 */
	'textCodeBlock.background'?: string
	/** 文本中链接在点击或鼠标悬停时的前景色  */
	'textLink.activeForeground'?: string
	/** 文本中链接的前景色 */
	'textLink.foreground'?: string
	/** 预格式化文本段的背景色 */
	'textPreformat.background'?: string
	/** 预格式化文本段的前景色 */
	'textPreformat.foreground'?: string
	/** 文字分隔符的颜色 */
	'textSeparator.foreground'?: string
	/** 窗口处于活动状态时的标题栏背景色 */
	'titleBar.activeBackground'?: string
	/** 窗口处于活动状态时的标题栏前景色 */
	'titleBar.activeForeground'?: string
	/** 标题栏边框颜色 */
	'titleBar.border'?: string
	/** 窗口处于非活动状态时的标题栏背景色 */
	'titleBar.inactiveBackground'?: string
	/** 窗口处于非活动状态时的标题栏前景色 */
	'titleBar.inactiveForeground'?: string
	/** 将鼠标悬停在操作上时的工具栏背景 */
	'toolbar.activeBackground'?: string
	/** 使用鼠标悬停在操作上时显示工具栏背景 */
	'toolbar.hoverBackground'?: string
	/** 使用鼠标悬停在操作上时显示工具栏轮廓 */
	'toolbar.hoverOutline'?: string
	/** 非活动缩进参考线的树描边颜色 */
	'tree.inactiveIndentGuidesStroke'?: string
	/** 缩进参考线的树描边颜色 */
	'tree.indentGuidesStroke'?: string
	/** 列之间的表边框颜色 */
	'tree.tableColumnsBorder'?: string
	/** 奇数表行的背景色 */
	'tree.tableOddRowsBackground'?: string
	/** 嵌入于交互式演练场中的编辑器的背景颜色 */
	'walkThrough.embeddedEditorBackground'?: string
	/** 每个演练步骤标题的前景色 */
	'walkthrough.stepTitle.foreground'?: string
	/** 欢迎页面的背景色 */
	'welcomePage.background'?: string
	/** 欢迎页面进度栏的前景色 */
	'welcomePage.progress.background'?: string
	/** 欢迎页面进度栏的背景色 */
	'welcomePage.progress.foreground'?: string
	/** “欢迎”页面上磁贴的背景色 */
	'welcomePage.tileBackground'?: string
	/** “欢迎”页面上磁贴的边框颜色 */
	'welcomePage.tileBorder'?: string
	/** “欢迎”页面上磁贴的悬停背景色 */
	'welcomePage.tileHoverBackground'?: string
	/** 编辑器内小组件(如查找/替换)的边框颜色 */
	'widget.border'?: string
	/** 编辑器内小组件(如查找/替换)的阴影颜色 */
	'widget.shadow'?: string
	/** 窗口在 macOS 或 Linux 上处于活动状态时用于窗口边框的颜色。在 Linux 上需要自定义标题栏样式和自定义或隐藏窗口控件 */
	'window.activeBorder'?: string
	/** 窗口在 macOS 或 Linux 上处于非活动状态时用于窗口边框的颜色。在 Linux 上需要自定义标题栏样式和自定义或隐藏窗口控件 */
	'window.inactiveBorder'?: string
}

declare interface SemanticTokenColors {
	/** 用于抽象符号的样式。 */
	'*.abstract'?: SemanticTokenStyle
	/** 用于异步的符号的样式。 */
	'*.async'?: SemanticTokenStyle
	/** 所有符号声明的样式。 */
	'*.declaration'?: SemanticTokenStyle
	/** 用于已弃用的符号的样式。 */
	'*.deprecated'?: SemanticTokenStyle
	/** 用于文档中引用的样式。 */
	'*.documentation'?: SemanticTokenStyle
	/** 用于写入访问的样式。 */
	'*.modification'?: SemanticTokenStyle
	/** 用于只读符号的样式。 */
	'*.readonly'?: SemanticTokenStyle
	/** 用于静态符号的样式。 */
	'*.static'?: SemanticTokenStyle
	/** 类样式。 */
	class?: SemanticTokenStyle
	/** 注释的样式。 */
	comment?: SemanticTokenStyle
	/** 修饰器和注释的样式。 */
	decorator?: SemanticTokenStyle
	/** 枚举的样式。 */
	enum?: SemanticTokenStyle
	/** 枚举成员的样式。 */
	enumMember?: SemanticTokenStyle
	/** 事件的样式。 */
	event?: SemanticTokenStyle
	/** 函数样式 */
	function?: SemanticTokenStyle
	/** 接口样式。 */
	interface?: SemanticTokenStyle
	/** 关键字的样式。 */
	keyword?: SemanticTokenStyle
	/** 文本样式 */
	label?: SemanticTokenStyle
	/** 宏样式。 */
	macro?: SemanticTokenStyle
	/** 成员函数的样式 */
	member?: SemanticTokenStyle
	/** 成员(成员函数)的样式 */
	method?: SemanticTokenStyle
	/** 命名空间的样式。 */
	namespace?: SemanticTokenStyle
	/** 数字样式。 */
	number?: SemanticTokenStyle
	/** 运算符的样式。 */
	operator?: SemanticTokenStyle
	/** 参数样式。 */
	parameter?: SemanticTokenStyle
	/** 属性的样式。 */
	property?: SemanticTokenStyle
	/** 表达式的样式。 */
	regexp?: SemanticTokenStyle
	/** 字符串的样式。 */
	string?: SemanticTokenStyle
	/** 结构样式。 */
	struct?: SemanticTokenStyle
	/** 类型的样式。 */
	type?: SemanticTokenStyle
	/** 类型参数的样式。 */
	typeParameter?: SemanticTokenStyle
	/** 变量的样式。 */
	variable?: SemanticTokenStyle
}

declare interface TextmateColors {
	/** 规则的描述。 */
	name?: string
	/** 此规则适用的范围选择器。 */
	scope?: string | string[]
	/** 标记的颜色和样式。 */
	settings: {
		/** 标记的前景色。 */
		foreground?: string
		background?: string
		/** 这条规则的字形: "italic" (斜体)、"bold" (粗体)、"underline" (下划线)、"strikethrough" (删除线) 或是上述的组合。空字符串将取消继承的设置。 */
		fontStyle?:
			| ''
			| 'italic'
			| 'bold'
			| 'underline'
			| 'strikethrough'
			| 'italic bold'
			| 'italic underline'
			| 'italic strikethrough'
			| 'bold underline'
			| 'bold strikethrough'
			| 'underline strikethrough'
			| 'italic bold underline'
			| 'italic bold strikethrough'
			| 'italic underline strikethrough'
			| 'bold underline strikethrough'
			| 'italic bold underline strikethrough'
	}
}

declare interface ColorTheme {
	colors?: WorkbenchColors
	semanticHighlighting?: boolean
	semanticTokenColors?: SemanticTokenColors &
		Record<string, SemanticTokenStyle | undefined>
	tokenColors?: TextmateColors[]
}

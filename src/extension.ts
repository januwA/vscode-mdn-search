import * as vscode from "vscode";

const K_URL = "https://developer.mozilla.org/en-US/search?q=${q}";

// 激活您的扩展程序时将调用此方法
// 您的扩展程序在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {
  // 该命令已在package.json文件中定义
  // 现在使用registerCommand提供命令的实现
  // commandId参数必须与package.json中的command字段匹配
  let disposable = vscode.commands.registerCommand(
    "mdn-search.helloWorld",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selectText: string = editor.document.getText(editor.selection);

      let url: string =
        vscode.workspace.getConfiguration("mdnSearch")["url"] ?? K_URL;

      if (/^https?:\/\//.test(url)) {
        url = url.replace(/\${q}/, selectText);
        vscode.env.openExternal(vscode.Uri.parse(url));
        // vscode.window.showInformationMessage(url);
      } else {
        vscode.window.showErrorMessage(`${url} is bad.`);
      }
    }
  );

  context.subscriptions.push(disposable);
}

// 停用您的扩展程序时调用此方法
export function deactivate() {}

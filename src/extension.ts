import * as vscode from "vscode";

type netSearch = {
  label: string;
  url: string;
};

// 激活您的扩展程序时将调用此方法
// 您的扩展程序在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {
  // 该命令已在package.json文件中定义
  // 现在使用registerCommand提供命令的实现
  // commandId参数必须与package.json中的command字段匹配
  let disposable = vscode.commands.registerCommand(
    "net-search.helloWorld",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const selectText: string = editor.document.getText(editor.selection);

      // get config
      const netSearch: any[] =
        vscode.workspace.getConfiguration("netSearch").get("urls") ?? [];

      // picker
      const items: vscode.QuickPickItem[] = netSearch.map((e: netSearch) => ({
        label: e.label,
        description: e.url,
      }));

      vscode.window.showQuickPick(items).then((selection) => {
        if (!selection) return;

        // open url
        const url = selection.description!.replace(/\${q}/, selectText);
        vscode.env.openExternal(vscode.Uri.parse(url));
        // vscode.window.showInformationMessage(url);
      });
    }
  );

  context.subscriptions.push(disposable);
}

// 停用您的扩展程序时调用此方法
export function deactivate() {}

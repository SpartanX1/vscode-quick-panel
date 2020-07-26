import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const pinCommand = vscode.commands.registerCommand('extension.PinBtn',
    () => {
      vscode.commands.executeCommand('workbench.action.keepEditor');
    }
  );

  const formatCommand = vscode.commands.registerCommand('extension.FormatBtn',
    () => {
      vscode.commands.executeCommand('editor.action.formatDocument');
    }
  );

  const explorerCommand = vscode.commands.registerCommand('extension.OpenInExplorer',
    () => {
      vscode.commands.executeCommand('revealFileInOS');
    }
  );

  const closeCommand = vscode.commands.registerCommand('extension.CloseOthers',
    () => {
      vscode.commands.executeCommand('workbench.action.closeEditorsToTheLeft');
      vscode.commands.executeCommand('workbench.action.closeEditorsToTheRight');
    }
  );

  const closeAllCommand = vscode.commands.registerCommand('extension.CloseAll',
    () => {
      vscode.commands.executeCommand('workbench.action.closeAllEditors');
    }
  );

  const OpenPanelCommand = vscode.commands.registerCommand('extension.OpenTerminal',
    () => {
      vscode.commands.executeCommand('workbench.action.togglePanel');
    }
  );

  const StartDebugCommand = vscode.commands.registerCommand('extension.StartDebug',
    () => {
      vscode.commands.executeCommand('workbench.action.debug.start');
    }
  );

  const OpenCommandPaletteCommand = vscode.commands.registerCommand('extension.OpenCommandPalette',
    () => {
      vscode.commands.executeCommand('workbench.action.showCommands');
    }
  );

  const SearchFilesCommand = vscode.commands.registerCommand('extension.SearchFiles',
    () => {
      vscode.commands.executeCommand('workbench.action.quickOpen');
    }
  );

  context.subscriptions.push(
    pinCommand,
    formatCommand,
    closeAllCommand,
    closeCommand,
    OpenPanelCommand,
    explorerCommand,
    StartDebugCommand,
    OpenCommandPaletteCommand,
    SearchFilesCommand
  );
}

export function deactivate() { }

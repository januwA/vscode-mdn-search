module.exports=(()=>{"use strict";var e={112:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const o=r(549);t.activate=function(e){let t=o.commands.registerCommand("net-search.helloWorld",(()=>{var e;const t=o.window.activeTextEditor;if(!t)return;const r=t.document.getText(t.selection),n=(null!==(e=o.workspace.getConfiguration("netSearch").get("urls"))&&void 0!==e?e:[]).map((e=>({label:e.label,description:e.url})));o.window.showQuickPick(n).then((e=>{if(!e)return;const t=e.description.replace(/\${q}/,r);o.env.openExternal(o.Uri.parse(t))}))}));e.subscriptions.push(t)},t.deactivate=function(){}},549:e=>{e.exports=require("vscode")}},t={};return function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}(112)})();
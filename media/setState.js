(function(){const vscode=window.acquireVsCodeApi();window.addEventListener('message',event=>{const{preview}=event.data;if(preview.url){vscode.setState({previewUrl:preview.url})}})}());
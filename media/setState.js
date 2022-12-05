(function () {
	const vscode = window.acquireVsCodeApi();
	window.addEventListener('message', event => {
		const { preview } = event.data;
		if (preview.url) {
			vscode.setState({ previewUrl: preview.url })
		}
	})

	window.addEventListener('message', event => {
		const { preview } = event.data
		if (preview) {
			if (preview.back) {
				window.history.back()
			}
			if (preview.forward) {
				window.history.forward()
			}
		}
	})
}());


# VScode Preview

This is not a live-server it's live-preview. You can use any local server http://localhost:3000.

<br>

## Keyboard Shortcuts
`ctrl+shift+p` command **Preview Open** and **Preview Url**

`ctrl+alt+p` Open Preview and `ctrl+alt+u` Open Preview Url inpub box.

<br>
### Live preview in vscode

![Demo](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/demo.gif)

> `alt+click` on refresh button open url input box, `alt+click` on layout button open resizable responsive view and `alt+click` console button current url open in browser.

<br>

Set default screen size and url in settings.json
```json
    "preview.url": "http://localhost:3000",
	"preview.mediaScreenOverride": true, // Override default screen object
    "preview.mediaScreen": {
        "Mobile": "380x796", // width and height
        "Tablet": 768,       // width
        "Laptop": 1024, 
    }
```

<br>


Source Code [Repository](https://github.com/jabed-dev/vscode-preview) in Github.
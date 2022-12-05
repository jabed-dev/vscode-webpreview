# VScode Preview

This is not a live-server it's live-preview. You can use any local server http://localhost:3000.


## Keyboard Shortcuts

`ctrl+shift+p` command **Preview Open** and **Preview Url**

`ctrl+alt+p` Open Preview and `ctrl+alt+u` Open Preview Url inpub box.


### Live preview in vscode

![Demo](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/demo.gif)


Set default screen size and url in settings.json
```json
    "webPreview.url": "http://localhost:3000",
	"webPreview.mediaScreenOverride": true, // Override default screen object
    "webPreview.mediaScreen": {
        "Mobile": "380x796", // width and height
        "Tablet": 768,       // width
        "Laptop": 1024, 
    }
```


Source Code [Repository](https://github.com/jabed-dev/vscode-preview) in Github.
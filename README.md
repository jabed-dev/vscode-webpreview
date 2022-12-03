# VScode Preview

This is not a live-server it's live-preview. You can use any local server lick http://localhost:3000.

`ctrl+shift+p` command **Preview Open** and **Preview Url**

### Live preview in vscode

![Demo](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/demo.gif)

> `alt+click` on refresh button open url input box, `alt+click` on layer button open responsive view and `alt+click` console button current url open in browser.

Set default screen size and url in settings.json
```json
    "preview.url": "http://localhost:3000",
	"preview.mediaScreenOverride": true,
    "preview.mediaScreen": {
        "Mobile": "380x796", // width and height
        "Tablet": 768,       // width
        "Laptop": 1024, 
    }
```

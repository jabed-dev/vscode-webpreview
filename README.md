# Preview

This is not a live-server it's live-preview. You cat use any local url http://localhost:3000.

command **Preview Open** and **Preview Url**

Live preview in vscode

![Screenshot](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/.github/Screenshot-1.png)

Set default screen size and url in setting.json
```json
    "preview.url": "http://localhost:3000",
	"preview.mediaScreenOverride": true,
    "preview.mediaScreen": {
        "Mobile": "380x796", // width and height
        "Tablet": 768,       // width
        "Laptop": 1024, 
    }
```

`alt+click` on layer button open responsive view, `alt+click` on refresh button open url input box and `alt+click` console button current url open in browser.

![Screenshot](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/.github/Screenshot-2.png)
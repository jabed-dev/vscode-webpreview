# Preview

command **Preview Open** and **Preview Url**

Live preview in vscode

![Screenshot](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/Screenshot-1.png)

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

`alt+click` on preview layer button open responsive view and `alt+click` on preview refresh button open url input box.

![Screenshot](https://raw.githubusercontent.com/jabed-dev/vscode-preview/main/Screenshot-2.png)
# Setting up the playground

## VS Code

### Recommended Visual Studio settings

```
{
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
    "java.configuration.updateBuildConfiguration": "automatic"
}
```

If you need to change the port for metro packager, add this setting:

```
"react-native": {
    "packager": {
        "port": "8088"
    }
},
```

Add this setting to get more verbose logging from the React Native Tools VS Code Extension:

```
"react-native-tools": {
    "logLevel": "Debug"
},
```

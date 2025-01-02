# ESLint Config Preset for Vue

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
<img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/vue-shadcn-ts?display_timestamp=committer&style=flat-square"></a>

A custom ESLint configuration preset for Vue projects, based on `antfu/eslint-config`.

## Installation

To install the config, run:

```bash
npm install --save-dev @acfatah/vue-eslint-config
```

Add `eslint.config.js` file with the following content,

```javascript
import preset from '@acfatah/vue-eslint-config'

export default preset

```

Add the following vscode configuration in `.vscode/settings.json`,

```jsonc
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ],

  // https://github.com/tailwindlabs/tailwindcss-intellisense?tab=readme-ov-file#recommended-vs-code-settings
  "files.associations": {
    "*.css": "tailwindcss"
  },

  // https://github.com/tailwindlabs/tailwindcss-intellisense?tab=readme-ov-file#recommended-vs-code-settings
  "editor.quickSuggestions": {
    "strings": "on"
  },
}

```

## Acknowledgments

- Inspired by antfu/eslint-config.

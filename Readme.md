
# metalsmith-markdownit

  A Metalsmith plugin to convert markdown files using markdown-it library.

  This plugin is not one to one replacement for metalsmith-markdown. There are slight differences in how the underlying libraries behave, but I find I get better results with markdown-it. Markdown-it, however, does not support all GFM features.

## Installation

    $ npm install metalsmith-markdownit

## CLI Usage

  Install via npm and then add the `metalsmith-markdownit` key to your `metalsmith.json` plugins with any [markdown-it](https://github.com/markdown-it/markdown-it) options you want, like so:

```json
{
  "plugins": {
    "metalsmith-markdownit": {
      "typographer": true,
      "html": true
    }
  }
}
```

## Javascript Usage

  Pass `options` to the markdown plugin and pass it to Metalsmith with the `use` method:

```js
var markdown = require('metalsmith-markdownit');

metalsmith.use(markdown({
  typographer: true,
  html: true
}));
```

## License

  MIT

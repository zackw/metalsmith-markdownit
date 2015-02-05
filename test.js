var md = require('markdown-it')('zero', { html: true });
console.log(md.render("*emphasis* <em>test</em>"));

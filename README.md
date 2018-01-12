# PostCSS Escape [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Gitter Chat][git-img]][git-url]

_This is a work-in-progress, things might not work correctly._

A [PostCSS] plugin which lets you escape characters within CSS selectors and declaration values.

Example:

```css
.{ escape('G(50%))'') } {
	width: 50%;
  content: content: escape('I ♥ CSS');
}
```

Outputs:

```css
.G\(50\%\) {
	width: 50%;
  content: content: 'I \2665 CSS';
}
```

<!-- ## Setup

```bash
npm install postcss-escape --save-dev
``` -->



[npm-url]: https://www.npmjs.com/package/postcss-escape
[npm-img]: https://img.shields.io/npm/v/postcss-escape.svg
[cli-url]: https://travis-ci.org/mindthetic/postcss-escape
[cli-img]: https://img.shields.io/travis/mindthetic/postcss-escape.svg
[win-url]: https://ci.appveyor.com/project/mindthetic/postcss-escape
[win-img]: https://img.shields.io/appveyor/ci/mindthetic/postcss-escape.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS]: https://github.com/postcss/postcss

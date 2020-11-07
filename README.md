# Ne*css*ary
> Necessary styles for a strong foundation of your user interface.

[![npm](https://img.shields.io/npm/v/necssary.svg)](https://www.npmjs.com/package/necssary)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![changelog](https://img.shields.io/badge/changelog-md-blue)](CHANGELOG.md)


#### Includes
- [normalize.css v8.0.1](https://github.com/necolas/normalize.css)
- box-sizing
- elements reset
- base styling for elements

#### Install
```sh
yarn add necssary
```

#### Usage
Import `necssary` in your index file and create another file for your project specific base styling.

###### index.css
```css
@import 'necssary';
@import './base.css';
```

###### base.css
```css
/**
 * Example styles that are not required 
 * with this package. 
 */

body {
  color: var(--body-color);
  font-family: var(--body-font);
  font-weight: var(--body-weight);
  line-height: var(--body-line-height);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--heading-font);
  font-weight: var(--heading-weight);
}

a {
  text-decoration: none;
}

```

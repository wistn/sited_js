# sited_js

SiteD Engine for Node JavaScript version.

[ [中文说明](README_CN.md)]

---

## Features

-   Support `schema0/1/2`
-   Support running `buildUrl`, `parseUrl(CALL::)`, `parse(get/post/@null)`, `require(include online js library)`
-   Support `header(cookie/referer)`, `ua` configurations
-   Support `hots`, `updates`, `tags`, `tag(subtag)`, `search`, `book[12345678](sections)`, `section[123]` nodes

---

### [ [Features](#Features)|[Configuration](#Configuration)|[Dependencies](#Dependencies)|[Todo](#Todo)|[SpecialThanks](#SpecialThanks)|[Links](#Links)|[CHANGELOG.md](CHANGELOG.md)]

## Configuration

-   `npm run clean`: Within the project directory on CLI, run this code, will delete the log files and cache directory which made after running the project, only you had installed rimraf with `npm i rimraf -g` firstly.
-   Configuration which controls making of sited_log.txt/sited_error.txt/sited_print.txt and sited (cache directory) under the 'files' dir beside this README file, see in index.js file.

---

## Dependencies

-   [Nodejs](https://nodejs.org/en/) 12 or above, must support ES2018+

---

## Todo

-   Support login node

---

## SpecialThanks

### The 'lib' library(excludes main_res_raw_xx.js) is totally translated from big parts of Noear's open source [SiteD Engine](https://github.com/noear/SiteD) v35 APP JAVA code to JavaScript language by me. Thank you!

## Links

-   [SiteD plugin center](http://sited.noear.org/): Official SiteD plugin center.

-   [ddcat_plugin_develop](https://www.kancloud.cn/magicdmer/ddcat_plugin_develop): Knowledge about sited plugin development.

-   [DDCat SiteD](https://github.com/Yinr/DDCa-SiteD.vscode-ext): Syntax extension for VS Code, enabled .sited and .sided.xml files in sited language, support syntax highlight.

-   [generators-sited-plugin](https://github.com/htynkn/generators-sited-plugin): Yeoman generator for sited plugin.

-   [sited_py](https://github.com/wistn/sited_py) SiteD Engine for Python version.

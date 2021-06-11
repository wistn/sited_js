# sited_js

SiteD 引擎 Node.js 版。

[ [README-EN](README.md)]

---

## 特性

-   支持 `schema0/1/2`
-   支持运行 `buildUrl`, `parseUrl(CALL::)`, `parse(get/post/@null)`, `require(含网络 js 库)`
-   支持 `header(cookie/referer)`, `ua` 配置
-   支持 `hots`, `updates`, `tags`, `tag(subtag)`, `search`, `book[12345678](sections)`, `section[123]` 节点

---

### [ [特性](#特性)|[配置](#配置)|[依赖](#依赖)|[待办](#待办)|[致谢](#致谢)|[友链](#友链)|[CHANGELOG.md](CHANGELOG.md)]

## 配置

-   `npm run clean`: 在命令行界面项目文件夹下，运行该代码，可以删除运行项目后生成的日志文件和缓存文件夹，前提要已通过 `npm i rimraf -g` 安装 rimraf 命令
-   控制本 README_CN 文件旁边的'files'文件夹里的 sited_log.txt/sited_error.txt/sited_print.txt 和 sited(缓存文件夹) 的生成的配置，见 index.js 文件

---

## 依赖

-   [Nodejs](https://nodejs.org/en/) 12 或以上，须要支持 ES2018+

---

## 待办

-   支持 login 节点

---

## 致谢

### 里面 'lib' 库（不含 main_res_raw_xx.js）是我将 Noear 开源的 [SiteD 引擎](https://github.com/noear/SiteD) v35 容器大部分 JAVA 代码翻译成的 JavaScript 语言。感谢！

## 友链

-   [SiteD plugin center](http://sited.noear.org/) SiteD 插件中心官方版

-   [ddcat_plugin_develop](https://www.kancloud.cn/magicdmer/ddcat_plugin_develop) 多多猫插件开发指南，关于多多猫插件开发相关知识

-   [DDCat SiteD](https://github.com/Yinr/DDCa-SiteD.vscode-ext) VS Code 扩展插件，对 .sited 和 .sited.xml 文件识别为 SiteD 语言，提供语法高亮

-   [generators-sited-plugin](https://github.com/htynkn/generators-sited-plugin) Yeoman 生成器快速初始化项目

-   [sited_py](https://github.com/wistn/sited_py) SiteD 引擎 Python 版

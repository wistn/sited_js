/*
 * Author:wistn
 * since:2021-03-11
 * LastEditors:Do not edit
 * LastEditTime:2021-07-03
 * Description:
 */
// 配置说明：1. 多多猫缓存中的文本缓存sited文件夹在本引擎也默认对应生成（运行插件后在files文件夹下出现，注意有时插件节点没返回数据时可以删除这个文件夹看看）。开启缓存后，异步请求的网页在有效期内再次请求才是同步。如要禁止缓存，可对下行注释，作用于 lib/org_noear_sited___FileCache.js。
global.enableFileCache = 1;
// 2. SiteD插件容器/多多猫安卓版设置中有开发者模式开关，控制运行插件后在files文件夹里是否生成 sited_log.txt, sited_error.txt, sited_print.txt文件。多多猫里默认为关闭，本引擎默认为0即不生成。如要开启生成，下行改为1值，作用于 lib/org_noear_siteder_dao_Setting.js;
global.isDeveloperModel = 0;
// 3. 上面1项为1（生成）的前提下，SiteD插件文件中开头的debug参数(1/0)，会控制本引擎files文件夹里生成的sited_log.txt中是否显示各节点parse解析后返回的数据，为0时只显示节点parse/parseUrl所要解析的网址，不影响sited_error.txt, sited_print.txt文件。
// 4. Log模块( lib/android_util_Log.js)是本引擎模仿安卓logcat功能转储消息日志，生成到 files/logcat_stdout.txt，显示消息日志过程会比 files文件夹里其他日志文件更加丰富。默认不生成，如要开启生成，下行改为1值，作用于 lib/android_util_Log.js。
global.logcatDump = 0;
// 5. 上面1项为1（生成）的前提下，其中VERBOSE类型日志消息写入logcat_stdout文件时，如要同时console.log打印（每条消息开头部分）到运行本引擎的控制台，取消以下VERBOSE_log注释。也可以取消 files/VERBOSE_trace的注释来打印堆栈跟踪。
// global.VERBOSE_log = 1;
// global.VERBOSE_trace = 1;
Map.prototype.toJson = function () {
    let obj = Object.create(null);
    for (let [k, v] of this) {
        obj[k] = v;
    }
    return JSON.stringify(obj); // 本方法适用于本引擎模拟ONode的Map对象
};
String.prototype.hashCode = function () {
    let h;
    for (let i = 0; i < this.length; i++) {
        h = (Math.imul(31, h) + this.charCodeAt(i)) | 0;
    }
    return h;
};
var App = require('./lib/org_noear_siteder_App');
var DdSource = require('./lib/org_noear_siteder_dao_engine_DdSource');
var MainViewModel = require('./lib/org_noear_siteder_viewModels_site_MainViewModel'); //插件首面数据
var SearchViewModel = require('./lib/org_noear_siteder_viewModels_site_SearchViewModel'); //搜索结果数据
var TagViewModel = require('./lib/org_noear_siteder_viewModels_site_TagViewModel'); //分类数据
var BookViewModel = require('./lib/org_noear_siteder_viewModels_site_BookViewModel'); //书的数据
var Book4ViewModel = require('./lib/org_noear_siteder_viewModels_site_Book4ViewModel');
var Book5ViewModel = require('./lib/org_noear_siteder_viewModels_site_Book5ViewModel');
var Book6ViewModel = require('./lib/org_noear_siteder_viewModels_site_Book6ViewModel');
var Book7ViewModel = require('./lib/org_noear_siteder_viewModels_site_Book7ViewModel');
var Book8ViewModel = require('./lib/org_noear_siteder_viewModels_site_Book8ViewModel');
var Section1ViewModel = require('./lib/org_noear_siteder_viewModels_site_Section1ViewModel'); //章节的数据
var Section2ViewModel = require('./lib/org_noear_siteder_viewModels_site_Section2ViewModel');
var Section3ViewModel = require('./lib/org_noear_siteder_viewModels_site_Section3ViewModel');
var SectionModel = require('./lib/org_noear_siteder_models_SectionModel');
var BookNode = require('./lib/org_noear_siteder_dao_db_BookNode');
var LogWriter = require('./lib/org_noear_siteder_utils_LogWriter');
exports = module.exports = {
    App: App,
    DdSource: DdSource,
    MainViewModel: MainViewModel,
    SearchViewModel: SearchViewModel,
    TagViewModel: TagViewModel,
    BookViewModel: BookViewModel,
    Book4ViewModel: Book4ViewModel,
    Book5ViewModel: Book5ViewModel,
    Book6ViewModel: Book6ViewModel,
    Book7ViewModel: Book7ViewModel,
    Book8ViewModel: Book8ViewModel,
    Section1ViewModel: Section1ViewModel,
    Section2ViewModel: Section2ViewModel,
    Section3ViewModel: Section3ViewModel,
    SectionModel: SectionModel,
    BookNode: BookNode,
    LogWriter: LogWriter
};

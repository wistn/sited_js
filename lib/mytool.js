/*
 * Author:wistn
 * since:2019-12-17
 * LastEditors:Do not edit
 * LastEditTime:2021-06-12
 * Description: This file is about some alone functions which be required(reused) in the whole project,but not appropriate to be some alone Classes.
 */
class TextUtils {
    static isEmpty(str) {
        return str == null || str.length == 0;
    }
}

exports = module.exports = {
    TextUtils: TextUtils
};

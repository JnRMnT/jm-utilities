import _ = require("lodash");

module.exports.IsDefined = (obj: any): boolean => {
    return obj != null && obj != undefined;
};

module.exports.IsEmpty = (obj: any): boolean => {
    return !module.exports.IsDefined(obj) || _.IsEmpty(obj);
}
/// <reference path="Scripts/typings/index.d.ts" />
var JM = require("./jmutilities");

exports.isDefined = (obj: any): boolean => {
    return JM.isDefined(obj);
};

exports.isEmpty = (obj: any): boolean => {
    return JM.isEmpty(obj);
}
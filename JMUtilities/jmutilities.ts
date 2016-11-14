/// <reference path="Scripts/typings/index.d.ts" />
var _: _.LoDashStatic = window ? (<any>window)._ : undefined;
if (!_) {
    _ = require("lodash");
}

class JM {
    public static isDefined = (obj: any): boolean=> {
        return (obj != null && obj != undefined);
    };
    public static isEmpty = (obj: any): boolean=> {
        return !JM.isDefined(obj) || _.isEmpty(obj);
    };
};

if (module) {
    module.exports.JM = JM;
    module.exports = JM;
}
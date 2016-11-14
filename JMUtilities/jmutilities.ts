/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _: _.LoDashStatic = isNode ? require("lodash") : (<any>window)._;

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
/// <reference path="Scripts/typings/index.d.ts" />
function resolveModule() {
    if (require) {
        var jmUtilities = require("./jmutilities.js");
        if (jmUtilities._JM) {
            return jmUtilities._JM;
        } else {
            return jmUtilities;
        }
    } else if (window) {
        (<any>window).JM;
    } else {
        throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.")
    }
};
var jmUtils: JMUtilities = resolveModule();
exports.isDefined = (obj: any): boolean => {
    return jmUtils.isDefined(obj);
};

exports.isEmpty = (obj: any): boolean => {
    return jmUtils.isEmpty(obj);
}

exports.waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
    return jmUtils.waitFor(conditionFunction, maxRetryCount, tryInterval);
}

exports.isNode = (): boolean => {
    return jmUtils.isNode();
}
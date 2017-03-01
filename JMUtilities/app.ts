/// <reference path="Scripts/typings/index.d.ts" />
var jmUtils: JMUtilities = require("./jmutilities.js");
exports.isDefined = (obj: any): boolean => {
    return jmUtils.isDefined(obj);
};

exports.isEmpty = (obj: any): boolean => {
    return jmUtils.isEmpty(obj);
}

exports.waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
    return jmUtils.waitFor(conditionFunction, maxRetryCount, tryInterval);
}
/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js")();

exports.isDefined = (obj: any): boolean => {
    return JM.isDefined(obj);
};

exports.isEmpty = (obj: any): boolean => {
    return JM.isEmpty(obj);
}

exports.waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
    return JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
}
/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js");
exports.isDefined = (obj: any): boolean => {
    return _JM.isDefined(obj);
};

exports.isEmpty = (obj: any): boolean => {
    return _JM.isEmpty(obj);
}

exports.waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
    return _JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
}
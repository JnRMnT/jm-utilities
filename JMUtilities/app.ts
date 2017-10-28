/// <reference path="Scripts/typings/index.d.ts" />
function resolveModule(moduleName: string, windowName?: string) {
    if (require) {
        return require("./jmutilities.js");
    } else if (window) {
        (<any>window).windowName;
    } else {
        throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.")
    }
};
var jmUtils: JMUtilities = resolveModule("./jmutilities.js");
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

exports.resolveModule = (moduleName: string, windowName?: string): any => {
    return jmUtils.resolveModule(moduleName, windowName);
}
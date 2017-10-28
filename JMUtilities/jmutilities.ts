/// <reference path="Scripts/typings/index.d.ts" />
export class _JM {
    public static isDefined = (obj: any): boolean => {
        return (obj != null && obj != undefined);
    };
    public static isEmpty = (obj: any): boolean => {
        return !_JM.isDefined(obj) || _.isEmpty(obj);
    };

    public static waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
        if (!_JM.isDefined(maxRetryCount)) {
            maxRetryCount = 5;
        }
        if (!_JM.isDefined(tryInterval)) {
            tryInterval = 200;
        }
        var deferred: Q.Deferred<any> = q.defer();
        var retryCount = 0;
        var retry = function () {
            if (conditionFunction()) {
                deferred.resolve();
            } else {
                retryCount++;
                if (retryCount < maxRetryCount) {
                    setTimeout(function () {
                        retry();
                    }, tryInterval);
                } else {
                    deferred.reject(undefined);
                }
            }
        };

        retry();
        return deferred.promise;
    };

    public static resolveModule(moduleName: string, windowName?: string): any {
        if (require) {
            return require("./jmutilities.js");
        } else if (window) {
            return (<any>window).moduleName;
        } else {
            throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.")
        }
    }

    public static isNode(): boolean {
        return typeof window === 'undefined';
    }
};

var _: _.LoDashStatic = _JM.resolveModule("lodash", "_");
var q = _JM.resolveModule("q", "Q");
if (_JM.isNode()) {
    module.exports = _JM;
    module.exports.JM = _JM;
} else {
    (<any>window).JM = _JM;
}
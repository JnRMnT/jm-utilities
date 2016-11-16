/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _: _.LoDashStatic = isNode ? require("lodash") : (<any>window)._;
var q = isNode ? require("q") : (<any>window).Q;

class _JM {
    public static isDefined = (obj: any): boolean=> {
        return (obj != null && obj != undefined);
    };
    public static isEmpty = (obj: any): boolean=> {
        return !_JM.isDefined(obj) || _.isEmpty(obj);
    };

    public static waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any>=> {
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
};

if (isNode) {
    module.exports.JM = _JM;
    module.exports = _JM;
} else {
    (<any>window).JM = _JM;
}
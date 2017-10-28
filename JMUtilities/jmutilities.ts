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
    
    public static isNode(): boolean {
        return typeof window === 'undefined';
    }
};

/*-----Seperate functions used to enable WebPack module require support-----*/
function resolveQ() {
    if (require) {
        return require("q");
    } else if (window) {
        return (<any>window).Q;
    }
}
function resolveLodash() {
    if (require) {
        return require("lodash");
    } else if (window) {
        return (<any>window)._;
    }
}
/*--------------------------------------------------------------------------*/
var _: _.LoDashStatic = resolveLodash();
var q = resolveQ();
if (_JM.isNode()) {
    module.exports = _JM;
    module.exports.JM = _JM;
} else {
    (<any>window).JM = _JM;
}
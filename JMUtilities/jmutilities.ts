import { LoDashStatic } from 'lodash';
import * as Q from "q";

export class JM {
    public static isDefined = (obj: any): boolean => {
        return (obj != null && obj != undefined);
    };
    public static isEmpty = (obj: any): boolean => {
        return !JM.isDefined(obj) || _.isEmpty(obj);
    };

    public static waitFor = (conditionFunction: Function, maxRetryCount?: number, tryInterval?: number): Q.IPromise<any> => {
        if (!JM.isDefined(maxRetryCount)) {
            maxRetryCount = 5;
        }
        if (!JM.isDefined(tryInterval)) {
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
var _: LoDashStatic = resolveLodash();
var q = resolveQ();
if (JM.isNode()) {
    module.exports = JM;
    module.exports.JM = JM;
} else {
    (<any>window).JM = JM;
}
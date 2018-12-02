"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JM = /** @class */ (function () {
    function JM() {
    }
    JM.isNode = function () {
        return typeof window === 'undefined';
    };
    JM.isDefined = function (obj) {
        return (obj != null && obj != undefined);
    };
    JM.isEmpty = function (obj) {
        return !JM.isDefined(obj) || _.isEmpty(obj);
    };
    JM.waitFor = function (conditionFunction, maxRetryCount, tryInterval) {
        if (!JM.isDefined(maxRetryCount)) {
            maxRetryCount = 5;
        }
        if (!JM.isDefined(tryInterval)) {
            tryInterval = 200;
        }
        var deferred = q.defer();
        var retryCount = 0;
        var retry = function () {
            if (conditionFunction()) {
                deferred.resolve();
            }
            else {
                retryCount++;
                if (retryCount < maxRetryCount) {
                    setTimeout(function () {
                        retry();
                    }, tryInterval);
                }
                else {
                    deferred.reject(undefined);
                }
            }
        };
        retry();
        return deferred.promise;
    };
    return JM;
}());
exports.JM = JM;
;
/*-----Seperate functions used to enable WebPack module require support-----*/
function resolveQ() {
    if (require) {
        return require("q");
    }
    else if (window) {
        return window.Q;
    }
}
function resolveLodash() {
    if (require) {
        return require("lodash");
    }
    else if (window) {
        return window._;
    }
}
/*--------------------------------------------------------------------------*/
var _ = resolveLodash();
var q = resolveQ();
if (JM.isNode()) {
    module.exports = JM;
}
else {
    window.JM = JM;
}
//# sourceMappingURL=jmutilities.js.map
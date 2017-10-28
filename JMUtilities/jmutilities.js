"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="Scripts/typings/index.d.ts" />
class _JM {
    static isNode() {
        return typeof window === 'undefined';
    }
}
_JM.isDefined = (obj) => {
    return (obj != null && obj != undefined);
};
_JM.isEmpty = (obj) => {
    return !_JM.isDefined(obj) || _.isEmpty(obj);
};
_JM.waitFor = (conditionFunction, maxRetryCount, tryInterval) => {
    if (!_JM.isDefined(maxRetryCount)) {
        maxRetryCount = 5;
    }
    if (!_JM.isDefined(tryInterval)) {
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
exports._JM = _JM;
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
if (_JM.isNode()) {
    module.exports = _JM;
    module.exports.JM = _JM;
}
else {
    window.JM = _JM;
}
//# sourceMappingURL=jmutilities.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="Scripts/typings/index.d.ts" />
class _JM {
    static resolveModule(moduleName, windowName) {
        if (require) {
            return require(moduleName);
        }
        else if (window) {
            return window.windowName;
        }
        else {
            throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.");
        }
    }
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
var _ = _JM.resolveModule("lodash", "_");
var q = _JM.resolveModule("q", "Q");
if (_JM.isNode()) {
    module.exports = _JM;
    module.exports.JM = _JM;
}
else {
    window.JM = _JM;
}
//# sourceMappingURL=jmutilities.js.map
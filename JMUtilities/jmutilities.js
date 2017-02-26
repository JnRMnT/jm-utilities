/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _ = isNode ? require("lodash") : window._;
var q = isNode ? require("q") : window.Q;
class _JM {
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
;
if (isNode) {
    module.exports.JM = _JM;
    module.exports = _JM;
}
else {
    window.JM = _JM;
}
//# sourceMappingURL=jmutilities.js.map
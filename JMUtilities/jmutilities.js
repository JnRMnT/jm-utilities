/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _ = isNode ? require("lodash") : window._;
var q = isNode ? require("q") : window.Q;
class JM {
}
JM.isDefined = (obj) => {
    return (obj != null && obj != undefined);
};
JM.isEmpty = (obj) => {
    return !JM.isDefined(obj) || _.isEmpty(obj);
};
JM.waitFor = (conditionFunction, maxRetryCount, tryInterval) => {
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
    return deferred.promise;
};
;
if (isNode) {
    module.exports.JM = JM;
    module.exports = JM;
}
//# sourceMappingURL=jmutilities.js.map
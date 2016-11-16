/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _ = isNode ? require("lodash") : window._;
var q = isNode ? require("q") : window.Q;
var JM = (function () {
    function JM() {
    }
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
        return deferred.promise;
    };
    return JM;
})();
;
if (isNode) {
    module.exports.JM = JM;
    module.exports = JM;
}
else {
    window.JM = JM;
}
//# sourceMappingURL=jmutilities.js.map
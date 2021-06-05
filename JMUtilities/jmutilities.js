export var JM;
(function (JM) {
    function isDefined(obj) {
        return (obj != null && obj != undefined);
    }
    JM.isDefined = isDefined;
    ;
    function isEmpty(obj) {
        if (JM.isDefined(obj)) {
            if (typeof obj === "string") {
                var objString = obj;
                return objString.length == 0;
            }
            else if (Array.isArray(obj)) {
                return obj.length == 0;
            }
            else {
                //check only desired empty checks, else return false
                return false;
            }
        }
        else {
            return true;
        }
    }
    JM.isEmpty = isEmpty;
    ;
    function waitFor(conditionFunction, maxRetryCount, tryInterval) {
        var waitPromise = new Promise(function (resolve, reject) {
            if (!JM.isDefined(maxRetryCount)) {
                maxRetryCount = 5;
            }
            if (!JM.isDefined(tryInterval)) {
                tryInterval = 200;
            }
            var retryCount = 0;
            var retry = function () {
                if (conditionFunction()) {
                    resolve();
                }
                else {
                    retryCount++;
                    if (retryCount < maxRetryCount) {
                        setTimeout(function () {
                            retry();
                        }, tryInterval);
                    }
                    else {
                        reject();
                    }
                }
            };
            retry();
        });
        return waitPromise;
    }
    JM.waitFor = waitFor;
    ;
})(JM || (JM = {}));
;
//# sourceMappingURL=jmutilities.js.map
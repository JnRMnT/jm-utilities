/// <reference path="Scripts/typings/index.d.ts" />
function resolveModule() {
    if (require) {
        var jmUtilities = require("./jmutilities.js");
        if (jmUtilities._JM) {
            return jmUtilities._JM;
        }
        else {
            return jmUtilities;
        }
    }
    else if (window) {
        window.JM;
    }
    else {
        throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.");
    }
}
;
var jmUtils = resolveModule();
exports.isDefined = function (obj) {
    return jmUtils.isDefined(obj);
};
exports.isEmpty = function (obj) {
    return jmUtils.isEmpty(obj);
};
exports.waitFor = function (conditionFunction, maxRetryCount, tryInterval) {
    return jmUtils.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
exports.isNode = function () {
    return jmUtils.isNode();
};
//# sourceMappingURL=app.js.map
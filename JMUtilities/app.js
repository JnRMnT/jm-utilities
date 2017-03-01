/// <reference path="Scripts/typings/index.d.ts" />
var jmUtils = require("./jmutilities.js");
exports.isDefined = function (obj) {
    return jmUtils.isDefined(obj);
};
exports.isEmpty = function (obj) {
    return jmUtils.isEmpty(obj);
};
exports.waitFor = function (conditionFunction, maxRetryCount, tryInterval) {
    return jmUtils.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
//# sourceMappingURL=app.js.map
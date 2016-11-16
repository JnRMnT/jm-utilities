/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js");
exports.isDefined = function (obj) {
    return exports.JM.isDefined(obj);
};
exports.isEmpty = function (obj) {
    return exports.JM.isEmpty(obj);
};
exports.waitFor = function (conditionFunction, maxRetryCount, tryInterval) {
    return exports.JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
//# sourceMappingURL=app.js.map
/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js");
exports.isDefined = function (obj) {
    return _JM.isDefined(obj);
};
exports.isEmpty = function (obj) {
    return _JM.isEmpty(obj);
};
exports.waitFor = function (conditionFunction, maxRetryCount, tryInterval) {
    return _JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
//# sourceMappingURL=app.js.map
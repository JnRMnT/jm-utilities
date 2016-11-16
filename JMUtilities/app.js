/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js")();
exports.isDefined = (obj) => {
    return JM.isDefined(obj);
};
exports.isEmpty = (obj) => {
    return JM.isEmpty(obj);
};
exports.waitFor = (conditionFunction, maxRetryCount, tryInterval) => {
    return JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
//# sourceMappingURL=app.js.map
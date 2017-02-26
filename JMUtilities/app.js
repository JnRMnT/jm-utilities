/// <reference path="Scripts/typings/index.d.ts" />
require("./jmutilities.js");
exports.isDefined = (obj) => {
    return _JM.isDefined(obj);
};
exports.isEmpty = (obj) => {
    return _JM.isEmpty(obj);
};
exports.waitFor = (conditionFunction, maxRetryCount, tryInterval) => {
    return _JM.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
//# sourceMappingURL=app.js.map
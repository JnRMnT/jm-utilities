/// <reference path="Scripts/typings/index.d.ts" />
function resolveModule(moduleName, windowName) {
    if (require) {
        return require("./jmutilities.js");
    }
    else if (window) {
        window.windowName;
    }
    else {
        throw new Error("You must use JM Utilities on Node modules or have necessary module dependencies on your window.");
    }
}
;
var jmUtils = resolveModule("./jmutilities.js");
exports.isDefined = (obj) => {
    return jmUtils.isDefined(obj);
};
exports.isEmpty = (obj) => {
    return jmUtils.isEmpty(obj);
};
exports.waitFor = (conditionFunction, maxRetryCount, tryInterval) => {
    return jmUtils.waitFor(conditionFunction, maxRetryCount, tryInterval);
};
exports.isNode = () => {
    return jmUtils.isNode();
};
exports.resolveModule = (moduleName, windowName) => {
    return jmUtils.resolveModule(moduleName, windowName);
};
//# sourceMappingURL=app.js.map
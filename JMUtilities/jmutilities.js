/// <reference path="Scripts/typings/index.d.ts" />
var _ = window ? window._ : undefined;
if (!_) {
    _ = require("lodash");
}
class JM {
}
JM.isDefined = (obj) => {
    return (obj != null && obj != undefined);
};
JM.isEmpty = (obj) => {
    return !JM.isDefined(obj) || _.isEmpty(obj);
};
;
if (module) {
    module.exports.JM = JM;
    module.exports = JM;
}
//# sourceMappingURL=jmutilities.js.map
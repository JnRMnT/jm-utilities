/// <reference path="Scripts/typings/index.d.ts" />
var _ = window._;
if (!_) {
    _ = require("lodash");
}
var JM = (function () {
    function JM() {
    }
    JM.isDefined = function (obj) {
        return (obj != null && obj != undefined);
    };
    JM.isEmpty = function (obj) {
        return !JM.isDefined(obj) || _.isEmpty(obj);
    };
    return JM;
})();
exports.JM = JM;
;
if (module) {
    module.exports = JM;
}
//# sourceMappingURL=jmutilities.js.map
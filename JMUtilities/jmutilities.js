/// <reference path="Scripts/typings/index.d.ts" />
var _ = window ? window._ : undefined;
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
;
if (module) {
    module.exports.JM = JM;
    module.exports = JM;
}
//# sourceMappingURL=jmutilities.js.map
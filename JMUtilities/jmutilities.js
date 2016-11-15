/// <reference path="Scripts/typings/index.d.ts" />
var isNode = typeof window === 'undefined';
var _ = isNode ? require("lodash") : window._;
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
if (isNode) {
    module.exports.JM = JM;
    module.exports = JM;
}
//# sourceMappingURL=jmutilities.js.map
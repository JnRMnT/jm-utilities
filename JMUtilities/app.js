var _ = require("lodash");
module.exports.IsDefined = function (obj) {
    return obj != null && obj != undefined;
};
module.exports.IsEmpty = function (obj) {
    return !module.exports.IsDefined(obj) || _.IsEmpty(obj);
};
//# sourceMappingURL=app.js.map
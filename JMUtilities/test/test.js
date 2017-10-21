var assert = require('assert');
var jmUtils = require("../app");
describe("Main Tests", function () {
    it("Is Defined Test", function () {
        var newObject;
        assert.ok(!jmUtils.isDefined(newObject), "Uninitialized object");
        newObject = {};
        assert.ok(jmUtils.isDefined(newObject), "Initialized object");
        newObject = undefined;
        assert.ok(!jmUtils.isDefined(newObject), "Explicitly undefined object");
    });
});
//# sourceMappingURL=test.js.map
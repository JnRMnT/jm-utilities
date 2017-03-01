import assert = require('assert');
var jmUtils: JMUtilities = require("../app");

describe("Main Tests", () => {
    it("Is Defined Test", () => {
        var newObject;
        assert.ok(!jmUtils.isDefined(newObject), "Uninitialized object");
        newObject = {};
        assert.ok(jmUtils.isDefined(newObject), "Initialized object");
        newObject = undefined;
        assert.ok(!jmUtils.isDefined(newObject), "Explicitly undefined object");
    });
});

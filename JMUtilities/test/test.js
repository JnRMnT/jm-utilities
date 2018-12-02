"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var jmutilities_1 = require("../jmutilities");
describe("Main Tests", function () {
    it("Is Defined Test", function () {
        var newObject;
        assert.ok(!jmutilities_1.JM.isDefined(newObject), "Uninitialized object");
        newObject = {};
        assert.ok(jmutilities_1.JM.isDefined(newObject), "Initialized object");
        newObject = undefined;
        assert.ok(!jmutilities_1.JM.isDefined(newObject), "Explicitly undefined object");
    });
});
//# sourceMappingURL=test.js.map
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
    it("Is Empty Test", function () {
        assert.ok(jmutilities_1.JM.isEmpty(""), "Empty String");
        assert.ok(jmutilities_1.JM.isEmpty(null), "Null Value");
        var undefinedObject = undefined;
        assert.ok(jmutilities_1.JM.isEmpty(undefinedObject), "Undefined object");
        assert.ok(jmutilities_1.JM.isEmpty([]), "Empty Array");
        assert.ok(!jmutilities_1.JM.isEmpty([""]), "Valid List");
        assert.ok(!jmutilities_1.JM.isEmpty({ "test": "test" }), "Valid Object");
        assert.ok(!jmutilities_1.JM.isEmpty("test"), "Valid String");
    });
});
//# sourceMappingURL=test.js.map
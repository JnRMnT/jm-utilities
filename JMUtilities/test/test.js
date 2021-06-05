import { assert } from "chai";
import { describe, it } from "mocha";
import { JM } from '../jmutilities.js';
describe("Main Tests", function () {
    it("Is Defined Test", function () {
        var newObject;
        assert.ok(!JM.isDefined(newObject), "Uninitialized object");
        newObject = {};
        assert.ok(JM.isDefined(newObject), "Initialized object");
        newObject = undefined;
        assert.ok(!JM.isDefined(newObject), "Explicitly undefined object");
    });
    it("Is Empty Test", function () {
        assert.ok(JM.isEmpty(""), "Empty String");
        assert.ok(JM.isEmpty(null), "Null Value");
        var undefinedObject = undefined;
        assert.ok(JM.isEmpty(undefinedObject), "Undefined object");
        assert.ok(JM.isEmpty([]), "Empty Array");
        assert.ok(!JM.isEmpty([""]), "Valid List");
        assert.ok(!JM.isEmpty({ "test": "test" }), "Valid Object");
        assert.ok(!JM.isEmpty("test"), "Valid String");
    });
    it("Wait For Test", function () {
        return new Promise(function (resolve, reject) {
            var testVariable = false;
            JM.waitFor(function () {
                return testVariable;
            }).then(function () {
                resolve();
            }, function () {
                reject("Wait got rejected");
            });
            setTimeout(function () {
                testVariable = true;
            }, 500);
        });
    });
});
//# sourceMappingURL=test.js.map
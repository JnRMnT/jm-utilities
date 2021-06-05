import { assert } from "chai";
import { describe, it } from "mocha";
import { JM } from '../jmutilities.js';

describe("Main Tests", () => {
    it("Is Defined Test", () => {
        var newObject;
        assert.ok(!JM.isDefined(newObject), "Uninitialized object");
        newObject = {};
        assert.ok(JM.isDefined(newObject), "Initialized object");
        newObject = undefined;
        assert.ok(!JM.isDefined(newObject), "Explicitly undefined object");
    });
    it("Is Empty Test", () => {
        assert.ok(JM.isEmpty(""), "Empty String");
        assert.ok(JM.isEmpty(null), "Null Value");
        const undefinedObject: unknown = undefined;
        assert.ok(JM.isEmpty(undefinedObject), "Undefined object");
        assert.ok(JM.isEmpty([]), "Empty Array");

        assert.ok(!JM.isEmpty([""]), "Valid List");
        assert.ok(!JM.isEmpty({ "test": "test" }), "Valid Object");
        assert.ok(!JM.isEmpty("test"), "Valid String");
    });
    it("Wait For Test", () => {
        return new Promise<void>((resolve, reject) => {
            let testVariable = false;
            JM.waitFor(() => {
                return testVariable;
            }).then(() => {
                resolve();
            }, () => {
                reject("Wait got rejected");
            });

            setTimeout(() => {
                testVariable = true;
            }, 500);
        });
    });
});
import * as assert from "assert";
import { JM } from '../jmutilities';

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
        const undefinedObject = undefined;
        assert.ok(JM.isEmpty(undefinedObject), "Undefined object");
        assert.ok(JM.isEmpty([]), "Empty Array");

        assert.ok(!JM.isEmpty([""]), "Valid List");
        assert.ok(!JM.isEmpty({ "test": "test" }), "Valid Object");
        assert.ok(!JM.isEmpty("test"), "Valid String");
    });
});
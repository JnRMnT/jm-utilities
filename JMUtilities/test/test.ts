import assert = require('assert');
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
});

import { expect } from "chai";
import { describe, it } from "mocha";

describe("some test", () => {

    before((done) => {
        // do nothing.
        done();
    });

    beforeEach((done) => {
        // do nothing
        done();
    });

    it("should do something", (done) => {
        expect("test").to.be.equals("test");
        done();
    });
})
let {add, sub} = require('../app/compute');
let {expect} = require('chai');

describe("testing compute modules", () => {
    it("testing add", () => {
        let exp = 25;
        let actual = add(10, 15);

        expect(exp).to.be.equal(actual);
    })

    it("testing sub", () => {
        let exp = 25;
        let actual = sub(50, 25);
        expect(exp).to.be.equal(actual);
    })
})
const mod = require('../zip-codes.js');
const isValidZipCode = mod.isValidZipCode;

describe("zip code validation", function(){

    it("should allow 5-digit codes", function(){
        expect(isValidZipCode("63108")).toBe(true);
    });

    it("should allow plus-four codes", function(){
        expect(isValidZipCode("12201-7050")).toBe(true);
    });

    it("should not allow non-numeric characters in 5-digit codes", function(){
        expect(isValidZipCode("1220a")).toBe(false);
    });

    it("should not allow non-numeric characters in plus-four codes", function(){
        expect(isValidZipCode("12201-7a50")).toBe(false);
    });

    it("should not allow strings properly containing zip codes", function(){
        expect(isValidZipCode("LaunchCode's zip code is 63108.")).toBe(false);
    });

    it("should not allow things that aren't even close", function(){
        expect(isValidZipCode("zucchini")).toBe(false);
    });

    it("should allow 5-digit codes as numbers", function(){
        expect(isValidZipCode(63108)).toBe(true);
    });

});

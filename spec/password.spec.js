const mod = require('../password.js');
const isValidPassword = mod.isValidPassword;

describe("password validation", function(){

    it("should require at least 12 characters", function(){
        expect(isValidPassword("1234567890a")).toBe(false);
    });

    xit("should not allow spaces", function(){
        expect(isValidPassword("123456 7890ab")).toBe(false);
    });

    xit("should not allow tabs", function(){
        expect(isValidPassword("123456  7890ab")).toBe(false);
    });

    xit("should require at least one digit", function(){
        expect(isValidPassword("aaaaaaaaaaaa")).toBe(false);
    });

    xit("should require at least one letter", function(){
        expect(isValidPassword("111111111111")).toBe(false);
    });

    xit("should require at least one symbol", function(){
        expect(isValidPassword("a1a1a1a1a1a1")).toBe(false);
    });

});

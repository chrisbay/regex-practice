const mod = require('../email.js');
const isValidEmail = mod.isValidEmail;

describe("email validation", function(){

    it("should require the @ symbol", function(){
        expect(isValidEmail("launchcode.org")).toBe(false);
    });

    it("should require local part", function(){
        expect(isValidEmail("@launchcode.org")).toBe(false);
    });

    it("should require domain", function(){
        expect(isValidEmail("chris@")).toBe(false);
    });

    it("should require tld", function(){
        expect(isValidEmail("chris@launchcode")).toBe(false);
    });

    it("should allow regular emails", function(){
        expect(isValidEmail("chris@launchcode.org")).toBe(true);
    });

    it("should allow . within local part", function(){
        expect(isValidEmail("chris.bay@launchcode.org")).toBe(true);
    });

    it("should not allow . at beginning of local part", function(){
        expect(isValidEmail(".bay@launchcode.org")).toBe(false);
    });

    it("should not allow . at end of local part", function(){
        expect(isValidEmail("chris.@launchcode.org")).toBe(false);
    });

    it("should not allow symbols other than . in local part", function(){
        expect(isValidEmail("chris!bay@launchcode.org")).toBe(false);
    });

    it("should not allow whitespace in local part", function(){
        expect(isValidEmail("chris bay@launchcode.org")).toBe(false);
    });

    it("should not allow whitespace in domain", function(){
        expect(isValidEmail("chris@launch code.org")).toBe(false);
    });

    it("should not allow whitespace in tld", function(){
        expect(isValidEmail("chris@launchcode. org")).toBe(false);
    });

    it("should allow - in domain", function(){
        expect(isValidEmail("chris@launch-code. org")).toBe(false);
    });
});

const phone_number = require('../phone-number.js');
const isValidPhoneNumber = phone_number.isValidPhoneNumber;

describe("phone number validation", function(){

    it("should accept a number with 10 digits", function(){
        expect(isValidPhoneNumber("1234567890")).toBe(true);
    });

    xit("should not accept a number with > 10 digits", function(){
        expect(isValidPhoneNumber("12345678901")).toBe(false);
    });

    xit("should not accept a number with < 10 digits", function(){
        expect(isValidPhoneNumber("123456789")).toBe(false);
    });

    xit("should accept a number with parts separated by single spaces", function(){
        expect(isValidPhoneNumber("123 456 7890")).toBe(true);
    });

    xit("should accept a number with parts separated by any whitespace", function(){
        expect(isValidPhoneNumber("123   456    7890")).toBe(true);
    });

    xit("should accept a number with parts separated by dashes", function(){
        expect(isValidPhoneNumber("123-456-7890")).toBe(true);
    });

    xit("should accept a number with parts separated by spaces and/or dashes", function(){
        expect(isValidPhoneNumber("123 - 456 7890")).toBe(true);
    });

    xit("should accept a number with area code in parens", function(){
        expect(isValidPhoneNumber("(123) 456-7890")).toBe(true);
    });

});

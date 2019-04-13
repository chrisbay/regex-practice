const phone_number = require('../phone-number.js');
const isValidPhoneNumber = phone_number.isValidPhoneNumber;

describe("phone number validation", function(){

    it("should accept a number with 10 digits", function(){
        expect(isValidPhoneNumber("1234567890")).toBe(true);
    });

    // TODO: Add more tests

});

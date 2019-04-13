const mod = require('../times.js');
const isValidTime = mod.isValidTime;

describe("time validation", function(){

    it("should allow 24-hour times", function(){
        expect(isValidTime("13:15")).toBe(true);
    });

    it("should allow times w/ leading zero", function(){
        expect(isValidTime("03:15")).toBe(true);
    });

    it("should allow times w/o leading zero", function(){
        expect(isValidTime("3:15")).toBe(true);
    });

    it("should not allow hour values > 23", function(){
        expect(isValidTime("24:00")).toBe(false);
    });

    it("should not allow minute values > 59", function(){
        expect(isValidTime("12:60")).toBe(false);
    });

    it("should allow spaces around hour and minute values", function(){
        expect(isValidTime(" 03 : 15    ")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 PM")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 p.m.")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 pm")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00p")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 p")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 AM")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 a.m.")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 am")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00a")).toBe(true);
    });

    it("should allow reasonable AM/PM values for 12-hour times", function(){
        expect(isValidTime("12:00 a")).toBe(true);
    });

    it("should not allow AM/PM values for 24-hour times", function(){
        expect(isValidTime("14:00 AM")).toBe(false);
    });

    it("should not allow characters for 24-hour times other than spaces, digits, and :", function(){
        expect(isValidTime("asdf 14:00 ")).toBe(false);
    });

    it("should require :", function(){
        expect(isValidTime("12 00 AM")).toBe(false);
    });

});

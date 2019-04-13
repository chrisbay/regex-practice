const mod = require('../name-formatting.js');
const formatName = mod.formatName;

describe("name formatting", function(){

    it("should format 'first last' as 'last, first'", function(){
        expect(formatName("Chris Bay")).toBe("Bay, Chris");
    });

    it("should allow hyphenated last names", function(){
        expect(formatName("Julia Louis-Dreyfus")).toBe("Louis-Dreyfus, Julia");
    });

    it("should format 'first middle last' as 'last, first middle'", function(){
        expect(formatName("David Foster Wallace")).toBe("Wallace, David Foster");
    });

    it("should allow middle initials", function(){
        expect(formatName("John F. Kennedy")).toBe("Kennedy, John F.");
    });

    it("should allow single names", function(){
        expect(formatName("Plato")).toBe("Plato");
    });

    it("should allow single-quotes in names", function(){
        expect(formatName("Flannery O'Connor")).toBe("O'Connor, Flannery");
    });

});

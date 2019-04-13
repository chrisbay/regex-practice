const mod = require('../name-formatting.js');
const formatName = mod.formatName;

describe("name formatting", function(){

    it("should format 'first last' as 'last, first'", function(){
        expect(formatName("Chris Bay")).toBe("Bay, Chris");
    });

});

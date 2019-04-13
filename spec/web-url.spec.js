const mod = require('../web-url.js');
const parseWebUrl = mod.parseWebUrl;

describe("web URL", function(){

    it("should require that URLs start with http(s)", function(){
        expect(parseWebUrl("launchcode.org")).toEqual(null);
    });

    it("should require that URLs have a TLD", function(){
        expect(parseWebUrl("http://launchcode")).toEqual(null);
    });

    it("should require that URLs have a domain", function(){
        expect(parseWebUrl("http://.org")).toEqual(null);
    });

    it("should allow domains without host", function(){
        const expected = {domain: "launchcode", tld: "org", host: undefined, path: undefined};
        expect(parseWebUrl("http://launchcode.org")).toEqual(expected);
    });

    it("should allow https", function(){
        const expected = {domain: "launchcode", tld: "org", host: undefined, path: undefined};
        expect(parseWebUrl("https://launchcode.org")).toEqualexpected
    });

    it("should allow domains with host", function(){
        const expected = {domain: "launchcode", tld: "org", host: "www", path: undefined};
        expect(parseWebUrl("http://www.launchcode.org")).toEqual(expected);
    });

    it("should only allow valid chars (letters, number, -) in host names", function(){
        expect(parseWebUrl("http://www_.launchcode.org")).toEqual(null);
    });

    it("should only allow valid chars (letters, number, -) in domain names", function(){
        expect(parseWebUrl("http://www.launchcode_.org")).toEqual(null);
    });

    it("should only allow letters in tld names", function(){
        expect(parseWebUrl("http://www.launchcode.org1")).toEqual(null);
    });

    it("should allow domains with path", function(){
        const expected = {domain: "launchcode", tld: "org", host: undefined, path: "/education"};
        expect(parseWebUrl("http://launchcode.org/education")).toEqual(expected);
    });

    it("should allow query strings in the path", function(){
        const expected = {domain: "launchcode", tld: "org", host: undefined, path: "/education?q=python"};
        expect(parseWebUrl("http://launchcode.org/education?q=python")).toEqual(expected);
    });

});

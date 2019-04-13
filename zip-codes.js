function isValidZipCode(code) {
    code = String(code);
    return code.search(/^\d{5}(-\d{4})?$/) > -1;
};

module.exports = { isValidZipCode };

function isValidPhoneNumber(phoneNum) {
    return phoneNum.search(/^\(?\d{3}\)?(\s*-?\s*)?\d{3}(\s*-?\s*)?\d{4}$/) > -1;
};

module.exports = { isValidPhoneNumber };

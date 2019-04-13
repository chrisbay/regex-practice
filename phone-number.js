function isValidPhoneNumber(phoneNum) {
    const matches = phoneNum.match(/^\(?\d{3}\)?(\s*-?\s*)?\d{3}(\s*-?\s*)?\d{4}$/);
    return matches !== null; 

};

module.exports = { isValidPhoneNumber };

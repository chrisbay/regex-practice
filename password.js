function isValidPassword(password) {
    const isLongEnough = password.search(/^[^\s]{12,}$/) > -1;
    const containsDigit = password.search(/\d/) > -1;
    const containsLetter = password.search(/[a-z]/i) > -1;
    const containsSymbol = password.search(/[^\da-zA-Z\s]/) > -1;
    return isLongEnough && containsDigit && containsLetter && containsSymbol;
};

module.exports = { isValidPassword };

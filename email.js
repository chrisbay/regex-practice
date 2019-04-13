function isValidEmail(email) {
    return email.search(/^[a-z0-9]+(\.[a-z0-9]+)?@[a-z0-9-]+\.[a-z]{2,}$/i) > -1;
};

module.exports = { isValidEmail };

function parseWebUrl(url) {

    // return an object with properties host, domain, tld, and path for valid URLs, null otherwise

    const matches = url.match(/^https?:\/\/((?<host>[a-z0-9-]+)\.)?(?<domain>[a-z0-9-]+)\.(?<tld>[a-z]{2,})(?<path>\/[a-z0-9\?=]+)?$/i);
    if (!matches)
        return null;
    return matches.groups;
};

module.exports = { parseWebUrl };

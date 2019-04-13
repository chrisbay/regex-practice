function isValidTime(time) {
    const results = time.match(/^\s*(?<hours>\d{1,2})\s*:\s*(?<minutes>\d{2})\s*(?<period>([ap]\.?)(m\.?)?)?\s*$/i);
    
    if (!results) 
        return false;
    
    const hours = Number(results.groups["hours"]);
    const minutes = Number(results.groups["minutes"]);
    const period = results.groups["period"];
    
    if (period && hours > 12)
        return false; 

    return minutes >= 0 && minutes < 60 && hours >= 0 && hours < 24;
};

module.exports = { isValidTime };

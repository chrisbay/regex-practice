function formatName(name) {
    return name.replace(/^(\w+)(\s\w*|\s\w\.)?\s(['\w-]+)$/, "$3, $1$2");
};

module.exports = { formatName };

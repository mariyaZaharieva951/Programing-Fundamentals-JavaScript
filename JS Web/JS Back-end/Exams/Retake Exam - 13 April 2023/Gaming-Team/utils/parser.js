function parserError(error) {
    return error.message.split('\n')
};

module.exports = {
    parserError
}
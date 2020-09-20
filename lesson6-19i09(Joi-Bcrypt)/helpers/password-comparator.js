const bcrypt = require('bcrypt');
const {ErrorHandler, errors, statusCodes} = require('../errors');

module.exports = async (password, hashedPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);
    console.log('sadasdasdasdasdasdasdasdasdasdas');
    console.log(isPasswordEquals);
    console.log('sadasdasdasdasdasdasdasdasdasdas');

    if (!isPasswordEquals) {
        throw new ErrorHandler(
            errors.NOT_FOUND_USER.message,
            statusCodes.NOT_FOUND,
            errors.NOT_FOUND_USER.code)
    }
}

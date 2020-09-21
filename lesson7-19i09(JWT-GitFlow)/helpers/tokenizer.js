const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'access-secret', {expiresIn: '5m'});
    const refresh_token = jwt.sign({}, 'refresh-secret', {expiresIn: '10h'});

    return {
        access_token,
        refresh_token
    }
}

const bcrypt = require('bcrypt');
const passes = ['password', '0000', '12345', 'cutie', 'somePass',]

async function getHashe(password) {
    const hash = await bcrypt.hash(password, 10);
    console.log(password + '  -   ' + hash);

    return hash;
}

passes.forEach((pass, index) => {
    getHashe(pass);
})

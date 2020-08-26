const fs = require('fs');
const path = require('path');

const {scheduleReplacer} = require('./helper');

const pathOne = path.join(process.cwd(), '1800');
const pathTwo = path.join(process.cwd(), '2000');

scheduleReplacer(pathOne, pathTwo);

/*fs.writeFileSync(path.join(process.cwd(), 'test.txt'))

fs.stat(path.join(path.join(process.cwd(), 'test.txt')), (err, info) => {
    console.log(info);

    const date = new Date();
    console.log(date);

    const timestump = Date.parse(date);
    console.log(timestump);
})*/



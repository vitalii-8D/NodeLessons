const fs = require('fs');
const path = require('path');

const scheduleReplacer = function (firstGroupPath, secondGroupPath) {
    console.log('begin');
    let firstFolder = [];
    let secondFolder = [];

    fs.readdirSync(firstGroupPath, (err, listOfFiles) => {
        firstFolder = listOfFiles;
        console.log(firstFolder);
    });
    fs.readdirSync(secondGroupPath, (err, listOfFiles) => {
        secondFolder = listOfFiles;
        console.log(secondFolder);
    });

    console.log('middle');

    for (const item of firstFolder) {
        console.log(item);
        fs.renameSync(path.join(firstGroupPath, item), path.join(secondGroupPath, item), (err) => {
            if (err) {
                console.log(err);
            }
        })
    }

    console.log('middle2');

    for (const item of secondFolder) {
        fs.renameSync(path.join(secondGroupPath, item), path.join(firstGroupPath, item), (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}


module.exports = {
    scheduleReplacer
}

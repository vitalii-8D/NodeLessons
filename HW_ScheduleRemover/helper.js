const fs = require('fs');
const path = require('path');

const scheduleReplacer = function (firstGroupPath, secondGroupPath) {
    console.log('begin');
    let firstFolder = [];
    let secondFolder = [];

    fs.readdir(firstGroupPath, (err, listOfFiles) => {
        firstFolder = listOfFiles;
        console.log(firstFolder);

        fs.readdir(secondGroupPath, (err, listOfFiles) => {
            secondFolder = listOfFiles;
            console.log(secondFolder);

            for (const item of firstFolder) {
                console.log(item);
                fs.rename(path.join(firstGroupPath, item), path.join(secondGroupPath, item), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }

            for (const item of secondFolder) {
                fs.rename(path.join(secondGroupPath, item), path.join(firstGroupPath, item), (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        });
    });
}


module.exports = {
    scheduleReplacer
}

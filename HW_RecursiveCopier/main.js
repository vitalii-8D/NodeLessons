const fs = require('fs');
const path = require('path');
const {deleteAndCreateFolder, recursiveCopier} = require('./recursiveFunction.js');

const targetPath = path.join(process.cwd(), 'targetFolder');
const forCopiesPath = path.join(process.cwd(), 'folderForCopies');

// recursiveCopier(targetPath, forCopiesPath);

deleteAndCreateFolder(forCopiesPath);

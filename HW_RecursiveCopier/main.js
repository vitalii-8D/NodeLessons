const fs = require('fs');
const path = require('path');
// Вспомагательный файл с функциями
const {deleteAndCreateFolder, recursiveCopier} = require('./recursiveFunction.js');

// Путь к папке, откуда мы рекурсивно копируем только файлы
const targetPath = path.join(process.cwd(), 'targetFolder');
// Путь к папке, в которую будем копировать
const forCopiesPath = path.join(process.cwd(), 'folderForCopies');

// Вызовы импортированых функций. Просто коментить по очереди))

// recursiveCopier(targetPath, forCopiesPath);

deleteAndCreateFolder(forCopiesPath);

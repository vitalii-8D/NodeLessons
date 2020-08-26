const fs = require('fs');
const path = require('path');

const recursiveCopier = function(targetPath, copiesPath) {
    // Создаем переменную текущего пути
    const currentPath = targetPath;
    // Считываем все файлы в папке
    fs.readdir(currentPath, (err, listOfFiles) => {
        // Перебираем все файлы
        for (const fileName of listOfFiles) {
            // Сохраняем путь файла
            const newFilePath = path.join(currentPath, fileName);
            // Смотрим статистику
            fs.stat(newFilePath, (err, data) => {
                if (data.isDirectory()) {
                    // Пускаем в ход эту же функцию, если файл - папка.
                    recursiveCopier(newFilePath, copiesPath);
                } else {
                    console.log(fileName);
                    fs.writeFile(path.join(copiesPath, fileName), fileName, (err) => {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            })
        }
    })
}


// Функция перезаписывает пустую папку

const deleteAndCreateFolder = function(targetFolderPath) {

    fs.rmdirSync(targetFolderPath, {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        }
    });

    fs.mkdirSync(targetFolderPath, (err) => {
        if (err) {
            console.log(err);
        }
    })

    console.log('Folder is cleared');
}

// Экспорт. Просто экспорт...
module.exports = {
    recursiveCopier,
    deleteAndCreateFolder
}

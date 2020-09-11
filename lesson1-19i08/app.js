    // Якщо експортуєш одну змінну, а не об'єкт
const someVar = require('./file2');

    // Щоб підтягнути глобальні змінні з файлу.
require('./file2');

const {myVariable} = require('./file2');
console.log(myVariable);

global.age = 20;
// console.log(global);
console.log(global.age);


    // PROCESS

    // Системна інформація про процес (дуже багато інформації :) )
// console.log(process);
    // Current Work Directory
console.log(process.cwd());
    // Всі змінні оточення. Ці змінні видно зівсюди куди дотягується Нода. ЗЗОВНІ ЇХ НЕ ВИДНО
console.log(process.env);
    // Можна додавати свої змінні
// process.env.myCustomVar = 'Some variable';


    // OS - бібліотека. Інформація про операціну систему.
    const os = require('os');
console.log(os);
    // Тип розділення строк
console.log(os.EOL);
    // Інфа про процесор
console.log(os.cpus());
    // Тип операційки
console.log(os.type());
    // Інфо про Юзера
console.log(os.userInfo());
    // Скільки комп вже включений
console.log(os.uptime());
    // Архітектура
console.log(os.arch());
    //
console.log(os.platform());

console.log(__dirname);
console.log(__filename);

     //  ІВЕНТ ЕМІТЕРИ !!
const {EventEmitter} = require('events');
const ee = new EventEmitter;

    // Вішаємо на якусь подію обробники.
ee.on('xxx', (age, name) => {
    console.log('xxx emitted');
    console.log(`age = ${age}, name = ${name}`);
});

ee.on('xxx', () => {
    console.log('xxx emitted again');
});
    // Імітуємо цю подію. Тут можуть передаватись параметри після імені події.
ee.emit('xxx', 20, 'Vitalii');
ee.emit('xxx', 20, 'Vitalii');

    // once імітується лише один раз
ee.once('OnceAction', () => {
    console.log('ONCE ACTION');
})
ee.emit('OnceAction')
ee.emit('OnceAction')
ee.emit('OnceAction')


        // PROCESS handlers
    // Часто застосовують такі івент хендлери

    // Коли помилка оброблена блоком catch
process.on("rejectionHandled", (data, ) => {
    console.log('OOOps');
        // Моментально зупинить виконання апки. Повалить помилку, так як  rejectionUnHandled
        // Тут можна оброляти дані про помилку, можна всьо хендлити
        // Тут зазвичай пишуться логи
    process.exit(0);
})
    // Якщо з'являється помилка. З цим методом можна бути взагалі без catch
process.on("unhandledRejection", () => {

})


        // FS - модуль файлової системи
const fs = require('fs');
const path = require('path');

    // Об'єднує всі шляхи в один
const filePath = path.join(process.cwd(), 'dir', 'test.txt');
console.log(filePath);

    // Просто створює новий файл і записує почакові дані
    // Якщо в кликати декілька разів, то файл буде перезаписуватись.
/*fs.writeFile(filePath, 'Hello world and Vitalii', (err) => {
    if (err) {
        console.log(err);
    }
})*/

/*fs.readFile(filePath, (err, data) => {
    // data - виводить дані у файлі у шіснадцятковій системі
    console.log(data.toString());
});*/

    // Дописує дані у файл. Якщо файла нема - створює його пустим.
    // А ще, через цей метод записують логи(де шо і коли сталось)
fs.appendFile(filePath, '\nHello again', (err) => {
    if (err) {
        console.log(err);
    }
});

    // Створює папку. recursive - при створенні папок в папці
/*fs.mkdir(path.join(process.cwd(), 'zoom', 'test'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})*/

    // Видаляє папку. recursive - при видаленні папки в якій є папки
/*fs.rmdir(path.join(__dirname, 'zoom'), {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    }
})*/

    // Повертає масив з файлами
fs.readdir(path.join(process.cwd(), 'dir'), (err, files) => {
    console.log(files);
    // Вивести розширення файлу
    // path.extname(files[0]);
});

    // Виводе статистику про файл і методи
fs.stat(path.join(process.cwd(), 'dir'), (err, stat) => {
    console.log(stat);
    // Перевіряє чи є папкою. Таким чином можна рекурсією видаляти внутрішні файли
    console.log(stat.isDirectory());
});

    // Видаляє ФАЙЛ!
fs.unlink(filePath, (err) => {

});

    // Переміщає з одної директорії в іншу (перше створювалось для перейменування)
fs.rename(path.join(process.cwd(), 'dir', 'test2.txt'), path.join(process.cwd(), 'zoom', 'test2-Copy.txt'), (err) => {
    if (err) {
        console.log(err);
    }
});

    // Як зчитувати дані чаcтинами
    // fs.createReadStream схожий на EventEmitter
const readStream = fs.createReadStream('./video.mp4');

    // Логає данні частинами
readStream.on("data", (buffer) => {
    console.log(buffer);
})
readStream.on("end", (buffer) => {
    console.log('Finish');
})

    //
const writeStream = fs.createWriteStream('./stream.mp4');
const rewriteStream = fs.createWriteStream('./dir/rewrited.mp4');

// writeStream.write('RRRRRRRRR');

/*readStream.on("data", (buffer) => {
    console.log(buffer);
    rewriteStream.write(buffer);
})*/

readStream.pipe(rewriteStream);

const express = require('express');
const path = require('path');
const app = express();

const expressHandlebars = require('express-handlebars');

// Вчить читати body-запити і jsonи
// extended - то розширення ще якесь
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

let arr = [
    {name: 'dima', age: 23},
    {name: 'alena', age: 26},
    {name: 'kolya', age: 16},
    {name: 'Vitalik', age: 20},
];

app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}))
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));

// app.get('/', (err, req, res, next) => {});
app.get('/', (req, res) => {
    console.log(req);

    // res.end('ALL RIGHTnode');

    /*res.write('blablabla'); // Дає шось з сєрвака, але не завершує запит
    res.write('blablabla'); // Дає шось з сєрвака, але не завершує запит
    res.write('blablabla'); // Дає шось з сєрвака, але не завершує запит*/
    // res.end('ALL RIGHT');

    //res.json('from JSON'); // Можно одразу слати заджейсонені файли

    //res.status(404).end('End'); // Шле статус. Не заверхує респонса, тому треба закінчувати
    //res.sendStatus(401); // Завершує процес

    // Якщо слати 2 однакових запита(два GET наприклад)
    // То відпрацює лише той, який вище по кодові.

    /*res.json([
        {name: 'dima', age: 23},
        {name: 'alena', age: 26},
        {name: 'kolya', age: 16},
        {name: 'Vitalik', age: 20},
    ]);*/

    res.render('main', {message: 'PRIVET CHATIC', isFine: false});
});

app.get('/users', (req, res) => {
    res.render('users', {arr});
});

app.get('/render-register', (req, res) => {
    res.render('register');
});

app.post('/reg', (req, res) => {
    console.log('------------');
    console.log(req.body);
    console.log('------------');

    res.end('OK');

    // Тут можна робити редірект після того
    // res.redirect('/users');
});

app.get('/users', (req, res) => {
    res.json([
        {name: 'dima', age: 23},
        {name: 'alena', age: 26},
        {name: 'kolya', age: 16},
        {name: 'Vitalik', age: 20}
    ]);
});

app.post('/users', (req, res) => {
    // req.body - зчитує тіло запиту
    console.log(req.body);

    res.end('User created');
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening port 5000');
});

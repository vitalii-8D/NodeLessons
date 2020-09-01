const express = require('express');
const path = require('path');
const app = express();

const expressHandlebars = require('express-handlebars');

// Вчить читати body-запити і jsonи
// extended - то розширення ще якесь
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Створює статичну, ПУБЛІЧНУ бібліотеку, з якої можна за допомогою запитів брвти картинки
app.use(express.static(path.join(process.cwd(), 'views')));

const {userRouter, schRouter} = require('./routes');
app.use('/users', userRouter);
app.use('/schedulers', schRouter);

app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}))
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));

// app.get('/', (err, req, res, next) => {});
app.get('/', (req, res) => {
    console.log(req);

    // res.end('ALL RIGHT node');

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

app.get('/render-register', (req, res) => {
    res.render('register');
});


app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Listening port 5000');
});

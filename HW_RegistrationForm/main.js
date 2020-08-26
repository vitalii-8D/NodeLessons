const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const fs = require('fs');

/*let users = [
    {name: 'Vitalii', age: 21, eyes: 'green', music: 'rock', login: 'vitalikkeks', password: 'password'},
    {name: 'Maria', age: 20, eyes: 'brown', music: 'pop', login: 'maria007', password: 'mariamaria'},
    {name: 'Kolya', age: 23, eyes: 'grey', music: 'rock', login: 'indeec', password: 'bombom'},
]*/
const usersPath = path.join(process.cwd(), 'users.json');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'templates')));

app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'templates'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/registration', (req, res) => {
    res.render('register-form')
});

app.post('/register', (req, res) => {
    // console.log(req.body);

    let users = [];
    const newUser = req.body;
    newUser.age = +newUser.age;
    console.log('new user');
    console.log(newUser);

    // fs.writeFile(path.join(process.cwd(), 'users.json'), JSON.stringify(users), (err) => {});

    fs.readFile(usersPath, (err, userData) => {
        users = JSON.parse(userData.toString());

        for (const user of users) {
            if (user.name === newUser.name) {
                res.render('pop-ups', {nameMistake: true});
                return;
            } else if (user.login === newUser.login) {
                res.render('pop-ups', {loginMistake: true});
                return;
            }
        }
        users.push(newUser);
        fs.writeFile(usersPath, JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
            res.render('pop-ups', {noMistakes: true});
        })
    });
})

app.get('/users', (req,res) => {
    fs.readFile(usersPath, (err, data) => {
        const userArr = JSON.parse(data.toString());
        res.render('all-users', {userArr});
    });
});

app.get('/logonation', (req, res) => {
    res.render('logonation');
})

app.post('/login', (req, res) => {
    const credentials = req.body;
    console.log(credentials);
    fs.readFile(usersPath, (err, data) => {
        const users = JSON.parse(data.toString());
        console.log(users);
        for (const user of users) {
            if (credentials.login === user.login && credentials.password === user.password) {
                process.env.currentUser = JSON.stringify(user);
                res.redirect('/profile')
            }
        }
        res.render('pop-ups', {undefinedUserMistake: true})
    })
})

app.get('/profile', (req, res) => {
    console.log(process.env.currentUser);
    res.render('profile-page', {user: JSON.parse(process.env.currentUser)});
});

app.get('/logout', (req, res) => {
    process.env.currentUser = '';
    console.log(process.env.currentUser);
    res.redirect('/');
})

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is starting on port 5000');
})

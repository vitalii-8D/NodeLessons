const fs = require('fs');
const path = require('path');

const carsPath = path.join(process.cwd(), 'db', 'cars.json');
const usersPath = path.join(process.cwd(), 'db', 'users.json');

module.exports = {
    fetchAllUsers: () => {
        const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        return users;
    },
    pushUser(newUser) {
        console.log(newUser);
        let usersJSON = fs.readFileSync(usersPath, 'utf-8') || '[]';

        let users = JSON.parse(usersJSON);
        id = users.length ? users[users.length - 1].id + 1 : 1;

        users.push({id,...newUser});
        fs.writeFileSync(usersPath, JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return users;
    },
    deleteUser(id) {
        let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i,1);
                break;
            }
        }
        fs.writeFileSync(usersPath, JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return users;
    },
    fetchOneUser: (id) => {
        const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        let index;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                index = i;
                break;
            }
        }
        return users[index];
    },
    updateOneUser: (id, body) => {
        const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        let index;
        const userToUpdate = users.find((user, ind) => {
            index = ind;
            return user.id === +id;
        });
        for (let key in body) {
            users[index][key] = body[key];
        }
        fs.writeFileSync(usersPath, JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
        })
        return users;
    },
    fetchCarsOfUser: (id) => {
        const cars = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
        const userCars = cars.filter(car => car.userId === id);
        return userCars;
    }
}

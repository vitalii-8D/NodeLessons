const uuid = require('uuid').v4();
const fs = require('fs-extra').promises;
const path = require('path');

const { userService, emailService } = require('../services');
const { hashPass } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.fetchAllUsers();
            res.json(users);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    addUser: async (req, res) => {
        try {
            let { body: user, avatar } = req;
            user.password = await hashPass(user.password);

            const newUser = await userService.pushUser(user);

            if ( avatar ) {
                const photoDir = `users/${ newUser.id }/photos`;
                const fileExtention = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtention}`;

                /*console.log('----****----  BIG DEBUGING  ----****----');
                console.log("path.resolve(process.cwd(), 'public', photoDir)     ----     ", path.resolve(process.cwd(), 'public', photoDir));
                console.log("path.resolve('public', photoDir)     ----     ", path.resolve('public', photoDir));
                console.log("path.resolve(photoDir)     ----     ", path.resolve(photoDir));
                console.log("path.resolve(__dirname, 'public', photoDir)     ----     ", path.resolve(__dirname , 'public', photoDir));
                console.log("path.resolve()     ----     ", path.resolve());
                console.log('process.cwd()     ----     ', process.cwd());
                console.log('__dirname     ----     ', __dirname);
                console.log('----****----  BIG DEBUGING  ----****----');*/


                await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), {recursive: true});
                await avatar.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));
                await userService.updateById(newUser.id, {avatar: `${photoDir}/${photoName}`})
            }

            await emailService.sendMail(user.email, WELCOME, { userName: user.name })

            res.json(newUser);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const newUsersArr = await userService.deleteUser(+id);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    getOneUser: async (req, res) => {
        try {
            const { id } = req.params;
            const newUsersArr = await userService.fetchOneUser(+id);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const newUsersArr = await userService.updateById(+id, body);
            res.json(newUsersArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    },
    getCarsOfUser: async (req, res) => {
        try {
            const { id } = req.params;
            const carsArr = await userService.fetchCarsOfUser(+id);
            res.json(carsArr);
        } catch (e) {
            return res.status(400).end(e.message);
        }
    }
}

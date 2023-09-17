const fs = require('fs')
const bcrypt = require('bcrypt')



exports.readJsonFile = () => {
    try {
        const jsonData = fs.readFileSync(`${__dirname}/../data/userData.json`, 'utf-8');
        const users = JSON.parse(jsonData)
        return users.users
    } catch (error) {
        throw error
    }
}


exports.addUserToFile = (newUser) => {
    try {
        const users = exports.readJsonFile()
        users.push(newUser)
        const newUsers = {
            users: users
        }
        fs.writeFileSync(`${__dirname}/../data/userData.json`, JSON.stringify(newUsers));
    } catch (error) {
        console.log(error.message);
        throw error
    }
}

exports.checkIfUserAlredyExist = async (newUser) => {
    try {
        const users = exports.readJsonFile()
        const user = users.find(element =>  element.email == newUser.email);

        if (user) {
            const isPass = await bcrypt.compare(newUser.password, user.password);
            console.log(isPass);
            return isPass
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}

exports.checkIfUserAlredyExistForLogin = async (newUser) => {
    try {
        const users = exports.readJsonFile()
        const user = users.find(element => element.username === newUser.username);

        if (user) {
            const isPass = await bcrypt.compare(newUser.password, user.password);
            console.log(isPass);
            return isPass
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}

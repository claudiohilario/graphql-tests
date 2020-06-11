/**
 * User example:
 * {id: 1, name: 'Cláudio', email: 'chilario@ontech.pt'},
 */
const users = [];

class User {
    static  find() {
        return new Promise((resolve, reject) => {
            return resolve(users);
        })
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            return resolve(users.find(user => user.id === id));
        })
    }

    static create({name, email}) {
        const id = users.length + 1;
        const newUser = {id, name, email};
        users.push(newUser);
        return newUser;
    }
}

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),
    },
    Mutation: {
        createUser: (_, {name, email}) => User.create({name, email}),
    },
}
const readline = require('readline');
const dbIndex = require('./index');

const prompt = (query) => {
    const line = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => line.question(query, ans => { line.close(); resolve(ans); }));
}

const setup = () => {
    prompt("Type DELETE in all caps to permanently delete the database: ")
        .then((confirmation) => {
            if (confirmation !== 'DELETE') return;

            dbIndex.Connection.sync({force: true}).then(async () => {
                const demoUser = await dbIndex.User.create({
                    username: 'muhammeta7',
                    password: 'password'
                });
                console.log('created demo user: ' + demoUser.dataValues ? demoUser.dataValues : demoUser);
            });
        })
        .catch(err => {
            console.log('error setting up database! error: ' + err);
        });
};

module.exports = {
    setup
}

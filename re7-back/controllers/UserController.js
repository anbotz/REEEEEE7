const User = require("../schemas/UserSchema");
const bcrypt = require('bcrypt');

async function login(req, res, next) {
    res.send('login')
}


async function signup(req, res, next) {
    const { username, password } = req.body;

    if (!username) {
        return res.status(404).send({ error: `absence d'utilisateur` })
    }

    if (!password) {
        return res.status(404).send({ error: 'absence de mot de passe' })
    }

    try {
        const alreadyUser = await User.findOne({ username: username })
        if (alreadyUser) {
            return res.status(400).send({ error: 'pseudonyme déjà utilisé' });
        }
        const cryptedPwd = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            password: cryptedPwd,
        });
        newUser.save();

        return res.status(200).send('utilisateur enregistré');

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'erreur interne au serveur' })
    }
};

module.exports = {
    signup,
    login
}
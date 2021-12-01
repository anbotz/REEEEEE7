const User = require('../schemas/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res, next) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(404).json({ error: `absence d'utilisateur` });
  }

  if (!password) {
    return res.status(404).json({ error: 'absence de mot de passe' });
  }

  try {
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ error: `l'utilisateur n'existe pas` });
    }

    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      return res.status(403).json({ error: `le mot de passe est incorrect` });
    }

    return res.status(200).json({
      token: jwt.sign(
        {
          userId: user._id,
          isAdmin: user.isAdmin,
        },
        'HACKER_LES_MDP_ICI',
        { expiresIn: '24h' }
      ),
    });
  } catch (error) {
    console.log(`Erreur lors de la connexion ${error}`);
    return res.status(500);
  }
}

async function signup(req, res, next) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(404).json({ error: `Absence de pseudonyme` });
  }

  if (!password) {
    return res.status(404).json({ error: 'Absence de mot de passe' });
  }

  try {
    const alreadyUser = await User.findOne({ username: username });
    if (alreadyUser) {
      return res.status(400).json({ error: 'Pseudonyme déjà utilisé' });
    }
    const cryptedPwd = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: cryptedPwd,
    });
    newUser.save();

    return res.status(200).json('Utilisateur enregistré');
  } catch (error) {
    console.log(`Erreur lors de l'enregistrement ${error}`);
    return res.status(500);
  }
}

module.exports = {
  signup,
  login,
};

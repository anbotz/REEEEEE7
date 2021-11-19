const jwt = require('jsonwebtoken');

exports.isAuth = async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.status(403).send({ error: `Utilisateur non reconnu` });
  }

  try {
    const user = await jwt.verify(token, 'HACKER_LES_MDP_ICI');
    if (user.isAdmin) {
      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(403).send({ error: 'Utilisateur non administrateur' });
  }
};

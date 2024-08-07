const userModel = require('../models/usersModel');
const encryptPassword = require('../helpers/encryptPassword');

async function createUser(req, res){
    const { nome, email, senha } = req.body;

    const pass = await encryptPassword(senha);

    try {
        await userModel.insertUserModel(nome, email, pass);
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(201).send("Usuário inserido com sucesso");
}

module.exports = {
    createUser
}
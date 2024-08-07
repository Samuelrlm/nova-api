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

async function getUserById(req, res){
    const {id} = req.params

    try {
        var user = await userModel.getUserByIdModel(id);
        
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send(user);
}

async function deleteUser(req, res){
    const { id } = req.params

    try {
        await userModel.deleteUserModel(id);    
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send("Usuário deletado com sucesso");
}

module.exports = {
    createUser,
    getUserById,
    deleteUser
}
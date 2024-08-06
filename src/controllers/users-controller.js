const userModel = require('../models/usersModel');
const dotenv = require('dotenv');
const crypto = require('crypto');
dotenv.config();

async function createUser(req, res){
    const { nome, email, senha } = req.body;

    const secret_key = process.env.SECRET_KEY;

    const hash = crypto
    .createHash('sha256')
    .update(secret_key)
    .digest('base64')
    .substr(0, 32);

    const iv = crypto.randomBytes(16);

    const cipher = 
        crypto.createCipheriv('aes-256-cbc', hash, iv);

    let encrypted = cipher.update(senha)
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    const pass =
        iv.toString('hex') + ':' + encrypted.toString('hex');

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
async function insertUserMiddleware(req, res, next){
    const { nome, email, senha } = req.body;

    if(!nome || !email || !senha) {
        return res.status(400).send("Dados inválidos");
    }

    if (senha.length < 6) {
        return res.status(400).send("A senha deve ter pelo menos 6 caracteres");
    }

    if(!email.includes('@') || !email.includes('.')) {
        return res.status(400).send("Email inválido");
    }

    next();
}

module.exports = {
    insertUserMiddleware
}
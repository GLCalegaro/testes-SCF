var data =  require("./fakeData");

module.exports = function(req, res){
    var userId = Number(req.query.id); // Supondo que o ID do usuário seja passado como parâmetro na URL

    // Verificar se o usuário com o ID especificado existe
    var user = data.users.find((u) => u.id === userId);
    if (!user) {
        res.status(404).send('Usuário com o ID especificado não encontrado.');
        return;
    }

    res.send("Usuário " +  user.name  + " foi lido " + user.count + " vezes.");

};
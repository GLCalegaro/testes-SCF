var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var idToUpdate = req.query.id;

    var userId = Number(req.query.id); // Supondo que o ID do usuário seja passado como parâmetro na URL
    var user = data.users.find((u) => u.id === userId);

    const reg = data.users.find(id => id === id);
    reg.name = req.body.name;
    reg.job = req.body.job;
    var updatedName = req.body && req.body.name;
    var updatedJob = req.body && req.body.job;

    if (!idToUpdate) {
        res.status(400).send('"ID" não consta na base de dados, forneça um ID válido!');
        return;
    }
    if(user.permission === "admin"){
        res.send("Usuário " +  user.name  + " tem permissão " + user.permission + " para remover usuários.");
    }else{
        return res.send("Usuário " +  user.name  + " NÃO tem permissão " + user.permission + " para remover usuários.");
    }
    
    if (updatedName) {
        reg.name = updatedName;
    }
    if (updatedJob) {
        reg.job = updatedJob;
    }

    res.status(200).json(reg);

};
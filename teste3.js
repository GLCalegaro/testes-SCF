const userObj = require("./fakeData");
var data = require("./fakeData");

module.exports = function (req, res) {
  var id = req.query.id;
  var name = req.query.name;

  var userId = Number(req.query.id); // Supondo que o ID do usuário seja passado como parâmetro na URL
  var user = data.users.find((u) => u.id === userId);

  function findUsers() {
    return userObj.usuários;
  }
  //Validação para encontrar usuário pelo "ID"
  if (!id) {
    res
      .status(400)
      .send('"ID" não consta na base de dados, forneça um ID válido!');
    return;
  }
  if(user.permission === "admin"){
    res.send("Usuário " +  user.name  + " tem permissão " + user.permission + " para remover usuários.");
}else{
    return res.send("Usuário " +  user.name  + " NÃO tem permissão " + user.permission + " para remover usuários.");
}

  function removeUsers(id) {
    const removedUser = findUsers().filter((usuárioAtual) => {
      return usuárioAtual.id !== id;
    });
    console.log(removedUser);
  }
  for (let i = 0; i < data.users.length; i++) {
    if (data.users[i].id == id) {
      data.users[i] = null;
    }
  }

  const usuarios = data.users;

  //res.status(201).send(`Usuário com 'Id': ${id} removido com sucesso!`);
  res.status(201).send({ usuarios });
};

const newData = require("./fakeData");
var data = require("./fakeData");

module.exports = function (req, res) {
  //Também foi criada a variavel para armazenar o "id" por não estarmos utilizando nenhum IdGenerator para gerar automático;
  var id = req.body.id;
  var name = req.body.name;
  //A variável "job" foi declarada errada - como "jov", portanto modifiquei para "job"
  var job = req.body.job;
  var count = 0;

  var newUser = {
    id: id,
    name: name,
    job: job,
    count: count
  };
  //Foram feitas também 2 condições para melhorar o código: a primeira para validação de dados de entrada para que os dados sejam inseridos corretamente e prosseguir e a segunda condição para que os "IDS" dos usuários não sejam iguais e gerar conflito.
  if (!name || !job || !id) {
    res.status(400).send("ID, name, job devem ser inseridos!");
    return;
  }
  var idExists = data.users.some((user) => user.id === id);
  if (idExists) {
    res.status(400).send("ID já existe no banco de dados, tente novamente.");
    return;
  }
  for(let i = 0; i < data.users.length;  i++) {
    if(data.users[i].id == id) {
        data.users[i] = null;
    }
}

  data.users.push(newUser);
  const usuarios = data.users;


    //res.status(201).send(`Usuário com 'Id': ${id} removido com sucesso!`);
    res.status(201).send({usuarios});

  // res.status(201).json(newUser);
};

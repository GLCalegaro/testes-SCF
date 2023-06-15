var data = require("./fakeData");

const getUser = (req, res, next) => {
  var name = req.query.name;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      res.send(data[i]);
    }
  }
};

//Utilizando bloco 'try-catch' para capturar erros e passá-lo para ser tratado pelo 'next'. Como boas práticas, também retornar os dados em formato JSON e facilitar o processamento de dados no lado do cliente.
const getUsers = (req, res, next) => {
  try {
    var userId = Number(req.query.id); // Supondo que o ID do usuário seja passado como parâmetro na URL

    // Verificar se o usuário com o ID especificado existe
    var user = data.users.find((u) => u.id === userId);
    if (!user) {
        res.status(404).send('Usuário com o ID especificado não encontrado.');
        return;
    }

    // Contar quantas vezes o usuário foi lido
    user.count++;

    res.status(201).json(data.users);
  } catch (error) {
    res.status(500).json({ error: "Erro na requisição de Usuários." });
    next(error);
  }
};

module.exports = {
  getUser,
  getUsers,
};

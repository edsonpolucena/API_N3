import proprietario from "../models/proprietario_model.js"

//busca todos os Proprietarios registrados na tabela Proprietario
// por meio do método findAll
export const getProprietario = async (req, res) => {
    try {
        const proprietarios = await proprietario.findAll()
        res.send(proprietarios)
    } catch (e) {
        console.log("Erro ao acessar a tabela Proprietario",e)
    }
}

// inseri registros na tabela Proprietario por meio do 
//método create
export const createProprietario = async (req, res) => {
    try {
        await proprietario.create(req.body)
        res.json({
            "message":"Um novo registro de proprietario foi inserido no Banco de dados"
        })
    } 
    catch (e) {
        console.log("Erro ao Inserir um novo proprietario", e)
    }
}

export const updateProprietario = async (req, res) => {
   try {
     await proprietario.update(req.body, { where: {id_proprietario: req.params.id_proprietario } });
      res.json({
          "message":"O registro na Tabela Proprietario foi Atualizada"
      })
  } catch (e) {
      console.log("Erro ao Atualizar a tabela Proprietario", e)
  }
}

export const deleteProprietario = async (req, res) => {
  try {
      await proprietario.destroy({ where: {id_proprietario: req.params.id_proprietario}});
      res.json({
          "message":"O registro na Tabela Proprietario foi excluída"
      });
  } catch (e) {
      console.log("Erro ao acessar a tabela Proprietario", e)
  }
}
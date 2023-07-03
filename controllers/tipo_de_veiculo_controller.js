import tipo_de_veiculo from "../models/tipo_de_veiculo_model.js"

//busca todos os Tipos de Veiculos registrados na tabela Tipo de Veiculo
// por meio do método findAll

export const getTipo_de_veiculo = async (req, res) => {
  try {
      const tipo_de_veiculos = await tipo_de_veiculo.findAll()
      res.send(tipo_de_veiculos)
  } catch (e) {
      console.log("Erro ao acessar a tabela Tipos de Veiculos",e)
  }
}

// inseri registros na tabela Tipos de Veiculo por meio do 
//método create
export const createTipo_de_veiculo = async (req, res) => {
  try {
      await tipo_de_veiculo.create(req.body)
      res.json({
          "message":"Um novo registro de Tipo de Veiculo foi inserido no Banco de dados"
      })
  } 
  catch (e) {
      console.log("Erro ao Inserir um novo Tipo de Veiculo", e)
  }
}

export const updateTipo_de_veiculo = async (req, res) => {
   try {
     await tipo_de_veiculo.update(req.body, { where: {id_tipoveiculo: req.params.id_tipoveiculo } });
      res.json({
          "message":"O registro na Tabela Tipo de Veiculo foi Atualizada"
      })
  } catch (e) {
      console.log("Erro ao Atualizar a tabela Tipo de Veiculo", e)
  }
}

//Exclui registros da tabela Tipo de Veiculo por meio
// da função destroy

export const deleteTipo_de_veiculo = async (req, res) => {
  try {
      await tipo_de_veiculo.destroy({ where: {id_tipoveiculo: req.params.id_tipoveiculo}});
      res.json({
          "message":"O registro na Tabela Tipo de Veiculo foi excluída"
      });
  } catch (e) {
      console.log("Erro ao acessar a tabela Tipo de Veiculo", e)
  }
}


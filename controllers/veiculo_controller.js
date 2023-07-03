import veiculo from "../models/veiculo_model.js"
import tipo_de_veiculo from "../models/tipo_de_veiculo_model.js"
import proprietario from "../models/proprietario_model.js"



//busca todos os Veiculos registrados na tabela Veiculo
// por meio do método findAll

export const getVeiculo = async (req, res) => {
    try {
        const veiculos = await veiculo.findAll()
        res.send(veiculos)
    } catch (e) {
        console.log("Erro ao acessar a tabela Veiculo",e)
    }
}

export const createVeiculo = async (req, res) => {
    const {id_proprietario, preco_veiculo } = req.body
    const proprietarioCad = await proprietario.findByPk(id_proprietario)
    
    if(!proprietarioCad) {
      throw `Não há Proprietario cadastrado com o ID ${id_proprietario}`
    }
    let id_tipoveiculo;

    if(preco_veiculo<50000){
      id_tipoveiculo = 3;
    } else if (preco_veiculo>=50000 && preco_veiculo < 100000){
      id_tipoveiculo = 2;
    } 
    else {
      id_tipoveiculo = 1;
    }

    try {
      await veiculo.create({ ...req.body, id_tipoveiculo })
        res.json({
          "message":"Um novo registro de Veiculo foi inserido no Banco de dados"
        })
      } 
      catch (e) {
        console.log("Erro ao Inserir um novo Veiculo", e)
      }
  }


//atualiza registros da tabela Veiculo por meio
// da função update

export const updateVeiculo = async (req, res) => {
  const {id_proprietario, id_tipoveiculo } = req.body
  const proprietarioupd = await proprietario.findByPk(id_proprietario)
  const tipo_de_veiculoupd = await tipo_de_veiculo.findByPk(id_tipoveiculo)
  try {
     await veiculo.update(req.body, { where: {id_veiculo: req.params.id_veiculo } });
      res.json({
          "message":"O registro na Tabela Veiculo foi Atualizada"
      })
  } catch (e) {
      console.log("Erro ao Atualizar a tabela Veiculo", e)
  }
}

//Exclui registros da tabela Veiculo por meio
// da função destroy
export const deleteVeiculo = async (req, res) => {
  try {
      await veiculo.destroy({ where: {id_veiculo: req.params.id_veiculo}});
      res.json({
          "message":"O registro na Tabela Veiculo foi excluída"
      });
  } catch (e) {
      console.log("Erro ao acessar a tabela Veiculo", e)
  }
}

//buscar por nome

export const getNome = async (req, res) => {
  try {
      // const { id_proprietario } = req.params.id_proprietario;

      const Veiculosnome  = await veiculo.findAll({ where: { id_proprietario: req.params.id_proprietario } });
      
      res.send(Veiculosnome);
        } catch (e) {
      console.log("Erro ao pesquisar o Nome do proprietario do Veiculo", e);
  }
}

export const getTipo = async (req, res) => {
  try {
      const { id_tipoveiculo } = req.params.id_tipoveiculo;

      const veiculotipo  = await veiculo.findAll({ where: { id_tipoveiculo: req.params.id_tipoveiculo } });
      
      res.send(veiculotipo);
        } catch (e) {
      console.log("Erro ao pesquisar o Tipo do Veiculo", e);
  }
}
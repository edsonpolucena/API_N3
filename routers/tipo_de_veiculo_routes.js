import express from "express"
import {getTipo_de_veiculo, createTipo_de_veiculo, updateTipo_de_veiculo, deleteTipo_de_veiculo} from "../controllers/tipo_de_veiculo_controller.js" 

const router = express.Router()

router.get('/tipo_de_veiculo', getTipo_de_veiculo)
router.post('/tipo_de_veiculo', createTipo_de_veiculo)
router.put('/tipo_de_veiculo/:id_tipoveiculo', updateTipo_de_veiculo);
router.delete('/tipo_de_veiculo/:id_tipoveiculo', deleteTipo_de_veiculo);

export default router
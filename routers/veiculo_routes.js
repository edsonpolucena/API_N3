import express from "express"
import { getVeiculo, createVeiculo, updateVeiculo, deleteVeiculo, getNome, getTipo} from "../controllers/veiculo_controller.js"


const router = express.Router()

router.get('/veiculo', getVeiculo)
router.post('/veiculo', createVeiculo)
router.put('/veiculo/:id_veiculo', updateVeiculo)
router.delete('/veiculo/:id_veiculo', deleteVeiculo)
router.get('/veiculo/:id_proprietario', getNome)
router.get('/veiculo/tipo/:id_tipoveiculo', getTipo)



export default router
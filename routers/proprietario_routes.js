import express from "express"
import { getProprietario, createProprietario, updateProprietario,deleteProprietario} from "../controllers/proprietario_controller.js"

const router = express.Router()

router.get('/proprietario', getProprietario)
router.post('/proprietario', createProprietario)
router.put('/proprietario/:id_proprietario', updateProprietario)
router.delete('/proprietario/:id_proprietario', deleteProprietario)


export default router

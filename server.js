import dotenv from "dotenv-safe";
dotenv.config();
import jwt from 'jsonwebtoken';
import express from 'express';
import { createServer } from "http";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/database.js";
import proprietarioRota from "./routers/proprietario_routes.js";
import tipo_de_veiculoRota from "./routers/tipo_de_veiculo_routes.js";
import veiculoRota from "./routers/veiculo_routes.js";
import Proprietario from "./models/proprietario_model.js";
import Tipo_de_veiculo from "./models/tipo_de_veiculo_model.js";
import Veiculo from "./models/veiculo_model.js";

const { sign, verify } = jwt;
const app = express();
app.use(bodyParser.json());
app.use(cors());

try {
    await db.authenticate();
    console.log("Conexão com o MySQL estabelecida!");
} catch (e) {
    console.log("Conexão com o MySQL não estabelecida", e);
}

Veiculo.associate = (models) => {
    Veiculo.hasMany(models.proprietario, { foreignKey: 'id_proprietario', as: 'proprietario' });
    Veiculo.hasMany(models.tipo_de_veiculo, { foreignKey: 'id_tipoveiculo', as: 'tipoveiculo' });
}

Veiculo.belongsTo(Proprietario, { foreignKey: 'id_proprietario', allowNull: true });
Veiculo.belongsTo(Tipo_de_veiculo, { foreignKey: 'id_tipoveiculo', allowNull: true });

app.get('/', (req, res) => {
    res.json({ message: "Servidor base '/' funcionando" });
});

app.get('/cliente', verifyJWT, (req, res) => {
    console.log("Retorno do exemplo 'mockado'...");
    res.json([{ id: 1, nome: 'edson' }]);
    app.use(proprietarioRota);
    app.use(tipo_de_veiculoRota);
    app.use(veiculoRota);
});

app.post('/login', (req, res) => {
    if (req.body.user === 'edson' && req.body.pwd === '123') {
        const id = 1;
        const token = sign({ id }, process.env.SECRET, {
            expiresIn: 300
        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: "Login Inválido" });
});

function verifyJWT(req, res, next) {
    const token = req.headers['x-acess-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Não há token' });

    verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Erro com a autenticação do token" });
        req.userId = decoded.id;
        next();
    });
}



const server = createServer(app);

server.listen(5000, () => {
    console.log("Servidor em execução na porta 5000");
});

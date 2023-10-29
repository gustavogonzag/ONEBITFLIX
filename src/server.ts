import express from 'express';
import { sequelize } from './database';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('Conectado ao banco de dados com sucesso!');
    });
    
    console.log(`Servidor iniciado com sucesso na porta ${PORT}`)
})
import express from 'express'
import sql from 'mssql'
import { sqlConfig } from './config.js'

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
export const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
        const { recordset } = await pool.query`select * from Tarefas`
        return res.status(201).json(recordset)
    }
    catch(error){
        return res.status(501).json('Erro')
    }
})

routes.get('/chamado/:id', async (req,res)=>{
    try{
            const { id } = req.params
            const { recordset } = await pool.query`select * from Tarefas where IdChamado = ${id}`
            return res.status(201).json(recordset)
    }
    catch(error){
        return res.status(501).json('Erro')
    }
})

routes.post('/chamado/novo', async (req, res)=>{
    try{
        const { id, DataChamado, NomeCliente, Descricao } = req.body
        await pool.query`insert into Tarefas values(${id}, ${DataChamado}, ${NomeCliente}, ${Descricao})`
        return res.status(201).json('Cadastrado')
    }
    catch(error){
        return res.status(501).json('Erro ao cadastrar')
    }
})

export default routes

import { heroi, listasTodos} from "../repository/HeroitRepository.js";

import { Router } from "express";
const server= Router();

server.post ('/Heroi', async (req,resp) =>{
    try {
        const Heroi= req.body;
        if(!Heroi.nome)
        throw new Error('nome do heroi obrigatorio!');
        const Heroi = await  heroi(Heroi);
    }catch(err){
        resp.status(400).send({erro:err.message})
    }
})

server.get('/Heroi',async (req,resp)=>{
    try{
        const ChecarTodos=await  listasTodos();
        resp.send ( listasTodos);
    
    }catch (err){
        resp.status(400).send ({erro:'Deu Erro!'});
    }
})

export default server;
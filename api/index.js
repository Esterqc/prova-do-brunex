import 'dotenv/config'

import HeroiController from './controller/HeroiController.js'
import express from 'express'
import cors from 'cors'

const server= express();
server.use(cors());
server.use(express.json());
 
// config endpoints
server.use (HeroiController);

server.listen(process.env.PORT,()=>
console.log (`API online na porta ${process.env.PORT}`));
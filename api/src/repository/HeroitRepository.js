import {con} from './connection.js'


export async function Heroi(Super){
    const comando=
  `Insert into TB_SUPER_HEROI(nm_Heroi) 
      values(?)`;

      const [resposta] =await con.query (comando,[Heroi.nome]);
      return resposta[0];
}

export async function listasTodos(){
    const comando=
    `select id_SUPER_HEROI  id,
    nm_heroi                nome,
    ds_SUPER_PODER           ?,
    bt_VOA                    ?` ;
    
    const [linhas] = await con.query (comando);
    return linhas;
}
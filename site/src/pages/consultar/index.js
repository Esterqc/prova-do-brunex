import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { ver } from "../../api/Superme";

export default function contact(){
    const { heroi,setHeroi}= useState({});
    async function VerTudo(){
        const resp=await ver();
        setHeroi(resp);
    }
}

useEffect(() => {
    VerTudo();
},{})


   

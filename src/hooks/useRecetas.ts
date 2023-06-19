import { useEffect, useState } from "react";

export function useRecetas(){
    const [recetas, setRecetas] = useState([]);
    const [error,setError] = useState("");
    useEffect(()=>{
        fetch(import.meta.env.VITE_JSON_URL+'recetas').then(res=>{
            if(res.status === 404){
                throw new Error('Error de peticion, verifique url');
            }
            return res.json();            
        }).then(res=>{
            setRecetas(res);
        }).catch((err)=>{
            setError(err.toString());
        })
    },[]);

    return {
        recetas, setRecetas, error, setError
    }
}
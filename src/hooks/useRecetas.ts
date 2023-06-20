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

    async function listar() {
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
    }


    async function editar(receta:any, id:any){
        const data = receta && JSON.stringify(receta);
        try {
            const res = await fetch(import.meta.env.VITE_JSON_URL+'recetas/'+id, {method:'PUT', body: data, headers:{
                'Content-Type':'application/json'
            }});
            if(res.status === 404){
                throw new Error('Error de peticion, verifique url');
            }
            return true;
        } catch (err:any) {
            setError(err.toString())
        }
    }

    async function eliminar(id:any){

        try {
            const res = await fetch(import.meta.env.VITE_JSON_URL+'recetas/'+id, {method:'DELETE'});
            if(res.status === 404){
                throw new Error('Error de peticion, verifique url');
            }
            const data = await res.json();
            if(data){
                listar();
                return true;
            }                
            } catch (err:any) {
                setError(err.toString());
            }
        //.then(res=>{
        //    if(res.status === 404){
        //        throw new Error('Error de peticion, verifique url');
        //    }
        //    return res.json();            
        //})
        //.then(res=>{
        //    setRecetas(res);
        //}).catch((err)=>{
        //    setError(err.toString());
        //})


    }

    return {
        recetas, setRecetas, error, setError, eliminar, editar
    }
}
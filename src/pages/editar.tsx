import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
export function Editar(){
    const {id} = useParams();
    const [receta, setReceta] = useState<any>({
        id,
        autor:'',
        descripcion:'',
        preparacion:'',
    });
    useEffect(()=>{
        fetch(import.meta.env.VITE_JSON_URL+'recetas/'+id)
        .then(res=>{
            if(res.status === 404){
                throw new Error("Sin datos / No encontrado por id");
            }
            return res.json();
        })
        .then(res=>{setReceta(res)})
        .catch(err=>console.log(err))
    },[])
    function handleSubmit(e:any){
        e.preventDefault();
        console.log(receta);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:
                    <input type="text" placeholder="nombre" name="nombre" defaultValue={receta.nombre} required 
                    onChange={(e:any)=>{
                        setReceta({...receta, nombre: e.target.value})}
                        }/>
                </label>
                <label htmlFor="autor">Autor:
                    <input type="text" placeholder="autor" name="autor" defaultValue={receta.autor} required 
                    onChange={(e:any)=>{
                        setReceta({...receta, autor:e.target.value})}
                        }/>
                </label>
                <label htmlFor="descripcion">Descripcion:
                    <textarea required placeholder="descripcion" name="descripcion" defaultValue={receta.descripcion}
                    onChange={(e:any)=>{
                        setReceta({...receta,descripcion:e.target.value})}
                        }></textarea>
                </label>
                <label htmlFor="preparacion">Preparacion (separada por coma):
                    <textarea required placeholder="preparacion, separada por coma" defaultValue={receta.preparacion} name="preparacion"
                    onChange={(e:any)=>{
                        setReceta({...receta, preparacion:e.target.value})}
                        }></textarea>
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
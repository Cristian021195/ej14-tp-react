import { useState } from 'react';
export function Crear(){

    const [receta, setReceta] = useState<any>({
        nombre:'',
        autor:'',
        descripcion:'',
        insumos:'',
        preparacion:'',
    });

    async function handleSubmit(e:any){
        e.preventDefault();

        try {
            const res = await fetch(import.meta.env.VITE_JSON_URL+'recetas/', {method:'POST', body: JSON.stringify(receta),
            headers: { 'Content-Type': 'application/json' }
        });
            if(res.status === 404){
                throw new Error('Error de peticion, verifique url');
            }
            return true;
        } catch (err:any) {
            console.log(err.toString())
        }
    }

    return (
        <>
            <div style={{textAlign:'center', marginTop:'2rem'}}>
                <h1>Nueva Receta</h1>
            </div>                
            <div className="form-editar pop-up">
            <article>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:  </label>
                    <input type="text" placeholder="nombre" name="nombre" defaultValue={receta.nombre} required 
                    onChange={(e:any)=>{
                        setReceta({...receta, nombre: e.target.value})}
                        }/>

                    <label htmlFor="autor">Autor:</label>
                    <input type="text" placeholder="autor" name="autor" defaultValue={receta.autor} required 
                    onChange={(e:any)=>{
                        setReceta({...receta, autor:e.target.value})}
                        }/>
                
                    <label htmlFor="descripcion">Descripcion: </label>
                    <textarea required placeholder="descripcion" name="descripcion" rows={8} defaultValue={receta.descripcion}
                    onChange={(e:any)=>{
                        setReceta({...receta,descripcion:e.target.value})}
                        }>
                    </textarea>

                    <label htmlFor="insumos">Insumos: (separada por guion [producto - peso], y por coma cada uno)</label>
                    <textarea required placeholder="insumos, separada por guion [producto - peso], y por coma cada uno" rows={8}
                    defaultValue={receta.insumos ? receta.insumos?.join("\n") : ''} name="insumos"
                    onChange={(e:any)=>{
                        setReceta({...receta, insumos: e.target.value?.split("\n") })}
                    }>

                    </textarea>

                    <label htmlFor="preparacion">Preparacion (separada por coma): </label>
                    <textarea required placeholder="Pasos, separados por coma" rows={8}
                    defaultValue={receta.preparacion ? receta.preparacion.join("\n") : ''} name="preparacion"
                    onChange={(e:any)=>{
                        setReceta({...receta, preparacion:e.target.value?.split("\n")})}
                    }>
                    </textarea>
                    <div style={{textAlign:'center', width:'100%'}}><button type="submit">Guardar</button></div>
                </form>
            </article>
        </div>
        </>        
    )
}
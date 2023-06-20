import { useRecetas } from "../hooks";
import {Link} from "react-router-dom";

export function Panel(){
    const {recetas, setRecetas, error, setError, eliminar} = useRecetas();
    return (
        <main>
            <section>
                <h1>Panel</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                <table style={{marginTop:'1em'}}>
                    <thead>
                        <tr>
                            <th>#</th><th>NOMBRE</th><th>ACCION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recetas?.length > 0 ? 
                        recetas.map((r:any,ri)=>{
                            return (
                                <tr key={ri}>
                                    <td>{r.id}</td><td>{r.nombre}</td>
                                    <td>
                                        <button onClick={()=>{ eliminar(r.id)}}>🗑️</button>
                                        <Link to={'/editar/'+r.id}>✏️</Link>
                                    </td>
                                </tr>
                            )
                        }) : 
                        <tr><td>Sin recetas: <span style={{color:'red'}}>{error}</span></td></tr>}
                    </tbody>
                </table>
                </div>
            </section>
        </main>
    )
}
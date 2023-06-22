import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import { useRecetas } from "../hooks";

//const $message = document.getElementById('message')!;

export function Home(){
    const {recetas, setRecetas, error, setError} = useRecetas();
    return (
        <main>
            <section className="pop-up">
                <h1>Home - Recetas</h1>
                
                <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                    <div style={{minWidth: '20rem',maxWidth: '80rem'}}>
                    {recetas?.length > 0 ? 
                    recetas.map((r:any,ri)=>{
                        return (
                            <article key={r.id} style={{backgroundColor:'whitesmoke', border:'1px solid #B0BEC5', borderRadius:'0.7rem', margin:'1em', padding:'0.5rem', minWidth: '20rem',maxWidth: '60rem'}}>
                                <div style={{textAlign:'center'}}><h3>{r.nombre}</h3></div>
                                <div><p><b>Descripción: </b>{r.descripcion}</p></div>
                                <div>
                                    <p><b>Ingredientes: </b></p>
                                    <ul>
                                        {r.insumos.map((ing:any, ingi:number)=>{
                                            return (<li key={ingi}>{ing}</li>)
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <p><b>Preparación: </b></p>
                                    <ol>
                                        {r.preparacion.map((pre:any, prei:number)=>{
                                            return (<li key={prei}>{pre}</li>)
                                        })}
                                    </ol>
                                </div>
                                <div style={{textAlign:'end'}}><small><b>Autor: </b>{r.autor}</small></div>
                            </article>
                        )
                    }) :
                    <p>Sin recetas: <span style={{color:'red'}}>{error}</span></p>
                    }
                        
                    </div>
                </div>

            </section>
        </main>
    )
}
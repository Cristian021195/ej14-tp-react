import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import { useRecetas } from "../hooks";

//const $message = document.getElementById('message')!;

export function Home(){
    const {recetas, setRecetas, error, setError} = useRecetas();
    return (
        <main>
            <section>
                <h1>Home</h1>
                <h2>Recetas:</h2>

                {recetas?.length > 0 ? 
                recetas.map((r:any,ri)=>{
                    return (
                        <article key={r.id} style={{backgroundColor:'whitesmoke', border:'1px solid #B0BEC5', borderRadius:'0.7rem', margin:'1em', padding:'0.5rem'}}>
                            <div style={{textAlign:'center'}}><h3>{r.nombre}</h3></div>
                            <div><p><b>Descripción: </b>{r.descripcion}</p></div>
                            <div>
                                <p><b>Ingredientes: </b></p>
                                <ul>
                                    {r.insumos.map((ing:any, ingi:number)=>{
                                        return (<li key={ingi}>{ing.producto} - {ing.peso}</li>)
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
                

            </section>
        </main>
    )
}
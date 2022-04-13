import React, { useState } from "react";

export default function Form({setElements}) {
    const[newItem, setNewitem] = useState()

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setNewitem({...newItem,[key] : value})
    }

    function addElement(e){
        e.preventDefault();
        setElements(prev => [...prev, newItem]);
    }

    return(
        <div>
            <h2>Vous vous sentez une âme d'écrivain : </h2>
            <form onSubmit={addElement}>
                <label> Titre
                    <br></br>
                    <input type="text" name="title" id="title" onChange={handleChange}/>
                </label>
                <br></br>
                <br></br>
                <label> Contenu
                    <br></br>
                    <input type="textarea" name="content" id="content" onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <button>Ajouter</button>
            </form>
        </div>
    )
}
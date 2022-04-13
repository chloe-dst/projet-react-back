import React, {useEffect, useState} from "react";
import LoginForm from "./Component/LoginForm";
import AddElement from "./Component/AddElement";
import ListElements from "./Component/ListElements";

function App() {
    const [elements, setElements] = useState();

    useEffect(() => {
        fetch('http://localhost:2345/', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                setElements(data)
                console.log(data)
            })
    }, [])

    return (
        <>
            <LoginForm />
            <AddElement setElements={setElements}/>
            <h2>Tous les blogs</h2>
            <ListElements elements={elements}/>
        </>
    );
}

export default App;
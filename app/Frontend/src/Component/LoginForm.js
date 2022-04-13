import React from "react";

export default function LoginForm() {
    function handleChange(){
        return
    }

    function handleSubmit(e) {
        const body = new URLSearchParams({
            username: '',
            password: '',
        })

        const headers = new Headers({
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa('username:password')}`
        })

        fetch('http://localhost:2345/', {
            method: 'POST',
            body: body,
            headers: headers,
            mode: 'cors',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label> Username
                    <br></br>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                </label>
                <br></br>
                <label> Password
                    <br></br>
                    <input type="text" name="password" id="password" onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <button>Se connecter</button>
                <button>S'inscrire</button>
            </form>
        </div>
    )
}
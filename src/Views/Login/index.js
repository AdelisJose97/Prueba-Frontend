import React, { useState } from 'react'

import { useHistory } from "react-router-dom";

import './index.css'

const Login = () => {
    let history = useHistory();

    const [user, setuser] = useState({
        nombre: '',
        contrasena: ''
    })

    const handleChange = event => {
        setuser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('nombre', user.nombre)
        localStorage.setItem('contrasena', user.contrasena)
        history.push("/tasks")
    }
    return (
        <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input onChange={handleChange} type="text" name="nombre" placeholder="Nombre" />
                    <input onChange={handleChange} type="password" name="contrasena" placeholder="Contrasena" />
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        </div>

    )
}


export default Login


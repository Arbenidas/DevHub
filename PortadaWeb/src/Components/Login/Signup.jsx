import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react';
import axios  from 'axios';

const Signup = () => {

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const handleSubmit=() =>{
        if (username.length === 0 || password.length === 0) {
            alert('Ingrese un nombre de usuario y contraseña');
        } else {
            const url = "http://localhost/register.php";
            let fData = new FormData();
            fData.append('username', username);
            fData.append('password', password);
            axios.post(url, fData)
                .then(response => {
                    if (response.data.success) {
                        // Si el inicio de sesión es exitoso, redirige a la página deseada
                        alert("Funcionó");
                        window.location.href = '../../';
                      
                    } else {
                        alert(response.data.message);
                        alert("no Funcionó");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error de conexión.');
                });
        }
    }

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
        <div className='form-container p-5 rounded bg-white'>
        <form>
            <h3 class="text-center">Registrarse</h3>
            <div class="mb-2">
                <label htmlFor="fname">Nombres</label>
                <input type="email" placeholder='Introducir Nombres' className='form-control' onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div class="mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' className='form-control'/>
            </div>
            <div class="mb-2">
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
            </div>
            <div className='d-grid'>
            <input type="button" className='btn w-100' id="submit" onClick={handleSubmit} value={"Registrarse"} />

            </div>
            <p className='d-grid mt-2'>
                ¿Ya estas registrado? <Link to="/signin" class="ms-2">Iniciar Sesión</Link>
            </p>


        </form>
        </div>

    </div>
    
  )
}

export default Signup
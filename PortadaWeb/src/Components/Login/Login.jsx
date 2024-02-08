import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios  from 'axios';

const Login = () => {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');

    const handleSubmit=() =>{
        if (username.length === 0 || password.length === 0) {
            alert('Ingrese un nombre de usuario y contraseña');
        } else {
            const url = "http://localhost/enquiry.php";
            let fData = new FormData();
            fData.append('username', username);
            fData.append('password', password);
            axios.post(url, fData)
                .then(response => {
                    if (response.data.success) {
                        // Si el inicio de sesión es exitoso, redirige a la página deseada
                        window.location.href = '../../';
                      
                    } else {
                        alert(response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error de conexión.');
                });
        }
    }

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
        <div className='form-container p-5 rounded bg-white'>
        <form>
            <h3 class="text-center">Iniciar Sesión</h3>
            <div class="mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control' required/>
            </div>
            <div class="mb-2">
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder='Contraseña' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' required/>
            </div>
            <div>
                <input type="checkbox" className='custom-control custom.checkbox' id="check" />
                <label htmlFor="check" className='custom-input-label ms-2 mt-2'>
                    Recuerdame
                </label>
            </div>
            <div className='d-grid'>
                
                <input type="button" className='btn w-100' id="submit" onClick={handleSubmit} value={"Iniciar Sesión"} />
                

            </div>
            <p className='d-grid'>
                <Link to="/signup" class="ms-2 mt-2">Registrarse</Link>
            </p>


        </form>
        </div>

    </div>
  )
}

export default Login
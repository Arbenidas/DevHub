import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Signup = () => {
  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
        <div className='form-container p-5 rounded bg-white'>
        <form>
            <h3 class="text-center">Registrarse</h3>
            <div class="mb-2">
                <label htmlFor="fname">Nombres</label>
                <input type="email" placeholder='Introducir Nombres' className='form-control'/>
            </div>
            <div class="mb-2">
                <label htmlFor="lname">Apellidos</label>
                <input type="email" placeholder='Introducir Apellidos' className='form-control'/>
            </div>
            <div class="mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' className='form-control'/>
            </div>
            <div class="mb-2">
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder='Contraseña' className='form-control'/>
            </div>
            <div className='d-grid'>
                <Link to="/signin">
                <button className='btn w-100'>Registrarse</button>
                </Link>

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
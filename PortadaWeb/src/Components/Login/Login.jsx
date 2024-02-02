import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
        <div className='form-container p-5 rounded bg-white'>
        <form>
            <h3 class="text-center">Iniciar Sesión</h3>
            <div class="mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Email' className='form-control'/>
            </div>
            <div class="mb-2">
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder='Contraseña' className='form-control'/>
            </div>
            <div>
                <input type="checkbox" className='custom-control custom.checkbox' id="check" />
                <label htmlFor="check" className='custom-input-label ms-2 mt-2'>
                    Recuerdame
                </label>
            </div>
            <div className='d-grid'>
                <Link to="/carruseles" >
                <button className='btn w-100'>Iniciar Sesión</button>
                </Link>
                

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
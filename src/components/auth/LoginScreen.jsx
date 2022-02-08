import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

const [formLoginValues, handleLoginInputChanges] = useForm({
    lEmail: 'jamaro@hola.com',
    lPassword: '123456'
})

const [formRegisterValues, handleRegisterInputChanges] = useForm({
    rName: 'jesus',
    rEmail: 'jesus@jojo.com',
    rPassword: '123456',
    rPassword2: '123456'
})

const {lEmail, lPassword} = formLoginValues
const {rEmail, rName, rPassword, rPassword2} = formRegisterValues


const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLogin(lEmail, lPassword))
}

const handleRegister = (e) => {
    e.preventDefault()
    if (rPassword !== rPassword2) {
        return Swal.fire('las contrasenas deben ser iguales')
    }
    dispatch(startRegister(rEmail, rPassword, rName))
}

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                value={lEmail}
                                onChange={handleLoginInputChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={lPassword}
                                onChange={handleLoginInputChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={rName}
                                onChange={handleRegisterInputChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={rEmail}
                                onChange={handleRegisterInputChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={rPassword}
                                onChange={handleRegisterInputChanges} 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                value={rPassword2}
                                onChange={handleRegisterInputChanges}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
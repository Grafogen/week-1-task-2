import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

type FormRegisterTypes={
    username: string,
    password: string,
}

const Login: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin })  => {
    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:{username:"", password:""}});

    const onSubmit=(data:FormRegisterTypes)=>{
        localStorage.setItem('username', data.username);
        localStorage.setItem('password', data.password);
        onLogin(data.username, data.password)
    }

    return (
        <div className="login-form">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input {...register("username", {required: "username is too short"})} placeholder="Username"/>
                    <p style={{color:'#cd0909'}}>{errors.username?.message}</p>
                </div>
                <div className="form-group">
                    <input{...register("password", {required: "password is not valid", minLength:{
                        value:8,
                            message:'must be at least 8 characters long'
                        }, })}
                          placeholder="Password"/>
                    <p style={{color:'#cd0909'}}>{errors.password?.message}</p>
                </div>
                <button type="submit" className="login-button">
                   Войти
                </button>
                <p className="register-link">
                    Нет аккаунта? <NavLink to="/register">Зарегистрируйтесь</NavLink>
                </p>
            </form>
        </div>
    );
};

export default Login;
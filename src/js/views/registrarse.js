import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Registrarse = props => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [nombreDeUsuario, setNombreDeUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [dni, setDNI] = useState("");


    function postCrearUsuario (e) {
        e.preventDefault();
        actions.postSignup(nombre, apellido, nombreDeUsuario,contraseña, email, edad, dni)
        navigate("/")
    }




    return (
        <div className="container">
            <form onSubmit={postCrearUsuario}>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"  onChange={event => setNombre(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Apellido</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"  onChange={event => setApellido(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Nombre de Usuario</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control"  onChange={event => setNombreDeUsuario(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" onChange={event => setContraseña(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" onChange={event => setEmail(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Edad</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={event => setEdad(event.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">DNI</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" onChange={event => setDNI(event.target.value)}/>
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-success mb-3">Registarse</button>
            </div>
            </form>
        </div>
    );
};

Registrarse.propTypes = {
    match: PropTypes.object
};

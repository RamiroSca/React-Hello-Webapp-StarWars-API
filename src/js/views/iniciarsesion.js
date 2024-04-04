import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Iniciar_sesion = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

    function post_iniciar_sesion(e) {
        e.preventDefault();
        actions.postLogin(email,contraseña)
        console.log(email);
        console.log(contraseña);
        setEmail("")
        setContraseña("")
    }

    return (
        <div className="jumbotron">
            <form onSubmit={post_iniciar_sesion}>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" onChange={event => setEmail(event.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" onChange={event => setContraseña(event.target.value)}/>
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Iniciar Sesion</button>
            </div>
            </form>
        </div>
    );
};

Iniciar_sesion.propTypes = {
    match: PropTypes.object
};

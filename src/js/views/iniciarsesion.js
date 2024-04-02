import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Iniciar_sesion = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    return (
        <div className="jumbotron">
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Iniciar Sesion</button>
            </div>
        </div>
    );
};

Iniciar_sesion.propTypes = {
    match: PropTypes.object
};

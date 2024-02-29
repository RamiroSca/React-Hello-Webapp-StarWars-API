import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams()
	const direcProp = store.masInfo.properties


	// function categorias() {
	// 	if (params.categorias=="planet") {
	// 		
	// 	} else if (params.categorias=="people"){
	// 		
	// 	} else {
	// 		
	// 	}
	// }


	useEffect(() => {
		actions.getMasInfo(params.categorias, params.uid)
	})
	// console.log(store.masInfo);
	return (
		<div className="container ">
			{/* <h1>{direcProp?.height}</h1> */}
			<div className="ROW d-flex justify-content-between mb-5">
				<div>
					<img src="https://depor.com/resizer/t_XnEOGRLM91FlZa7TitLM4sdPs=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HKYWPKEQBJB6NMXZ2M372JK7PA.jpg" />
				</div>
				<div className="text-center">
					<h1>{direcProp?.name}</h1>
					<p>{store.masInfo.description}</p>
				</div>
			</div>
			<div className="ROW d-flex justify-content-between mb-5">
				<div>
					<h6>Name</h6>
					<p>{direcProp?.name}</p>
				</div>
				<div>
					<h6>Birth Year</h6>
					<p>{direcProp?.birth_year}</p>
				</div>
				<div>
					<h6>Gender</h6>
					<p>{direcProp?.gender}</p>
				</div>
				<div>
					<h6>Heigth</h6>
					<p>{direcProp?.height}</p>
				</div>
				<div>
					<h6>Skin Color</h6>
					<p>{direcProp?.skin_color}</p>
				</div>
				<div>
					<h6>Eye Color</h6>
					<p>{direcProp?.eye_color}</p>
				</div>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

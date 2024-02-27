import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"
import { Card } from "../component/Card";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = function () {
	const { store, actions } = useContext(Context)
	// const [card, setCard] = useState([])


	useEffect(() => {
		actions.getPersonajes()
		actions.getPlanetas()
		actions.getVehiculos()
		
	}, [])

	return (<div className="text-center mt-5">
		<div className="container" data-bs-spy="scroll">
			<div className="row justify-content-center" data-bs-spy="scroll" style={{flexWrap: "nowrap"}}>
			{store.personajes.map((item)=><Card key={item.uid} uid={item.uid} name={item.name}/>)}
			</div>
		</div>
		<div>
			<ul>
				{store.planetas.map((item) => <li key={item.uid}>{item.name}</li>)}
			</ul>
		</div>
		<div>
			<ul>
				{store.vehiculos.map((item) => <li key={item.uid}>{item.name}</li>)}
			</ul>
		</div>
	</div>
	)
};

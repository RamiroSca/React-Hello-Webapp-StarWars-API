import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const [background, setbackground] = useState("")
    const { store, actions } = useContext(Context)



    function favoritos() {
        if (background == "bg-danger text-white") {
            setbackground("")
            //llamar a la funcion removeFav
            actions.removeFav(props.uid)
        } else {
            setbackground("bg-danger text-white")
            //llamar a la funcion addFav
            actions.addFav(props.name, props.uid)
        }

        // for (let index = 0; index < store.favoritos.length; index++) {
        //     const favoritosIndividual = store.favoritos[index];
        //     if (favoritosIndividual.uip == props.uip) {
        //         console.log(favoritosIndividual);
        //         setbackground("bg-danger text-white")
        //     } else {
        //         console.log(favoritosIndividual);
        //         setbackground("")
        //     }
        // }
    }



    return (
        <div key={props.uid} className="card  p-1" style={{ width: "18rem" }}>
            <img src="https://depor.com/resizer/t_XnEOGRLM91FlZa7TitLM4sdPs=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HKYWPKEQBJB6NMXZ2M372JK7PA.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/demo/${props.categoria}/${props.uid}`}>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </Link>
                    <button class={"btn btn-outline-danger " + background} onClick={favoritos}>♡</button>
                </div>
            </div>
        </div>
    );
};
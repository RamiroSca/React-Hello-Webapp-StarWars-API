const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes:[],
			planetas:[],
			vehiculos:[],
			favoritos:[],
			// background:""
		},
		actions: {
			getPersonajes: function () {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data =>{
						console.log(data);
						setStore({personajes:data.results})
					})
					.catch(err => console.error(err))
			},
			getPlanetas: function () {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then((data)=>{
						console.log(data);
						setStore({planetas:data.results})
						})
					.catch(err => console.error(err))
			},
			getVehiculos: function () {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data =>{
						console.log(data);
						setStore({vehiculos:data.results})
					})
					.catch(err => console.error(err))
			},
			addFav: function (name,uid,background) {
				let listadeFav = getStore().favoritos;
				let nuevoFav = {
					name: name,
					uid: uid
				}
				let nuevaListaDeFav = listadeFav.concat(nuevoFav) 
				setStore({favoritos : nuevaListaDeFav})
			},
			removeFav: function (uid) {
				let listadeFav = getStore().favoritos;
				let nuevaListaDeFav = listadeFav.filter((item)=> uid !== item.uid )
				setStore({favoritos : nuevaListaDeFav})
			}
		}
	};
};

export default getState;

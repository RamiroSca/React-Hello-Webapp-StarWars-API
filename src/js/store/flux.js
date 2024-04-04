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
			personajes: [],
			planetas: [],
			vehiculos: [],
			masInfo: [],
			favoritos: [],
			background: "",
			validacion: false
		},
		actions: {
			getPersonajes: function () {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ personajes: data.results })
					})
					.catch(err => console.error(err))
			},
			getPlanetas: function () {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then((data) => {
						console.log(data);
						setStore({ planetas: data.results })
					})
					.catch(err => console.error(err))
			},
			getVehiculos: function () {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ vehiculos: data.results })
					})
					.catch(err => console.error(err))
			},
			getMasInfo: function (categorias, uid) {
				fetch(`https://www.swapi.tech/api/${categorias}/${uid}`)
					.then(res => res.json())
					.then(data => {
						// console.log(data);
						setStore({ masInfo: data.result })
					})
					.catch(err => console.error(err))
			},
			addFav: function (name) {
				let listadeFav = getStore().favoritos;
				let nuevoFav = name
				let nuevaListaDeFav = listadeFav.concat(nuevoFav)
				setStore({ favoritos: nuevaListaDeFav })
			},
			removeFav: function (name) {
				let listadeFav = getStore().favoritos;
				let nuevaListaDeFav = listadeFav.filter((item) => name !== item)
				setStore({ favoritos: nuevaListaDeFav })
			},
			favoritos: function (name) {
				let favNames = getStore().favoritos

				if (getStore().favoritos.length == 0) {
					getActions().addFav(name)
				} else {
					if (favNames.includes(name)) {
						getActions().removeFav(name)
					} else {
						getActions().addFav(name)
					}
				}

			},
			postLogin: function (nombreDeUsuario, contraseña) {
				console.log(nombreDeUsuario, contraseña);
				fetch(`https://humble-space-orbit-4jjwqw7xr9w4f7j6w-3000.app.github.dev/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"nombre_de_usuario": nombreDeUsuario,
						"contraseña": contraseña
					})
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("access_token", data.access_token);
						setStore({ validacion: true })
					})
					.catch(err => console.error(err))
			},
			postSignup: function (nombre, apellido, nombreDeUsuario, contraseña, email, edad, dni) {
				console.log(nombre, apellido, nombreDeUsuario, contraseña, email, edad, dni);
				fetch(`https://humble-space-orbit-4jjwqw7xr9w4f7j6w-3000.app.github.dev/signup`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"nombre": nombre,
						"apellido": apellido,
						"nombre_de_usuario": nombreDeUsuario,
						"contraseña": contraseña,
						"email": email,
						"edad": edad,
						"DNI": dni
					})
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						localStorage.setItem("access_token", data.access_token);
						setStore({ validacion: true })
					})
					.catch(err => console.error(err))
			},
			validToken: function () {
				fetch(`https://humble-space-orbit-4jjwqw7xr9w4f7j6w-3000.app.github.dev/valid-token`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + localStorage.getItem("access_token")
					}
				})
					.then(res => {
						res.json()
						if (res.status == 200) { setStore({ validacion: true }) };
					})
					.then(data => {
						console.log(data);
					})
					.catch(err => console.error(err))
			},
			allFavoritosUsuario: function (usuarioID) {
				console.log(usuarioID);
				fetch(`https://humble-space-orbit-4jjwqw7xr9w4f7j6w-3000.app.github.dev/usuario/favoritos/`+usuarioID)
					.then(res => res.json())
					.then(data => {
						console.log(data);
					})
					.catch(err => console.error(err))
			},
			addFavoritos: function (personasID, planetasID, vehiculosID, usuarioID) {
				console.log(personasID, planetasID, vehiculosID, usuarioID);
				fetch(`https://humble-space-orbit-4jjwqw7xr9w4f7j6w-3000.app.github.dev/usuario/favoritos`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"personas_id": personasID,
						"planetas_id": planetasID,
						"vehiculos_id": vehiculosID,
						"usuario_id": usuarioID
					})
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
					})
					.catch(err => console.error(err))
			}

		}
	};
};

export default getState;

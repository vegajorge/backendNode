document.addEventListener("DOMContentLoaded",() =>{

    const bodyTablaArticulos = document.querySelector("#body-tabla-articulo")
    const formCrearArticulos = document.querySelector("#form-crear-articulo")


    const fetchArticulos = async ()=>{
        try {
            const respuesta = await axios.get (`http://localhost:3030/articulos`)
            console.log(respuesta.data);
            const articulos = respuesta.data

            //limpiar tabla
            bodyTablaArticulos.innerHTML = "" 

            articulos.forEach(articulo =>{
                const fila = document.createElement("tr")
                const celdaTitulo = document.createElement("td")
                const celdaDescripcion = document.createElement("td")
                const celdaValor = document.createElement("td")
                const celdaAcciones = document.createElement("td")

                celdaTitulo.textContent = articulo.titulo
                celdaDescripcion.textContent = articulo.descripcion
                celdaValor.textContent = articulo.valor
            
                const botonEliminar = document.createElement("button")
                botonEliminar.textContent = "Eliminar"
                botonEliminar.addEventListener("click", ()=>{
                    borrarArticulo(articulo.id)
                })

                const botonEditar = document.createElement("button")
                botonEditar.textContent = "Editar"
                botonEditar.addEventListener("click",()=>{
                    window.location.href = `edit.html?id=${articulo.id}`
            })

            celdaAcciones.appendChild(botonEliminar)
            celdaAcciones.appendChild(botonEditar)

            fila.appendChild(celdaTitulo)
            fila.appendChild(celdaDescripcion)
            fila.appendChild(celdaValor)
            fila.appendChild(celdaAcciones)

            bodyTablaArticulos.appendChild(fila)
        })

        } catch (error) {
            console.error("error para cargar articulos:",error);
            
        }
    }


    const borrarArticulo = async (id) => {
        try {
            await axios.delete (`http://localhost:3030/articulos/${id}`);
            fetchArticulos()
        } catch (error) {
            console.error("error para borrar un articulo:",error)
            
        }
        }
        formCrearArticulos.addEventListener("submit", async function (evento) {
            evento.preventDefault();

            const nuevoArticulos ={
                titulo: document.querySelector("#nuevo-titulo").value,
                descripcion: document.querySelector("#nueva-descripcion").value,
                valor: document.querySelector("#nuevo-valor").value,
            };
            try {
                await axios.post(`http://localhost:3030/articulos/`,nuevoArticulos)
                formCrearArticulos.reset()
                fetchArticulos()

            } catch (error) {
                console.error("error para crear un articulo:",error)
            }
        })


    fetchArticulos()
})


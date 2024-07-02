document.addEventListener("DOMContentLoaded", ()=>{
    const formulario = document.querySelector("#form-editar-articulo")

    const ParametrosURL = new URLSearchParams(window.location.search)
    const IdArticulo = ParametrosURL.get ("id")

    const fecthArticulo = async (id) => {
    try {
        const respuesta = await axios.get (`http://localhost:3030/articulos/${id}`);
        const articulo = respuesta.data
        document.querySelector("#nuevo-titulo").value = articulo.titulo
        document.querySelector("#nueva-descripcion").value = articulo.descripcion
        document.querySelector("#nuevo-valor").value = articulo.valor
  
    } catch (error) {
        console.error("error para editar un articulo:",error)
    }
    }
    if (IdArticulo)
        fecthArticulo(IdArticulo)


    formulario.addEventListener("submit",async function (event){
        event.preventDefault()
        const articuloActualizado = {
            titulo: document.querySelector("#nuevo-titulo").value,
            descripcion: document.querySelector("#nueva-descripcion").value,
            valor: document.querySelector("#nuevo-valor").value
        }
        
        try {
            await axios.put(`http://localhost:3030/articulos/${IdArticulo}`,articuloActualizado)
            alert ("Articulo Actualizado correctamente")
            window.location.href="index.html"
        } catch (error) {
            console.error('Error al actualizar el Articulo:', error);
        }
         })  
        })
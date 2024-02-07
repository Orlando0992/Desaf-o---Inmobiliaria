/*Llamada de mi script */
import propiedadesAlquiler from "./data/propiedades_alquiler.js"

/*Creacion de funcion para encontrar elemento a traves de un ID 
y se almacena en constante para su posterior manipulacion */
const rellenandoCarta = (propiedad, contenidoId)=>{
const contenedor = document.querySelector(contenidoId)


/*Creacion de buble for or para para poder iterar sobre arregle propiedad */
for (const item of propiedad) {
    const cartaCompleta = `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src=${item.src}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${item.titulo}
        </h5>
        <p class="card-text">
          ${item.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${item.direccion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${item.habitaciones} |
          <i class="fas fa-bath"></i> ${item.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${item.costo.toLocaleString("CLP")} </p>
        <p class="${item.fumar ? "text-success":"text-danger"}">
          <i class="${item.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${item.fumar ? "Permitido fumar" : "No se permite fumar"}
        </p>
        <p class="${item.mascota ? "text-success" : "text-danger"}">
          <i class="${item.mascota ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${item.mascota ? "Mascotas permitidas" : "No se permiten mascotas"}
        </p>
      </div>
    </div>
  </div>
  `;
    contenedor.innerHTML += cartaCompleta
  }
}

rellenandoCarta(propiedadesAlquiler, "#alquilando")
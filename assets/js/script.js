/*Llamada de mi script propiedades_venta*/
import propiedadesVenta from "./data/propiedades_venta.js";

/*Llamada de mi script propiedades_alquiler*/
import propiedadesAlquiler from "./data/propiedades_alquiler.js"

/*Creacion de funcion  que me permite mostrar los datos en la pantalla */
const rellenandoCarta = (propiedad, id)=>{
const contenedor = document.querySelector(id)

/*Creacion de bucle for or que itera sobre los tres primeros elementos del array
propiedad en lugar de iterar sobre todos los elementos.Gracias al metodo splice */
for (const item of propiedad.slice(0,3)) {
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

/*Llama de funcion para cada HTML segun indicador ID */
rellenandoCarta(propiedadesVenta, "#vendiendo")
rellenandoCarta(propiedadesAlquiler, "#alquilando")

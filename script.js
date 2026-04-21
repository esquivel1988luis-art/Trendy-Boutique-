function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push({ nombre, precio });

  localStorage.setItem("carrito", JSON.stringify(carrito));

  alert(nombre + " agregado al carrito");
}

function mostrarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let contenedor = document.getElementById("carrito");

  let total = 0;
  contenedor.innerHTML = "";

  carrito.forEach(item => {
    total += item.precio;

    contenedor.innerHTML += `
      <p>${item.nombre} - $${item.precio}</p>
    `;
  });

  contenedor.innerHTML += `<h3>Total: $${total}</h3>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Laptop Gamer", precio: "$1200", imagen: "/assets/laptop.jpg" },
        { nombre: "Smartphone", precio: "$800", imagen: "/assets/smartphone.jpg" },
        { nombre: "Monitor 4K", precio: "$500", imagen: "/assets/monitor.jpg" }
    ];
    
    const listaProductos = document.querySelector(".lista-productos");

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
        `;
        listaProductos.appendChild(div);
    });
});
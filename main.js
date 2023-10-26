
// Clase Producto
class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

// Clase CarritoDeCompra
class CarritoDeCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, cantidad) {
        const productoExistente = this.productos.find(p => p.producto.nombre === producto.nombre);
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            this.productos.push({ producto, cantidad });
        }
    }

    calcularTotal() {
        return this.productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
    }
}

// ...

/// Evento para agregar productos al carrito
const botonesAgregarAlCarrito = document.querySelectorAll('.bg-blue-500');
const carrito = new CarritoDeCompra();

botonesAgregarAlCarrito.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        const producto = new Producto(`Producto ${index + 1}`, `Descripción del Producto ${index + 1}`, 50.0);
        carrito.agregarProducto(producto, 1); // Agrega 1 unidad del producto

        // Actualizar la lista del carrito y calcular el total
        const listaCarrito = document.getElementById('carrito');
        listaCarrito.innerHTML = ''; // Limpiar la lista antes de agregar los elementos actualizados

        let total = 0; // Inicializar el total en 0

        carrito.productos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.producto.nombre} - Cantidad: ${item.cantidad} - $${item.producto.precio * item.cantidad}`;
            listaCarrito.appendChild(li);

            // Sumar al total
            total += item.producto.precio * item.cantidad;
        });

        // Mostrar el total
        const totalElement = document.createElement('li');
        totalElement.textContent = `Total: $${total}`;
        listaCarrito.appendChild(totalElement);
    });
});


// ...


//Trabajar mañana jueves!

    class RopaSection {
        constructor(id) {
            this.id = id;
            this.tabButton = document.getElementById(`${id}-tab`);
            this.content = document.getElementById(`${id}-content`);
            this.tabButton.addEventListener("click", () => this.showContent());
        }
    
        showContent() {
            this.tabButton.classList.add("active");
            if (this.id === "mujeres") {
                hombresSection.hideContent();
            } else if (this.id === "hombres") {
                mujeresSection.hideContent();
            }
            this.content.classList.remove("hidden");
        }
    
        hideContent() {
            this.tabButton.classList.remove("active");
            this.content.classList.add("hidden");
        }
    }
    
    const mujeresSection = new RopaSection("mujeres");
    const hombresSection = new RopaSection("hombres");
    

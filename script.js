const productos = [
  { id: 1, nombre: "Reloj My Melody Rosa", precio: 850, img: "https://cdn.pixabay.com/photo/2020/04/17/17/31/watch-5051734_1280.jpg" },
  { id: 2, nombre: "Reloj Cinnamoroll Azul", precio: 900, img: "https://cdn.pixabay.com/photo/2016/11/29/05/08/watch-1869928_1280.jpg" },
  { id: 3, nombre: "Reloj Sanrio Premium", precio: 1200, img: "https://cdn.pixabay.com/photo/2015/08/05/16/56/watch-876327_1280.jpg" },
  { id: 4, nombre: "Reloj Corazón Brillante", precio: 1000, img: "https://cdn.pixabay.com/photo/2015/02/10/21/28/watch-631562_1280.jpg" }
];

const lista = document.getElementById("product-list");
productos.forEach(prod => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${prod.img}" alt="${prod.nombre}">
    <h4>${prod.nombre}</h4>
    <p>$${prod.precio} MXN</p>
    <button onclick="addToCart(${prod.id})">Agregar 💕</button>
  `;
  lista.appendChild(card);
});

let carrito = [];

function addToCart(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cart-items");
  items.innerHTML = "";
  let total = 0;
  carrito.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${p.nombre} - $${p.precio} <button onclick="removeFromCart(${i})">❌</button>`;
    items.appendChild(li);
    total += p.precio;
  });
  document.getElementById("cart-total").textContent = total;
}

function removeFromCart(i) {
  carrito.splice(i, 1);
  renderCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (carrito.length === 0) alert("Tu carrito está vacío 💔");
  else {
    alert("Gracias por tu compra, linda 💖✨");
    carrito = [];
    renderCart();
  }
});

function login() {
  const user = document.getElementById("login-user").value;
  const pass = document.getElementById("login-pass").value;
  if (user && pass) alert(`Bienvenida, ${user} 🌷`);
  else alert("Completa tus datos 💕");
}

function register() {
  const user = document.getElementById("new-user").value;
  const pass = document.getElementById("new-pass").value;
  if (user && pass) alert(`Cuenta creada, ${user} 💫`);
  else alert("Falta rellenar tus datos 🌸");
}


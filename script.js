<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tienda de Relojes de Lujo 🕰️✨</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/763/763704.png" />
</head>
<body>

  <header class="site-header">
    <div class="brand">
      <h1>My Melody & Cinnamoroll Watches 💖</h1>
      <p class="tagline">Relojes lindos, elegantes y con estilo pastel 🌸</p>
    </div>

    <nav>
      <ul class="nav-list">
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#carrito">Carrito 🛍️</a></li>
        <li><a href="#cuenta">Cuenta</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="catalogo" class="panel">
      <h2>⌚ Catálogo de Relojes</h2>
      <div class="grid" id="product-list"></div>
    </section>

    <section id="carrito" class="panel">
      <h2>🛒 Tu Carrito</h2>
      <ul id="cart-items"></ul>
      <p><strong>Total:</strong> $<span id="cart-total">0</span> MXN</p>
      <button id="checkout-btn">Finalizar compra 💕</button>
    </section>

    <section id="cuenta" class="panel">
      <h2>👤 Mi Cuenta</h2>
      <div class="auth-wrap">
        <div class="auth-box">
          <h3>Iniciar Sesión</h3>
          <input type="text" id="login-user" placeholder="Usuario" />
          <input type="password" id="login-pass" placeholder="Contraseña" />
          <button onclick="login()">Entrar</button>
        </div>

        <div class="auth-box">
          <h3>Crear Cuenta</h3>
          <input type="text" id="new-user" placeholder="Nuevo usuario" />
          <input type="password" id="new-pass" placeholder="Contraseña" />
          <button onclick="register()">Registrar</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>🌸 Tienda de relojes de lujo estilo Sanrio — hecho con amor 💖</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>

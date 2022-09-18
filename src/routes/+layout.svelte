<script>
  import "../app.css";
  let currentYear = new Date().getFullYear();
</script>

<header class="kt-header">
  <div class="container">
    <h1>kawumtech.de</h1>
    <p>v6</p>
  </div>
</header>

<nav class="main-nav">
  <div class="container">
    <ul>
      <li class="active"><a href="/">Start</a></li>
      <li><a href="/">Lorem</a></li>
      <li><a href="/">Ipsum</a></li>
    </ul>
  </div>
</nav>

<main>
  <div class="container">
    <slot />
  </div>
</main>

<footer>
  <div class="container">
    <small>&#xA9; kawumtech.de {currentYear}</small>
  </div>
</footer>

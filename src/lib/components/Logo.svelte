<script>
  // Componente de Logo para YindriNail's

  let Salondata  = 
    $state(
      {
        name: "YindriNail's",
        tagline: "Arte y elegancia en cada detalle"
      });
</script>

<!-- Sección Central del Logo -->
<section class="logo-hero-container mt-0 pt-0 ">
  
  <!-- Contenedor Exterior (Elevado) -->
  <div class="logo-outer-card ">
    
    <!-- Contenedor Interior (Hundido/Rehundido) -->
    <div class="logo-inner-well ">
      <!-- Logo Transparente de YindriNail's -->
      <img 
        src="https://j8qyoqy8qxdxv3pf.public.blob.vercel-storage.com/logo-yindrinails.png" 
        alt="YindriNail's Logo" 
        class="logo-image" 
      />
    </div>

  </div>

  <!-- Textos debajo del logo -->
  <!--<div class="brand-text">
    <h1 class="brand-title">{Salondata.name}</h1>
    <p class="brand-tagline">{Salondata.tagline}</p>
  </div>
-->
</section>


<style>
  /* Estilos específicos para el componente Logo */

  .logo-hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .logo-outer-card {
    background: var(--bg-color);
    border-radius: 50%;
    padding: 20px;
    box-shadow: var(--nm-shadow-out);
  }

  .logo-inner-well {
    background: var(--bg-color);
    border-radius: 50%;
    padding: 15px;
    /* box-shadow: var(--nm-shadow-inset); */
  }

  .logo-image {
    width: 150px;
    height: auto;
    display: block;
  }

  /* .brand-text {
    text-align: center;
    margin-top: 15px;
  } */

  /* /* .brand-title {
    font-size: 2rem;
    color: var(--text-dark);
    margin: 0;
  } */

  /* .brand-tagline {
    font-size: 1rem;
    color: var(--text-muted);
    margin: 5px 0 0 0;
  } */ 

  </style>
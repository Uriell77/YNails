<!-- Sección Showcase: Imagen Destacada -->
<section class="showcase-section mb-0 pb-0">
  
  <!-- Marco Neumórfico Rehundido -->
  <div class="showcase-frame">
    
    <!-- Contenedor de la Imagen -->
    <div class="image-wrapper">
      <img 
        src="/showcase.jpg" 
        alt="Trabajo reciente de manicura" 
        class="featured-image" 
      />
      
      <!-- Overlay sutil opcional para mejorar el contraste -->
      <div class="image-overlay"></div>
    </div>

  </div>

</section>


<style>
  /* Contenedor principal de la sección */
  .showcase-section {
    padding: 0 24px;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
  }

  /* El marco que crea el efecto de profundidad (Hundido) */
  .showcase-frame {
    background: #e0e5ec;
    border-radius: 35px;
    padding: 14px; /* Espacio del marco alrededor de la foto */
    /* Sombra interior para efecto de profundidad táctil */
    box-shadow: inset 8px 8px 16px #bebebe, 
                inset -8px -8px 16px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Contenedor que recorta la imagen con bordes redondeados */
  .image-wrapper {
    position: relative;
    width: 100%;
    border-radius: 25px;
    overflow: hidden; /* Importante para que la imagen no se salga del radio */
    line-height: 0; /* Elimina espacio extra debajo de la imagen */
  }

  /* Estilo de la imagen */
  .featured-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* Suaviza un poco la imagen para que encaje con el estilo neumórfico */
    filter: saturate(1.1) brightness(1.02);
  }

  /* Overlay para dar un acabado más premium (Opcional) */
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(100,115,135,0.1) 100%);
    pointer-events: none;
  }



  /* @media (min-width: 768px) {
    .showcase-section {
      padding: 0 48px;
      width: 70%;
    }
  } */
</style>

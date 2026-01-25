<script>

  import { blur } from 'svelte/transition';

  let { data } = $props();

  // Crear array de URLs desde data.imagenes
  // @ts-ignore
  let images = $state(data.imagenes.map(element => element.url));



// 1. Definimos el array del 1 al 9
  const elementos = [1, 2, 3, 4, 5, 6, 7, 8];

  // 2. Variable reactiva para el índice (empieza en 0)
  let index = $state(0);

  // 3. Usamos $effect para manejar el intervalo
  $effect(() => {
    const intervalo = setInterval(() => {
      // Lógica cíclica: (0 + 1) % 9 = 1 ... (8 + 1) % 9 = 0
      index = (index + 1) % elementos.length;
    }, 4000); // 2000 ms = 2 segundos

    // IMPORTANTE: Función de limpieza
    // Esto detiene el reloj si el componente se destruye
    return () => clearInterval(intervalo);
  });

</script>
<!-- Sección Showcase: Imagen Destacada -->
<section class="showcase-section mb-0 pb-0">
  
  <!-- Marco Neumórfico Rehundido -->
  <div class="showcase-frame">
    
    <!-- Contenedor de la Imagen -->
    <div class="image-wrapper"   >
      {#key index}
      {#await index}
      
        Cargando...
        
      {:then index} 
        
      <img 
        src="{images[index]}" 
        alt="Trabajo reciente de manicura" 
        class="featured-image" 
        loading="lazy"
        in:blur={{ amount: 10, duration: 800 }}
      />
      {/await}
      {/key}
      
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
    padding: 3px; /* Espacio del marco alrededor de la foto */
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
    height:420px;
    border-radius: 25px;
    overflow: hidden; /* Importante para que la imagen no se salga del radio */
    line-height: 0; /* Elimina espacio extra debajo de la imagen */
  }

  /* Estilo de la imagen */
  .featured-image {
    width: 100%;
    height: 420px;
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

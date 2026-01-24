<script>

  import { page } from '$app/state';

  // "page" es un objeto de estado reactivo global
  // No necesitas $ ni suscripciones
  let urlActual = page.url; 
  let ruta = page.url.pathname;
  let parametro = page.url.searchParams.get('id');

</script>

    <!-- Navbar Superior Neumórfico -->
<header class="top-nav-container is-flex is-justify-content-space-between is-align-items-center p-3 mb-4">
  <button class="nm-icon-btn" aria-label="Abrir Menú">
    {#if ruta =="/log"}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <a href="/" class="nm-icon-btn">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <line x1="2" y1="10" x2="21" y2="3"></line>
      <line x1="2" y1="11" x2="21" y2="20"></line>
    </svg> 
    </a>

    {:else}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
    {/if}
  </button>

  <!-- Botón de Perfil (Derecha) -->
    
  <button class=" nm-icon-btn is-pulled-right {ruta == "/log" ? "is-static":""}" aria-label="Ver Perfil"  >
   {#if ruta =="/log"}
   <div class="is-hidden"></div>
   {:else}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
   {/if}
  </button>

</header>




<style>
  .is-static{
    pointer-events: none;
    opacity: 0.5;
  }
</style>
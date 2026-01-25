<script>
  // 1. Recibimos los datos del servidor
  let { data } = $props();
  
  // data.imagenes viene del return del archivo +page.server.js
  let descripcion = "Galería de trabajos recientes de Yindri's Nails Studio";
  let leyenda = [
    "Uñas acrílicas con diseño floral",
    "Manicura francesa elegante",
    "Uñas gel con efecto ombré",
    "Diseño artístico en uñas cortas",
    "Uñas decoradas para ocasiones especiales",
    "Manicura con detalles en dorado",
    "Uñas largas con diseño geométrico",
  ];

/* Svelte 5 - Lógica de la Galería */
	let searchQuery = $state("");
	let selectedCategory = $state("Todos");

	const categories = ["Todos", "Minimalista", "Set Completo", "Nail Art"];

	// Función para cambiar categoría
	function setCategory(category) {
		selectedCategory = category;
	}

</script>

<div class="p-8">
  <div class="columns is-centered is-multiline is-vcentered">
    <div class="column is-full-mobile is-half-desktop is-half-tablet">





<div class="gallery-page">
	<!-- Barra Superior: Botones de Navegación y Título -->
	<header class="top-nav">
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<h1 class="page-title">Galería YindriNails</h1>

		<button class="nm-btn-circle">
			<div class="notification-dot"></div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		</button>
	</header>

	<!-- Barra de Búsqueda Neumórfica -->
	<section class="search-section">
		<div class="search-wrapper nm-inset">
			<svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#647387" stroke-width="2.5">
				<circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
			</svg>
			<input 
				type="text" 
				placeholder="Buscar estilos..." 
				bind:value={searchQuery}
				class="search-input"
			/>
		</div>
	</section>

	<!-- Filtros de Categoría (Pestañas) -->
	<nav class="categories-nav">
		<div class="scroll-container">
			{#each categories as category}
				<button 
					class="category-tag {selectedCategory === category ? 'active nm-inset' : 'nm-card'}"
					onclick={() => setCategory(category)}
				>
					{#if selectedCategory === category}
						<svg class="check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
							<polyline points="20 6 9 17 4 12" />
						</svg>
					{/if}
					{category}
				</button>
			{/each}
		</div>
	</nav>
      



  {#if data.imagenes.length === 0}
    <p>No hay imágenes en el storage todavía.</p>
  {:else}
    <div class="columns is-multiline  is-mobile">
      {#each data.imagenes as imagen,index}
      {#if index == 7}
      <div class="is-hidden"></div>
       {:else} 
      <div class="column is-half-mobile is-one-quarter-tablet is-one-quarter-desktop mb-4">

        <div class="card">
          
          <img 
            src={imagen.url} 
            alt={imagen.pathname}
            class="w-full h-48 object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
         

          <div class="p-4 bg-white block">
            <p class="is-size-7 text-gray-600 truncate has-text-weight-semibold " >
              {leyenda[index]}</p>
            <!-- <a 
              href={imagen.downloadUrl} 
              class="text-xs text-pink-500 hover:underline"
              download
            >
              Descargar
            </a> -->
          </div>
        </div>
      </div>
        <div class="border rounded-lg overflow-hidden shadow-lg card">
        </div>
        
      {/if}
      {/each}
    </div>
  {/if}
    </div>
  </div>
</div>
</div>


<style>
	/* Contenedor principal de la tarjeta */


  .card{
    background: var(--nm-shadow-out) !important;
    transition: transform 0.3s ease;
  }
	.card:hover {
		transform: translateY(-5px);
	}

  img{
    border-radius: 10px;
    width: 200px;
    height: 200px;
  }



	:global(body) {
		background-color: #e0e5ec;
		margin: 0;
		font-family: 'Inter', sans-serif;
	}

	.gallery-page {
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	/* --- Navegación Superior --- */
	.top-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}

	.page-title {
		color: #647387;
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0;
	}

	.nm-btn-circle {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		border: none;
		background: #e0e5ec;
		box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
		color: #647387;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		position: relative;
	}

	.notification-dot {
		position: absolute;
		top: 12px;
		right: 12px;
		width: 8px;
		height: 8px;
		background-color: #ff4d4d;
		border-radius: 50%;
		border: 2px solid #e0e5ec;
		z-index: 1;
	}

	/* --- Barra de Búsqueda --- */
	.search-section {
		padding: 0 20px;
	}

	.search-wrapper {
		display: flex;
		align-items: center;
		padding: 0 18px;
		height: 55px;
		border-radius: 20px;
		gap: 12px;
	}

	.nm-inset {
		box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
	}

	.search-input {
		background: transparent;
		border: none;
		flex: 1;
		color: #647387;
		font-size: 1rem;
		outline: none;
	}

	.search-input::placeholder {
		color: #a0aec0;
	}

	/* --- Filtros de Categoría --- */
	.categories-nav {
		width: 100%;
		overflow-x: auto;
		padding: 5px 0 10px 0;
		scrollbar-width: none; /* Firefox */
	}

	.categories-nav::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}

	.scroll-container {
		display: flex;
		gap: 15px;
		padding: 0 20px;
		width: max-content;
	}

	.category-tag {
		padding: 10px 20px;
		border-radius: 50px;
		border: none;
		font-size: 0.9rem;
		font-weight: 600;
		color: #718096;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.nm-card {
		background: #e0e5ec;
		box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff;
	}

	.category-tag.active {
		color: #647387;
	}

	.check-icon {
		color: #647387;
	}



	/* Wrapper para posicionar la imagen fuera del flujo normal */
</style>
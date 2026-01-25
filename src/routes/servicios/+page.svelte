<script>
  // 1. Recibimos los datos del servidor
  // data.imagenes viene del return del archivo +page.server.js
  let { data } = $props();
  
	let searchQuery = $state("");
</script>

<div class="p-8">



  <div class="columns is-centered is-multiline is-vcentered">
    <div class="column is-full-mobile is-half-desktop is-half-tablet">





	<header class="top-nav pt-4 mb-5 mt-3">
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<h1 class="page-title">Servicios YindriNails</h1>

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




  {#if data.imagenes.length === 0}
    <p>No hay imágenes en el storage todavía.</p>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each data.imagenes as imagen}


<article class="card">
	<!-- 
		Contenedor de la imagen. 
		Se posiciona absolutamente respecto al card para lograr el efecto de "sobresalir".
	-->
	<div class="image-wrapper">
		<img src={imagen.url} alt={"nombre"} class="product-image" />
	</div>

	<div class="card-body">
		<!-- Bloque de precio destacado -->
		<div class="price-tag">
			<span class="currency">{"moneda"}</span>
			<span class="amount">{"10"}</span>
		</div>

		<!-- Información del producto -->
		<h2 class="title">{"nombre"}</h2>
		<p class="description">
			{"descripcion"}
		</p>

		<button class="add-btn">
			Agregar al carrito
		</button>
	</div>
</article>






      {/each}
    </div>
  {/if}
    </div>
  </div>
</div>






<style>



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




	:global(body) {
		background-color: #e0e5ec;
		margin: 0;
		font-family: 'Inter', sans-serif;
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





	/* Contenedor principal de la tarjeta */
	.card {
		background-color: var(--bg-color);
		border-radius: 20px;
		/* Sombra suave para profundidad */
		box-shadow: var(--nm-shadow-out);
		width: 300px;
		position: relative;
		margin-top: 40px; /* Margen superior necesario para no cortar la imagen que sobresale */
		display: flex;
		flex-direction: column;
		transition: transform 0.3s ease;
		font-family: system-ui, -apple-system, sans-serif;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	/* Wrapper para posicionar la imagen fuera del flujo normal */
	.image-wrapper {
		position: absolute;
		/* Efecto de sobresalir 5px sobre el borde superior */
		top: -5px; 
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		z-index: 10;
		pointer-events: none;
	}

	.product-image {
		width: 200px;
		height: 140px;
		/* 'contain' es mejor para logos para evitar recortes, 'cover' es mejor para fotos */
		object-fit: cover; 
		border-radius: 0%; /* Mantiene el formato circular */
		border: 4px solid white;
		box-shadow: 0 4px 6px rgba(0,0,0,0.1);
		background-color: #ffffff; /* Fondo blanco para asegurar que el logo transparente resalte */
	}

	/* Cuerpo de la tarjeta */
	.card-body {
		padding: 2rem 1.5rem 1.5rem;
		padding-top: 140px; /* Espacio reservado para la imagen */
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.price-tag {
		color: #10b981;
		font-weight: 700;
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
	}

	.currency {
		font-size: 0.8em;
		vertical-align: super;
	}

	.title {
		margin: 0;
		color: #1f2937;
		font-size: 1.25rem;
		font-weight: 600;
	}

	.description {
		margin: 0;
		color: #6b7280;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.add-btn {
		background-color: #1f2937;
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: 10px;
		font-weight: 600;
		cursor: pointer;
		margin-top: 1rem;
		transition: background-color 0.2s;
	}

	.add-btn:hover {
		background-color: #374151;
	}
</style>
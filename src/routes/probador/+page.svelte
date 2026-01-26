
			<script>
				/* Svelte 5 - Lógica con Runes */ 
        let selectedCategory = $state('Nudes');
				let selectedColor = $state('#647387');
				let isDarkMode = $state(false);
				const categories = ['Nudes', 'Neons', 'Pasteles', 'Glitter'];
				const colors = [
					'#647387',
					'#E5989B',
					'#B5838D',
					'#957DAD',
					'#7D9D9C',
					'#F9D949',
					'#F48484',
					'#F4B183',
					'#BDCDD6',
					'#2D3436'
				];
				function selectColor(color) {
					selectedColor = color;
				}
			</script>
			<!-- Importación de Bulma e Iconos -->
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
			/>




<div class="p-8">
	<div class="columns is-centered is-multiline is-vcentered">
		<div class="column is-full-mobile is-8-desktop is-half-tablet">
			<div class="try-on-page">
				<!-- Header Superior -->
				<header class="level is-mobile px-5 pt-5 pb-2">
					<div class="level-left">
						<button class="button is-rounded nm-btn-circle" onclick={() => window.history.back()}>
							<span class="icon is-small"><i class="fas fa-chevron-left"></i></span>
						</button>
					</div>
					<div class="level-item">
						<h1 class="title is-5 has-text-centered brand-color">Probador Virtual</h1>
					</div>
					<div class="level-right">
						<button class="button is-rounded nm-btn-circle">
							<span class="icon is-small"><i class="fas fa-share-alt"></i></span>
						</button>
					</div>
				</header>



				<main class="px-5">


            <div class="columns is-centered is-vcentered is-gapless">
              <div class="column is-full-mobile is-half-tablet is-half-desktop">

					<!-- Contenedor de la Mano (Visualizador) -->
					<div class="image-showcase nm-inset-frame mb-6">
						<button
							class="theme-toggle nm-btn-circle small"
							onclick={() => (isDarkMode = !isDarkMode)}
						>
							<span class="icon is-small"><i class="fas fa-moon"></i></span>
						</button>
            
						<div class="hand-wrapper">
							<img src="/hand-model.png" alt="Hand Model" class="hand-img " />
							<!-- Capa de color de uñas (simulada con filtros o máscara) -->
							<div class="nails-overlay" style="background-color: {selectedColor};"></div>
						</div>
						<div class="floating-controls">
							<button class="button is-rounded nm-btn-circle small mb-2">
								<span class="icon is-small"><i class="fas fa-search-plus"></i></span>
							</button>
							<button class="button is-rounded nm-btn-circle small">
								<span class="icon is-small"><i class="fas fa-undo-alt"></i></span>
							</button>
						</div>
					</div>


              </div>
              <div class="column is-full-mobile is-half-tablet is-half-desktop">


					<!-- Selector de Tono -->
					<div class="has-text-centered mb-5">
						<h2 class="title is-5 brand-color font-bold">Selecciona tu Tono</h2>
					</div>
					<!-- Segmented Control (Tabs) -->
					<div class="tabs-container nm-inset-tabs mb-6">
						{#each categories as cat}
							<button
								class="tab-item {selectedCategory === cat ? 'active' : ''}"
								onclick={() => (selectedCategory = cat)}
							>
								{cat}
							</button>
						{/each}
					</div>
					<!-- Grid de Colores Neumórficos -->
					<div class="colors-scroll">
						{#each colors as color}
							<div class="color-item">
								<button
									class="color-swatch-container {selectedColor === color ? 'is-active' : ''}"
									onclick={() => selectColor(color)}
								>
									<div class="color-circle" style="background-color: {color}"></div>
								</button>
								{#if selectedColor === color}
									<span class="active-label">ACTIVE</span>
								{/if}
							</div>
						{/each}
					</div>

              </div>
            </div>



				</main>
				<!-- Navegación Inferior -->
				<nav class="bottom-nav nm-card-top">
					<button class="nav-btn active">
						<span class="icon nm-inset-icon"><i class="fas fa-hand-sparkles"></i></span>
					</button>
					<button class="nav-btn"> <span class="icon"><i class="fas fa-search"></i></span> </button>
					<button class="nav-btn">
						<span class="icon"><i class="fas fa-shopping-cart"></i></span>
					</button>
					<button class="nav-btn"> <span class="icon"><i class="fas fa-user"></i></span> </button>
				</nav>
			</div>





			<style>


        .nails-overlay {
  /* 1. Posicionamiento absoluto para cubrir toda la imagen de la mano */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* 2. El color que se aplicará (este cambiará dinámicamente con Svelte) */
  background-color: #647387; 

  /* 3. La Máscara: El secreto para que el color solo se vea en las uñas */
  /* Debes tener un archivo PNG donde solo las uñas sean opacas y el resto transparente */
  mask-image: url('/nails-mask.png'); 
  -webkit-mask-image: url('/nails-mask.png'); /* Soporte para Safari/Chrome */
  
  /* 4. Ajustes de la máscara para que coincida con la imagen de fondo */
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-position: center;

  /* 5. Acabado estético */
  /* 'multiply' o 'overlay' hacen que el color se mezcle con las sombras reales de la uña */
  mix-blend-mode: multiply; 
  
  /* Suaviza el cambio de color al seleccionar uno nuevo */
  transition: background-color 0.3s ease-in-out;
  
  /* Evita que interfiera con los clics en otros elementos si fuera necesario */
  pointer-events: none;
}




				/* --- Configuración y Neumorfismo --- */
				:global(body) {
					background-color: #e0e5ec;
					font-family: 'Inter', sans-serif;
				}
				.brand-color {
					color: #647387 !important;
				}
				.font-bold {
					font-weight: 700;
				} /* Botones Neumórficos */
				.nm-btn-circle {
					background: #e0e5ec;
					border: none;
					box-shadow:
						6px 6px 12px #bebebe,
						-6px -6px 12px #ffffff;
					color: #647387;
					transition: all 0.2s;
				}
				.nm-btn-circle.small {
					width: 38px;
					height: 38px;
				}
				.nm-btn-circle:active {
					box-shadow:
						inset 3px 3px 6px #bebebe,
						inset -3px -3px 6px #ffffff;
				} /* Marco de la Mano */
				.nm-inset-frame {
					background: #e0e5ec;
					border-radius: 40px;
					position: relative;
					box-shadow:
						inset 10px 10px 20px #bebebe,
						inset -10px -10px 20px #ffffff;
					padding: 15px;
					overflow: hidden;
					height: 420px;
				}
				.hand-wrapper {
					width: 100%;
					height: 100%;
					position: relative;
				}
				.hand-img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 30px;
				}
				.theme-toggle {
					position: absolute;
					top: 15px;
					left: 15px;
					z-index: 5;
				}
				.floating-controls {
					position: absolute;
					bottom: 20px;
					right: 20px;
					display: flex;
					flex-direction: column;
					z-index: 5;
				} /* Tabs (Segmented Control) */
				.nm-inset-tabs {
					background: #e0e5ec;
					border-radius: 50px;
					display: flex;
					padding: 6px;
					box-shadow:
						inset 6px 6px 12px #bebebe,
						inset -6px -6px 12px #ffffff;
				}
				.tab-item {
					flex: 1;
					border: none;
					background: transparent;
					padding: 10px;
					font-size: 0.85rem;
					font-weight: 700;
					color: #718096;
					cursor: pointer;
					border-radius: 50px;
				}
				.tab-item.active {
					background: #647387;
					color: white;
					box-shadow: 4px 4px 10px rgba(100, 115, 135, 0.4);
				} /* Selector de Colores */
				.colors-scroll {
					display: flex;
					gap: 20px;
					overflow-x: auto;
					padding: 10px 5px 30px 5px;
					scrollbar-width: none;
				}
				.colors-scroll::-webkit-scrollbar {
					display: none;
				}
				.color-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 8px;
				}
				.color-swatch-container {
					width: 70px;
					height: 70px;
					border-radius: 50%;
					background: #e0e5ec;
					display: flex;
					align-items: center;
					justify-content: center;
					border: none;
					box-shadow:
						6px 6px 12px #bebebe,
						-6px -6px 12px #ffffff;
					cursor: pointer;
				}
				.color-swatch-container.is-active {
					box-shadow:
						0 0 0 3px #e0e5ec,
						0 0 0 6px #647387;
				}
				.color-circle {
					width: 45px;
					height: 45px;
					border-radius: 50%;
				}
				.active-label {
					font-size: 0.65rem;
					font-weight: 800;
					color: #647387;
					letter-spacing: 1px;
				} /* Bottom Nav */
				.bottom-nav {
					position: fixed;
					bottom: 0;
					left: 0;
					right: 0;
					height: 85px;
					background: #e0e5ec;
					display: flex;
					justify-content: space-around;
					align-items: center;
					padding-bottom: 15px;
					z-index: 10;
				}
				.nm-card-top {
					box-shadow: 0 -10px 20px rgba(163, 177, 198, 0.3);
					border-radius: 30px 30px 0 0;
				}
				.nav-btn {
					background: none;
					border: none;
					color: #a0aec0;
					font-size: 1.4rem;
					cursor: pointer;
				}
				.nav-btn.active {
					color: #647387;
				}
				.nm-inset-icon {
					padding: 10px;
					border-radius: 12px;
					background: #e0e5ec;
					box-shadow:
						inset 4px 4px 8px #bebebe,
						inset -4px -4px 8px #ffffff;
				}
			</style>
		</div>
	</div>
</div>

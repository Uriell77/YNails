<script>
	/* Svelte 5 - Lógica de Estado con Runes */ 
  let selectedCategory = $state('Manicura');
	let selectedDate = $state(20);
	let selectedTime = $state('10:00 AM');
	const categories = ['Manicura', 'Pedicura', 'Acrílicas'];
	const times = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '04:30 PM']; // Días para el calendario 
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
</script>




<div class="p-8">
  <div class="columns is-centered is-multiline is-vcentered">
    <div class="column is-full-mobile is-half-desktop is-half-tablet">



<!-- Enlace a Bulma (Usualmente en app.html) -->
<div class="main-layout">
	<!-- Navbar Superior (Bulma Level) -->
	<header class="top-nav mb-5">
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<h1 class="page-title">Citas YindriNails</h1>

		<button class="nm-btn-circle">
			<div class="notification-dot"></div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		</button>
	</header>


	<!-- Categorías (Bulma Buttons) -->
	<div class="px-5 mb-5">
		<div class="buttons are-small scroll-x">
			{#each categories as cat}
				<button
					class="button is-rounded {selectedCategory === cat ? 'is-active-nm' : 'nm-btn-flat'}"
					onclick={() => (selectedCategory = cat)}
				>
					{cat}
				</button>
			{/each}
		</div>
	</div>
	<!-- Calendario (Bulma Card + Grid) -->
	<div class="px-5 mb-5">
		<div class="card nm-card p-5">
			<header class="is-flex is-justify-content-space-between is-align-items-center mb-4">
				<h2 class="subtitle is-6 brand-color mb-0 font-bold">Enero 2026</h2>
				<div class="buttons are-small">
					<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button class="button is-ghost brand-color"><i class="fas fa-chevron-right"></i></button>
				</div>
			</header>
			<div class="columns is-multiline is-mobile is-gapless">
				{#each days as day}
					<div class="column is-one-seventh has-text-centered">
						<button
							class="calendar-day {selectedDate === day ? 'selected' : ''}"
							onclick={() => (selectedDate = day)}
						>
							{day}
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<!-- Horarios (Bulma Columns) -->
	<div class="px-5 mb-6">
		<h3 class="label brand-color mb-3">Horarios Disponibles</h3>
		<div class="columns is-multiline is-mobile">
			{#each times as time}
				<div class="column is-4">
					<button
						class="button is-fullwidth is-rounded {selectedTime === time
							? 'is-active-nm'
							: 'nm-btn-flat'}"
						onclick={() => (selectedTime = time)}
					>
						{time}
					</button>
				</div>
			{/each}
		</div>
	</div>
	<!-- Especialista y Confirmación (Bulma Level) -->
	<div class="footer-action p-5">
		<div class="columns is-mobile is-vcentered mb-4 nm-card mx-0 p-3">
			<div class="column is-narrow">
				<figure class="image is-48x48 nm-inset-circle">
					<img class="is-rounded" src="/showcase.jpg" alt="Yindri" />
				</figure>
			</div>
			<div class="column">
				<p class="is-size-7 font-bold">Yindriska Navarro</p>
				<p class="is-size-7 has-text-grey">Especialista Senior</p>
			</div>
			<div class="column is-narrow has-text-right"><p class="brand-color font-bold">⭐ 4.9</p></div>
		</div>
		<div class="level is-mobile mt-5">
			<div class="level-left">
				<div>
					<p class="is-size-7 has-text-grey">Precio Estimado</p>
					<p class="title is-4 brand-color mb-0">$45.00</p>
				</div>
			</div>
			<div class="level-right">
				<button class="button is-rounded confirm-btn"> Confirmar Cita </button>
			</div>
		</div>
	</div>
</div>


</div>  
</div>  
</div>



<style>



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

	/* --- Estilos Base y Neumorfismo --- */
	:global(body) {
		background-color: #e0e5ec;
		font-family: 'Inter', sans-serif;
	}
	.brand-color {
		color: #647387 !important;
	}
	.font-bold {
		font-weight: 700;
	} /* Ajustes Bulma para Neumorfismo */
	.nm-btn {
		background: #e0e5ec;
		border: none;
		box-shadow:
			5px 5px 10px #bebebe,
			-5px -5px 10px #ffffff;
		color: #647387;
	}
	.nm-btn-flat {
		background: #e0e5ec;
		border: none;
		box-shadow:
			4px 4px 8px #bebebe,
			-4px -4px 8px #ffffff;
		color: #718096;
	}
	.nm-card {
		background: #e0e5ec;
		border: none;
		box-shadow:
			10px 10px 20px #bebebe,
			-10px -10px 20px #ffffff;
		border-radius: 1.5rem;
	}
	.is-active-nm {
		background: #e0e5ec;
		border: none;
		box-shadow:
			inset 4px 4px 8px #bebebe,
			inset -4px -4px 8px #ffffff;
		color: #647387 !important;
		font-weight: 700;
	}
	.nm-inset-circle {
		box-shadow:
			inset 3px 3px 6px #bebebe,
			inset -3px -3px 6px #ffffff;
		border-radius: 50%;
		padding: 4px;
	} /* Calendario Custom */
	.calendar-day {
		width: 35px;
		height: 35px;
		border: none;
		background: transparent;
		border-radius: 10px;
		cursor: pointer;
		color: #718096;
		font-weight: 600;
		font-size: 0.8rem;
		margin-bottom: 5px;
		transition: all 0.2s;
	}
	.calendar-day.selected {
		background: #647387;
		color: white;
		box-shadow: 4px 4px 10px rgba(100, 115, 135, 0.4);
	}
	.is-one-seventh {
		width: 14.285% !important;
		flex: none;
	} /* Botón Confirmación */
	.confirm-btn {
		background-color: #647387 !important;
		color: white !important;
		font-weight: 700;
		border: none;
		height: 3.5rem;
		padding: 0 2rem;
		box-shadow: 0 8px 15px rgba(100, 115, 135, 0.3);
	} /* Helpers */
	.scroll-x {
		display: flex;
		overflow-x: auto;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none;
	}
	.scroll-x::-webkit-scrollbar {
		display: none;
	}
</style>

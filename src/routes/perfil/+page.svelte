<script>
	/* Svelte 5 - Lógica con Runes */ 
  let userName = $state('Yindri Nails');
	let memberSince = $state('Octubre 2023');
	let visitsLeft = $state(2);
	let totalAppointments = $state(24);
	let rewardsRedeemed = $state(3);
	let progress = $state(80); // Estado de la tarjeta de lealtad (8 visitas completadas de 10) 
  const loyaltySteps = Array.from({ length: 10 }, (_, i) => i < 8);
</script>








<div class="p-8">

  <div class="columns is-centered is-multiline is-vcentered">
    <div class="column is-full-mobile is-6-desktop is-half-tablet">


	<!-- Navbar Superior -->
	<header class="top-nav mb-5 mt-5">
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<h1 class="page-title">Tu Perfil</h1>

		<button class="nm-btn-circle">
			<div class="notification-dot"></div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		</button>
	</header>
  



	<main class="section pt-2">
		<!-- Información de Usuario -->
		<div class="has-text-centered mb-6">
			<div class="avatar-container nm-card-circle mx-auto mb-4">
				<div class="avatar-inner nm-inset-circle">
					<img src="/showcase.jpg" alt="User Avatar" class="is-rounded" />
				</div>
			</div>
			<h2 class="title is-4 mb-1">{userName}</h2>
			<p class="subtitle is-7 has-text-grey">Miembro desde {memberSince}</p>
			<button class="button is-rounded nm-btn-wide mt-4">Editar Perfil</button>
		</div>
		<!-- Tarjeta de Lealtad -->
		<div class="block">
			<div class="is-flex is-justify-content-space-between is-align-items-center mb-3">
				<h3 class="title is-6 mb-0">Tarjeta de Lealtad</h3>
				<span class="tag is-rounded brand-bg-light brand-color font-bold">VIP GOLD</span>
			</div>
			<div class="card nm-card p-5">
				<h4 class="title is-5 mb-1">¡Casi lista!</h4>
				<p class="subtitle is-7 has-text-grey mb-5">
					Faltan {visitsLeft} visitas para tu manicura gratis.
				</p>
				<div class="loyalty-grid mb-5">
					{#each loyaltySteps as completed, i}
						<div class="loyalty-step {completed ? 'is-active nm-inset-small' : 'nm-card-small'}">
							{#if i === 9}
								<span class="icon is-small"><i class="fas fa-gift"></i></span>
							{:else if completed}
								<span class="icon is-small"><i class="fas fa-check"></i></span>
							{:else}
								<span class="is-size-7">{i + 1}</span>
							{/if}
						</div>
					{/each}
				</div>
				<div class="progress-container">
					<div class="is-flex is-justify-content-space-between mb-2">
						<span class="is-size-7 font-bold brand-color">PROGRESO</span>
						<span class="is-size-7 font-bold brand-color">{progress}%</span>
					</div>
					<progress class="progress is-small brand-progress" value={progress} max="100"
						>{progress}%</progress
					>
				</div>
			</div>
		</div>
		<!-- Estadísticas Rápidas -->
		<div class="columns is-mobile mb-6">
			<div class="column">
				<div class="nm-card p-4 has-text-centered">
					<p class="title is-4 brand-color mb-0">{totalAppointments}</p>
					<p class="is-size-7 font-bold has-text-grey">CITAS TOTALES</p>
				</div>
			</div>
			<div class="column">
				<div class="nm-card p-4 has-text-centered">
					<p class="title is-4 brand-color mb-0">{rewardsRedeemed}</p>
					<p class="is-size-7 font-bold has-text-grey">PREMIOS CANJEADOS</p>
				</div>
			</div>
		</div>
		<!-- Menú de Opciones -->
		<div class="menu-list">
			{#each [{ icon: 'calendar-alt', label: 'Historial de Citas' }, { icon: 'credit-card', label: 'Métodos de Pago' }, { icon: 'bell', label: 'Notificaciones' }] as item}
				<button class="button is-fullwidth nm-card-btn mb-4">
					<span class="icon brand-color mr-3"><i class="fas fa-{item.icon}"></i></span>
					<span class="is-flex-grow-1 has-text-left font-bold">{item.label}</span>
					<span class="icon is-small has-text-grey"><i class="fas fa-chevron-right"></i></span>
				</button>
			{/each}
		</div>
		<!-- Botón Cerrar Sesión -->
		<button class="button is-fullwidth is-rounded nm-btn-danger mt-6"> Cerrar Sesión </button>
	</main>
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



	/* --- Estilos Neumórficos y Bulma Custom --- */
	:global(body) {
		background-color: #e0e5ec;
		font-family: 'Inter', sans-serif;
	}
	.brand-color {
		color: #647387 !important;
	}
	.brand-bg-light {
		background-color: #d1d9e6 !important;
	}
	.font-bold {
		font-weight: 700;
	} /* Botones y Cards */
	.nm-btn-circle {
		background: #e0e5ec;
		border: none;
		box-shadow:
			4px 4px 8px #bebebe,
			-4px -4px 8px #ffffff;
		color: #647387;
	}
	.nm-btn-wide {
		background: #e0e5ec;
		border: none;
		box-shadow:
			6px 6px 12px #bebebe,
			-6px -6px 12px #ffffff;
		color: #647387;
		width: 180px;
		font-weight: 700;
	}
	.nm-card {
		background: #e0e5ec;
		border: none;
		box-shadow:
			8px 8px 16px #bebebe,
			-8px -8px 16px #ffffff;
		border-radius: 24px;
	}
	.nm-card-btn {
		background: #e0e5ec;
		border: none;
		box-shadow:
			6px 6px 12px #bebebe,
			-6px -6px 12px #ffffff;
		border-radius: 18px;
		height: 4rem;
		justify-content: flex-start;
		padding-left: 1.5rem;
	}
	.nm-btn-danger {
		background: #e0e5ec;
		border: none;
		box-shadow:
			6px 6px 12px #bebebe,
			-6px -6px 12px #ffffff;
		color: #e74c3c;
		font-weight: 800;
		height: 3.5rem;
	} 
  
  /* Avatar Section */
	.avatar-container {
		width: 180px;
		height: 180px;
		padding: 1px;
    overflow:hidden ;
	}
	.nm-card-circle {
		background: #e0e5ec;
		border-radius: 50%;
		box-shadow:
			10px 10px 20px #bebebe,
			-10px -10px 20px #ffffff;
	}
	.nm-inset-circle {
		background: #e0e5ec;
		border-radius: 50%;
		box-shadow:
			inset 6px 6px 12px #bebebe,
			inset -6px -6px 12px #ffffff;
		padding: 10px;
		height: 100%;
    overflow: hidden;
	}
  img{
    border-radius: 50%;
    width: 80px;
    height: 80px;

  }

	.avatar-inner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
    overflow: hidden;
	} 

  /* Loyalty Grid */
	.loyalty-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 12px;
	}
	.loyalty-step {
		aspect-ratio: 1;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a0aec0;
	}
	.nm-card-small {
		background: #e0e5ec;
		box-shadow:
			4px 4px 8px #bebebe,
			-4px -4px 8px #ffffff;
	}
	.nm-inset-small {
		background: #e0e5ec;
		box-shadow:
			inset 3px 3px 6px #bebebe,
			inset -3px -3px 6px #ffffff;
		color: #647387 !important;
	}
	.loyalty-step.is-active {
		color: #647387;
	} /* Progress Bar */
	.brand-progress::-webkit-progress-value {
		background-color: #647387;
		border-radius: 10px;
	}
	.brand-progress::-webkit-progress-bar {
		background-color: #d1d9e6;
		border-radius: 10px;
	} /* Responsive Helpers */
	.profile-page {
		max-width: 480px;
		margin: 0 auto;
	}
</style>

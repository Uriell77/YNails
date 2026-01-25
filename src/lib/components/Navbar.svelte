<script>

  import { page } from '$app/state';

  // "page" es un objeto de estado reactivo global
  // No necesitas $ ni suscripciones
  let urlActual = page.url; 
  let ruta = page.url.pathname;
  let parametro = page.url.searchParams.get('id');

</script>




	<header class="top-nav pt-4 mb-5 mt-3">
		<button class="nm-btn-circle" onclick={() => window.history.back()}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M15 18l-6-6 6-6" />
			</svg>
		</button>

		<h1 class="page-title is-hidden">Servicios YindriNails</h1>

		<button class="nm-btn-circle is-hidden">
			<div class="notification-dot"></div>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
			</svg>
		</button>
	</header>










<style>
  .is-static{
    pointer-events: none;
    opacity: 0.5;
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
</style>
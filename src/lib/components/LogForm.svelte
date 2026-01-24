<script>
	/* Svelte 5 - Lógica con Runes */ let email = $state('');
	let password = $state('');
</script>

<!-- Enlace a Bulma (Puedes ponerlo en tu app.html o importarlo) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css" />
<div class="section pb-0 pt-2">
	<div class="container is-max-desktop">
		<form class="box nm-card" onsubmit={(e) => e.preventDefault()}>
			<!-- Campo de Email con Bulma -->
			<div class="field">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="label brand-text">Correo Electrónico</label>
				<div class="control has-icons-left">
					<input
						class="input is-rounded nm-inset"
						type="email"
						placeholder="ejemplo@correo.com"
						bind:value={email}
					/> <span class="icon is-small is-left"> <i class="fas fa-envelope"></i> </span>
				</div>
			</div>
			<!-- Campo de Contraseña con Bulma -->
			<div class="field">
				<!-- svelte-ignore a11y_label_has_associated_control -->
				<label class="label brand-text">Contraseña</label>
				<div class="control has-icons-left">
					<input
						class="input is-rounded nm-inset"
						type="password"
						placeholder="••••••••"
						bind:value={password}
					/> <span class="icon is-small is-left"> <i class="fas fa-lock"></i> </span>
				</div>
			</div>
			<!-- Botón de Acción con Bulma -->
			<div class="field mt-5">
				<div class="control">
					<button class="button is-fullwidth is-rounded brand-btn">
						<strong>Iniciar Sesión</strong>
					</button>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	/* Personalización Neumórfica sobre Bulma */
	.nm-card {
		background-color: #e0e5ec !important;
		border: none !important;
		box-shadow:
			12px 12px 24px #bebebe,
			-12px -12px 24px #ffffff !important;
		padding: 2.5rem !important;
		border-radius: 2rem !important;
	}
	.nm-inset {
		background-color: #e0e5ec !important;
		border: none !important;
		box-shadow:
			inset 6px 6px 12px #bebebe,
			inset -6px -6px 12px #ffffff !important;
		color: #4a4a4a !important;
		height: 3.5rem !important;
		transition: all 0.3s ease;
	}
	.nm-inset:focus {
		box-shadow:
			inset 2px 2px 4px #bebebe,
			inset -2px -2px 4px #ffffff !important;
	} /* Estilos de Marca */
	.brand-text {
		color: #647387 !important;
		font-size: 0.85rem !important;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-left: 0.5rem;
	}
	.brand-btn {
		background-color: #647387 !important;
		color: white !important;
		height: 3.5rem !important;
		border: none !important;
		font-size: 1.1rem !important;
		box-shadow: 0 8px 15px rgba(100, 115, 135, 0.3) !important;
	}
	.brand-btn:hover {
		background-color: #536173 !important;
		transform: translateY(-2px);
	} /* Ajuste para que Bulma no sobreescriba el fondo general */
	:global(body) {
		background-color: #e0e5ec;
	}
</style>

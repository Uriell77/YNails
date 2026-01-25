# YNails

Proyecto de sitio web para YNails, construido con SvelteKit y desplegado en Vercel.

## Configuración de Variables de Entorno

Este proyecto requiere variables de entorno para funcionar correctamente. Sigue estos pasos:

1. **Copia el archivo de ejemplo:**
   ```sh
   cp .env.example .env.local
   ```

2. **Configura tu token de Vercel Blob:**
   - Ve a tu [Dashboard de Vercel](https://vercel.com/dashboard/stores)
   - Crea o selecciona tu Blob Storage
   - Copia el token de lectura/escritura
   - Pega el token en `.env.local`:
     ```
     YNails_READ_WRITE_TOKEN=tu_token_aqui
     ```

3. **Importante:** El archivo `.env.local` NO debe subirse a Git (ya está en `.gitignore`)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

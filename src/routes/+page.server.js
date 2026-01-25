// @ts-nocheck
import { list } from '@vercel/blob';
import { YNails_READ_WRITE_TOKEN } from '$env/static/private';

export async function load() {
  // Verificar que el token existe
  if (!YNails_READ_WRITE_TOKEN) {
    console.error('ERROR: YNails_READ_WRITE_TOKEN no está definido en las variables de entorno');
    return {
      imagenes: [],
      error: 'Token de autenticación no configurado'
    };
  }

  console.log('Token cargado correctamente:', YNails_READ_WRITE_TOKEN ? '✓' : '✗');

  try {
    // Consultamos todos los blobs del store vinculado al Token
    // 'limit' por defecto es 1000.
    const { blobs } = await list({
      // Si "ynails" fuera una carpeta dentro de un store compartido, usarías:
      // prefix: 'ynails/' 
      token: YNails_READ_WRITE_TOKEN
    });

    console.log(`Imágenes cargadas: ${blobs.length}`);

    return {
      imagenes: blobs
    };
  } catch (error) {
    console.error("Error cargando blobs:", error);
    return {
      imagenes: [],
      error: error.message
    };
  }
}

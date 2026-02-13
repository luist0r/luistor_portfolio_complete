# Guía de Despliegue: GitHub Pages + Cloudflare

Sigue estos pasos para poner tu portafolio en línea en `luistor.uk`.

## 1. Crear Repositorio en GitHub

1.  Ve a [github.com/new](https://github.com/new).
2.  Nombra el repositorio (ej: `portfolio` o `luistor-web`).
3.  Déjalo **Público**.
4.  No marques ninguna casilla de inicialización (README, .gitignore, etc.).
5.  Haz clic en **Create repository**.

## 2. Subir el Código (Desde tu terminal)

Copia y pega estos comandos en tu terminal (uno por uno):

```bash
cd /Users/powerlight/.gemini/antigravity/playground/warped-spirit
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
git push -u origin main
```
*(Reemplaza `TU_USUARIO` y `NOMBRE_DEL_REPO` con los datos de tu nuevo repo).*

## 3. Configurar GitHub Pages

1.  En tu repositorio de GitHub, ve a **Settings** > **Pages**.
2.  En **Branch**, selecciona `main` y guarda.
3.  En **Custom domain**, escribe `luistor.uk` y haz clic en **Save**.
4.  Espera a que termine el chequeo de DNS (puede tardar unos minutos).
5.  Marca la casilla **Enforce HTTPS**.

## 4. Configurar Cloudflare

1.  Entra a tu panel de Cloudflare y selecciona el dominio `luistor.uk`.
2.  Ve a la sección **DNS**.
3.  Asegúrate de tener estos registros (borra cualquier otro registro A o CNAME que apunte a otro hosting):

| Tipo  | Nombre | Contenido               | Proxy Status |
| :--- | :--- | :--- | :--- |
| **CNAME** | `@`    | `TU_USUARIO.github.io` | **Proxied (Nube Naranja)** |
| **CNAME** | `www`  | `TU_USUARIO.github.io` | **Proxied (Nube Naranja)** |

*(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub).*

4.  Ve a **SSL/TLS** > **Overview** y asegúrate de que el modo de encriptación sea **Full** o **Full (strict)**.

¡Listo! En unos minutos tu sitio estará visible en `https://luistor.uk`.

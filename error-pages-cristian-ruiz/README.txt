==============================================
  ERROR PAGES - CRISTIAN RUIZ / CR-SYSTEM
==============================================

Paginas de error/estado HTTP listas para produccion.
Mismo sistema de diseno del portafolio: Tailwind CDN, JetBrains Mono /
Space Grotesk / Orbitron, glitch, scanlines, particulas y holo-cards.

ARCHIVOS
  400.html  Bad Request            - solicitud incorrecta
  401.html  Unauthorized           - acceso no autorizado
  403.html  Forbidden              - acceso prohibido
  404.html  Not Found              - pagina no encontrada
  500.html  Internal Server Error  - error interno del servidor
  502.html  Bad Gateway            - puerta de enlace incorrecta
  503.html  Service Unavailable    - servicio no disponible

INSTALACION - NGINX (dentro del bloque server):
  error_page 400 /400.html;
  error_page 401 /401.html;
  error_page 403 /403.html;
  error_page 404 /404.html;
  error_page 500 /500.html;
  error_page 502 /502.html;
  error_page 503 /503.html;

INSTALACION - APACHE (.htaccess):
  ErrorDocument 400 /400.html
  ErrorDocument 401 /401.html
  ErrorDocument 403 /403.html
  ErrorDocument 404 /404.html
  ErrorDocument 500 /500.html
  ErrorDocument 502 /502.html
  ErrorDocument 503 /503.html

NOTAS
  - Sube los archivos a la raiz publica del sitio (junto a index.html).
  - El boton principal apunta a "/" (raiz del dominio); si abres un archivo
    localmente con file://, el enlace apunta solo a index.html.
  - No requieren configuracion adicional: CSS y JS van embebidos en cada
    archivo; solo cargan Tailwind CDN y Google Fonts por red.
  - El efecto de escritura del terminal y las animaciones respetan
    prefers-reduced-motion (accesibilidad).
  - Meta robots noindex: los buscadores no indexan estas paginas.

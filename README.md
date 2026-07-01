# SmileUp Dental Clinic

Sitio web profesional para **SmileUp Dental Clinic**, una clínica dental orientada a salud oral, estética dental y atención previa cita. El proyecto está construido para editarse rápidamente desde archivos locales, desplegarse en Vercel y transferirse de forma ordenada al cliente cuando corresponda.

## Objetivo del sitio

El sitio debe comunicar una experiencia dental moderna, clara y cercana: una clínica donde el paciente puede conocer los servicios, resolver dudas básicas y solicitar una cita sin fricción.

Servicios principales:

- Limpieza
- Calzas de resina
- Ortodoncia
- Diseño de sonrisa
- Cirugía de 3ras molares
- Blanqueamiento
- Endodoncia
- Prótesis fija y removible
- Implantes dentales
- Otras especialidades

Atención: **previa cita**.

## Identidad visual

Paleta base de SmileUp Dental Clinic:

```css
--primary: #00b8ba;
--primary-dark: #007f82;
--primary-deep: #005f61;
--primary-soft: #dff8f8;
--secondary: #87d1e4;
--secondary-soft: #e8f8fc;
--background: #f9fffa;
--surface: #ffffff;
--text: #123234;
--text-muted: #5b7476;
--border: #cbeff2;
--white: #ffffff;
```

Uso recomendado:

- `#00B8BA` como color principal para CTAs, detalles e identidad.
- `#F9FFFA` como fondo limpio y luminoso.
- `#87D1E4` como apoyo visual para secciones, gradientes e iconografía suave.
- `#005F61` y `#123234` para contraste, textos y secciones fuertes.

## Stack

- Astro
- Tailwind CSS
- TypeScript ligero
- Contenido en archivos locales
- Web3Forms para formularios
- Vercel para deploy
- GitHub para control de versiones y transferencia de ownership
- Sanity opcional solo si el cliente necesita editar blog o contenido desde un panel

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build y preview

```bash
npm run build
npm run preview
```

## Editar información del negocio

Actualiza `src/config/site.ts` para cambiar:

- Nombre del negocio
- Teléfono
- WhatsApp
- Email
- Instagram
- Dirección
- Horarios
- SEO
- Colores base
- Información de contacto

Usa placeholders si falta información real:

```text
[TELÉFONO PENDIENTE]
[WHATSAPP PENDIENTE]
[CORREO PENDIENTE]
[DIRECCIÓN PENDIENTE]
[HORARIO PENDIENTE]
[MAPA PENDIENTE]
```

No inventar datos de contacto, ubicación, doctores, credenciales, testimonios ni precios.

## Editar contenido

Revisa y actualiza los archivos de contenido según la estructura real del proyecto. Posibles archivos:

- Servicios: `src/content/services.ts`
- Preguntas frecuentes: `src/content/faqs.ts`
- Testimonios: `src/content/testimonials.ts`
- Doctores/equipo: `src/content/doctors.ts`
- Blog: `src/content/blog.ts`
- Configuración general: `src/config/site.ts`

Las imágenes públicas suelen vivir en `public/images`. Puedes reemplazarlas manteniendo los mismos nombres o actualizar las rutas en los archivos de contenido.

## Servicios confirmados

Usar estos servicios como base del sitio:

```text
Limpieza
Calzas de resina
Ortodoncia
Diseño de sonrisa
Cirugía de 3ras molares
Blanqueamiento
Endodoncia
Prótesis fija y removible
Implantes dentales
Otras especialidades
```

## SEO sugerido

Título recomendado:

```text
SmileUp Dental Clinic | Clínica Dental en Panamá
```

Meta description recomendada:

```text
SmileUp Dental Clinic ofrece atención dental previa cita en Panamá: limpieza, calzas de resina, ortodoncia, diseño de sonrisa, blanqueamiento, endodoncia, prótesis e implantes dentales.
```

Búsquedas objetivo:

- clínica dental en Panamá
- dentista en Panamá
- odontología en Panamá
- limpieza dental en Panamá
- blanqueamiento dental en Panamá
- diseño de sonrisa en Panamá
- ortodoncia en Panamá
- implantes dentales en Panamá
- endodoncia en Panamá
- calzas de resina en Panamá
- cirugía de cordales en Panamá
- SmileUp Dental Clinic
- SmileUp Dental Clinic Panamá

## Formulario con Web3Forms

1. Crea una cuenta o formulario en Web3Forms.
2. Copia el access key.
3. Crea `.env` local usando `.env.example` como referencia.
4. Define:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
```

En Vercel, agrega la misma variable en:

```text
Project Settings > Environment Variables
```

No subir `.env` a GitHub.

## Instagram

Instagram confirmado:

```text
https://www.instagram.com/smileup.pa/
```

Actualizar todos los enlaces sociales para que apunten a esa cuenta.

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Importa el repositorio en Vercel.
3. Framework preset: Astro.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Configura `PUBLIC_WEB3FORMS_ACCESS_KEY` si usarás el formulario.
7. Conecta el dominio del cliente.
8. Revisa que no queden referencias de marcas anteriores.

## Crear un nuevo sitio para cliente

1. Duplica el repositorio o crea uno nuevo desde este template.
2. Elimina el historial Git viejo si es necesario:

```bash
rm -rf .git
```

3. Inicializa un nuevo repo:

```bash
git init
git add .
git commit -m "Initial SmileUp Dental Clinic website"
```

4. Conecta el repo nuevo:

```bash
git remote add origin https://github.com/alfonsodelag/smile-up-dental-clinic.git
git branch -M main
git push -u origin main
```

5. Cambia `src/config/site.ts`.
6. Ajusta servicios, FAQs, blog, imágenes y SEO.
7. Reemplaza imágenes en `public/images`.
8. Configura Web3Forms.
9. Despliega en Vercel.
10. Transfiere ownership de GitHub, Vercel, dominio y Web3Forms al cliente cuando corresponda.

## Sanity

Sanity no está instalado por defecto salvo que el proyecto base ya lo incluya.

Añádelo o configúralo solo si el cliente necesita editar blog o contenido frecuente sin tocar GitHub.

Si el proyecto ya usa Sanity:

- No cambiar `projectId`, `dataset` ni schemas sin revisar.
- No eliminar el blog sin aprobación.
- Usar o sugerir categoría `dental` si el CMS comparte contenido con otros demos.

## Checklist antes de entregar

- No quedan referencias a Clínica Derma.
- No quedan referencias a Dra. Edysbell Barrios.
- No quedan referencias a Odonto Panamá.
- Header y footer usan SmileUp Dental Clinic.
- Servicios están actualizados.
- Instagram apunta a `https://www.instagram.com/smileup.pa/`.
- WhatsApp, teléfono, email y dirección están confirmados o marcados como pendientes.
- Colores usan la paleta SmileUp.
- SEO title y meta description están actualizados.
- Open Graph está actualizado.
- Alt text de imágenes está actualizado.
- Formulario funciona o queda documentado como pendiente.
- `npm run build` pasa correctamente.
- `.env`, `.vercel`, `node_modules`, `dist` y `.astro` no están en Git.
- Sitio listo para deploy en Vercel.

## Comandos útiles

Buscar referencias viejas:

```bash
grep -R "Clínica Derma\|Clinica Derma\|Dra. Edysbell\|Edysbell\|Odonto Panamá\|Odonto Panama\|odontopanama" -n src public . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.astro --exclude-dir=.git
```

Ver estado de Git:

```bash
git status
```

Compilar:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

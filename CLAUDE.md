# CLAUDE.md

## Project Context

This project is a website for:

**SmileUp Dental Clinic**

The site is being adapted from an existing medical/dental website template. The objective is to convert the project into a clean, modern, professional, trustworthy website for **SmileUp Dental Clinic**, without breaking the current technical architecture.

SmileUp Dental Clinic should feel like a fresh, friendly, modern dental clinic: clinical enough to inspire confidence, warm enough to reduce dental anxiety, and polished enough to communicate aesthetic care.

The website must communicate one central idea:

> SmileUp Dental Clinic helps patients care for their oral health and smile aesthetics through professional, friendly, appointment-based dental care.

---

## Primary Objective

Transform the existing project into a complete website for **SmileUp Dental Clinic**, focused on:

- General dental care
- Preventive dentistry
- Aesthetic dental treatments
- Smile design
- Restorative dental care
- Orthodontics
- Endodontics
- Third molar surgery
- Dental prosthetics
- Dental implants
- Appointment-based patient care

Do not treat this as a generic dental website. It should feel bright, optimistic, clean, safe, and personal — like a clinic where the patient feels guided, not sold to.

---

## Brand Identity

### Brand Name

Use consistently:

**SmileUp Dental Clinic**

Acceptable shorter versions:

- SmileUp
- SmileUp Dental
- Clínica Dental SmileUp
- SmileUp Dental Clinic Panamá

Avoid leaving any reference to:

- Clínica Derma
- Dra. Edysbell Barrios
- Odonto Panamá
- Odonto Panama
- odontopanama
- Any previous clinic, doctor, template, or brand name from the source project

---

## Known Public / Provided Information

Use the following confirmed information:

```text
Brand: SmileUp Dental Clinic
Instagram: https://www.instagram.com/smileup.pa/
Services:
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
Appointment model: PREVIA CITA
Primary logo color: #00B8BA
Secondary logo color: #F9FFFA
Tertiary logo color: #87D1E4
```

Information not yet confirmed must remain as placeholders.

Allowed placeholders:

```text
[TELÉFONO PENDIENTE]
[WHATSAPP PENDIENTE]
[CORREO PENDIENTE]
[DIRECCIÓN PENDIENTE]
[HORARIO PENDIENTE]
[MAPA PENDIENTE]
[IMAGEN PENDIENTE]
[DOCTOR/A PENDIENTE]
[EQUIPO PENDIENTE]
[TESTIMONIO PENDIENTE]
[WEB3FORMS_ACCESS_KEY_PENDIENTE]
```

Do not invent:

- Phone number
- WhatsApp number
- Address
- Email
- Clinic location
- Doctors' names
- Years of experience
- Universities
- Certifications
- Medical credentials
- Before/after results
- Testimonials
- Prices
- Guarantees of treatment outcome
- Claims such as “best clinic” unless proven

---

## Strategic Positioning

### Core Positioning

**Odontología moderna, estética y cercana para cuidar tu salud oral y elevar tu sonrisa.**

### Brand Promise

SmileUp should be positioned as a clinic where dentistry is not intimidating, cold, or confusing. It should feel clear, fresh, and guided — like a lighthouse for people who want a healthier smile without pressure or fear.

### Supporting Messages

Use variations of these ideas across the site:

- Sonríe con confianza.
- Cuida tu sonrisa con atención profesional y cercana.
- Salud oral y estética dental en un solo lugar.
- Tratamientos dentales con enfoque moderno, humano y claro.
- Una experiencia dental pensada para tu bienestar.
- Agenda tu cita y empieza a cuidar tu sonrisa.
- Atención dental previa cita.

Avoid excessive hype. The tone should be optimistic, not noisy.

---

## Visual Direction

The visual style should be:

- Clean
- Bright
- Fresh
- Modern
- Trustworthy
- Friendly
- Clinical but not cold
- Youthful but not childish
- Aesthetic but not superficial
- Minimal but not empty
- Premium but accessible

The brand should feel like:

> A fresh turquoise breath in a white clinical room: clean, calm, precise, and optimistic.

Use visual motifs such as:

- Soft rounded cards
- Generous white space
- Aqua gradients
- Light blue translucent sections
- Subtle dental wave shapes
- Clean iconography
- Friendly smiles
- Calm CTA areas
- Balanced clinical photography

Avoid:

- Overly dark medical aesthetics
- Heavy shadows
- Aggressive sales banners
- Chaotic gradients
- Generic stock-photo overload
- Overuse of tooth icons everywhere
- Infantilizing the brand

---

## Color Palette

The logo colors define the brand hierarchy:

1. **#00B8BA** — primary turquoise
2. **#F9FFFA** — near-white freshness
3. **#87D1E4** — soft dental sky blue

Build the website palette from these colors:

```css
:root {
  --primary: #00b8ba;
  --primary-dark: #007f82;
  --primary-deep: #005f61;
  --primary-soft: #dff8f8;

  --secondary: #87d1e4;
  --secondary-soft: #e8f8fc;

  --background: #f9fffa;
  --surface: #ffffff;
  --surface-soft: #f2fcfc;

  --text: #123234;
  --text-muted: #5b7476;
  --border: #cbeff2;

  --success-soft: #e7faf4;
  --warning-soft: #fff8e8;

  --white: #ffffff;
}
```

### Usage Rules

- Use `#00B8BA` as the main brand color for buttons, highlights, active states, selected nav elements, key icons, and CTA accents.
- Use `#F9FFFA` as the main page background or off-white canvas. It should make the site feel clean and breathable.
- Use `#87D1E4` as the supporting blue for gradients, backgrounds, cards, icon circles, hover areas, and soft visual rhythm.
- Use `#005F61` or `#007F82` for strong contrast, dark buttons, footer backgrounds, section headings, and accessibility-safe text over light backgrounds.
- Use `#123234` for main body text and headings. Pure black should be avoided unless absolutely needed.
- Use `#FFFFFF` for cards, forms, nav surfaces, and clean clinical contrast.
- Do not make the whole website turquoise. Turquoise should lead the eye like a compass, not flood the room.

### Suggested Gradients

```css
background: linear-gradient(135deg, #f9fffa 0%, #e8f8fc 55%, #dff8f8 100%);
```

```css
background: linear-gradient(135deg, #00b8ba 0%, #87d1e4 100%);
```

```css
background: radial-gradient(
  circle at top right,
  rgba(135, 209, 228, 0.35),
  transparent 40%
);
```

### Contrast Rule

Before finalizing buttons or text over turquoise, verify readability. If white text over `#00B8BA` lacks sufficient contrast in a specific component, use `#005F61` for text or darken the button background to `#007F82`.

---

## Typography Direction

Use typography that feels modern, clean, and friendly.

Recommended direction:

- Headings: rounded but professional sans-serif
- Body: highly readable sans-serif
- Buttons: medium weight, not overly bold
- Labels: small, uppercase only when useful

Suggested font pairings if already available or easy to add:

- `Inter` for all UI and body text
- `Poppins` or `Manrope` for headings
- `Nunito Sans` if a softer friendly look is desired

Avoid overly decorative fonts, childish rounded fonts, or luxury serif typography that fights the clinical/fresh identity.

---

## Design Philosophy: Top 10 Web Design GOATs Applied

This project should synthesize the thinking of ten major web design voices into practical execution.

### 1. Ethan Marcotte — Responsive Design

Design fluidly from mobile to desktop.

Implementation rules:

- Build mobile-first layouts.
- Avoid fixed widths that break on phones.
- Use responsive grids for services and cards.
- Hero must work beautifully on small screens.
- CTA buttons must remain visible and tappable.
- Images must scale without cropping important faces or dental context.

### 2. Jeffrey Zeldman — Web Standards and Semantic Structure

Build the site with clean, durable, standards-based markup.

Implementation rules:

- Use semantic HTML: `header`, `main`, `section`, `article`, `footer`, `nav`.
- Use accessible headings in logical order.
- Do not create div soup.
- Ensure links, buttons, forms, labels, and alt text are meaningful.
- Prioritize maintainability over cleverness.

### 3. Luke Wroblewski — Mobile-First and Conversion Clarity

The mobile experience is the real storefront.

Implementation rules:

- Place `Agendar cita` and `WhatsApp` CTAs prominently on mobile.
- Reduce friction in forms.
- Keep the contact section simple.
- Use large tap targets.
- Make phone, WhatsApp, Instagram, and directions easy to find.
- Forms should ask only what is necessary.

### 4. Vitaly Friedman — Content Hierarchy and UX Depth

Make the page useful, scannable, and information-rich without becoming heavy.

Implementation rules:

- Use clear section hierarchy.
- Services must be easy to scan.
- Explain procedures in plain Spanish.
- Add FAQs that answer real patient concerns.
- Use trust-building microcopy near CTAs.
- Avoid mystery meat navigation.

### 5. Tobias Van Schneider — Brand Experience and Visual Atmosphere

The website must feel like a brand, not a template.

Implementation rules:

- Use the SmileUp palette consistently.
- Create a memorable hero visual system.
- Use airy spacing and confident composition.
- Build a recognizable visual rhythm: turquoise, white, sky blue, rounded cards, clean smile imagery.
- Avoid generic dental template clichés.

### 6. Dan Cederholm — Lightweight, Practical Interfaces

Keep components simple, fast, and durable.

Implementation rules:

- Avoid unnecessary JavaScript.
- Prefer Astro static rendering where possible.
- Keep cards and sections reusable.
- Use CSS/Tailwind utilities cleanly.
- Optimize images.
- Keep animations subtle and performant.

### 7. Nick Finck — UX Architecture and User Journeys

Design around patient intent.

Primary user journeys:

1. Patient wants to schedule an appointment.
2. Patient wants to know whether SmileUp offers a specific treatment.
3. Patient wants to verify trust and professionalism.
4. Patient wants location/contact information.
5. Patient wants to understand what to expect before visiting.

Every section should support at least one of these journeys.

### 8. Sarah Parmenter — Polished UI and Interface Details

Small details make the clinic feel professional.

Implementation rules:

- Use elegant cards with consistent radius.
- Maintain consistent icon sizing.
- Keep buttons visually clear.
- Use soft hover states.
- Forms should feel carefully designed.
- Use subtle visual states for focus, errors, and success.

### 9. Veerle Pieters — Grid, Illustration, and Visual Craft

Use layout discipline and tasteful visual accents.

Implementation rules:

- Use grid systems for services and benefits.
- Add subtle line-art or abstract dental shapes if appropriate.
- Keep iconography consistent.
- Use decorative elements sparingly.
- Ensure illustrations do not look childish.

### 10. Mike Monteiro — Ethics and Clarity

A medical website must be honest.

Implementation rules:

- Do not exaggerate outcomes.
- Do not invent credentials.
- Do not claim guaranteed results.
- Do not use fear-based messaging.
- Make appointment requirements clear.
- Make forms transparent and respectful.
- Prioritize patient trust over aggressive conversion.

---

## Information Architecture

Recommended structure:

1. Home
2. Servicios
3. Nosotros / Sobre SmileUp
4. Diseño de sonrisa
5. Preguntas frecuentes
6. Blog / Consejos dentales, if implemented
7. Contacto

For a one-page landing page, use sections in this order:

1. Header/navigation
2. Hero
3. Trust strip / quick benefits
4. Services overview
5. Featured aesthetic section: Diseño de sonrisa / Blanqueamiento
6. Why choose SmileUp
7. Patient experience / appointment process
8. FAQ
9. Contact / appointment section
10. Footer

---

## Homepage Section-by-Section Direction

### Header

Must include:

- SmileUp Dental Clinic logo/name
- Servicios
- Nosotros
- Preguntas frecuentes
- Contacto
- CTA: `Agendar cita`

If WhatsApp is confirmed, CTA should point to WhatsApp. If missing, use placeholder data and keep UI ready.

### Hero Section

The hero must immediately communicate dental care, confidence, and appointment-based access.

Recommended headline:

```text
Cuida tu sonrisa con atención dental moderna y cercana
```

Alternative headlines:

```text
Sonrisas saludables, frescas y seguras en SmileUp Dental Clinic
```

```text
Odontología estética y salud oral con una experiencia más clara y humana
```

Suggested subcopy:

```text
En SmileUp Dental Clinic ofrecemos atención odontológica previa cita, combinando prevención, estética dental y tratamientos personalizados para ayudarte a sonreír con confianza.
```

CTA options:

```text
Agendar cita
```

```text
Escribir por WhatsApp
```

```text
Ver servicios
```

Hero trust microcopy:

```text
Atención previa cita · Servicios dentales integrales · Enfoque estético y preventivo
```

### Trust Strip

Suggested items:

- Atención previa cita
- Servicios dentales integrales
- Enfoque estético y preventivo
- Comunicación clara con el paciente

### Services Section

Use the confirmed services exactly, with polished patient-friendly descriptions.

Services:

1. Limpieza
2. Calzas de resina
3. Ortodoncia
4. Diseño de sonrisa
5. Cirugía de 3ras molares
6. Blanqueamiento
7. Endodoncia
8. Prótesis fija y removible
9. Implantes dentales
10. Otras especialidades

Suggested service card descriptions:

```text
Limpieza
Cuidado preventivo para mantener dientes y encías más saludables, ayudando a controlar placa, manchas y acumulación de sarro.
```

```text
Calzas de resina
Restauraciones estéticas para reparar piezas dentales afectadas por caries, desgaste o fracturas pequeñas, conservando una apariencia natural.
```

```text
Ortodoncia
Tratamientos orientados a mejorar la posición dental, la mordida y la armonía de la sonrisa.
```

```text
Diseño de sonrisa
Planificación estética para mejorar proporción, color y armonía dental según las características de cada paciente.
```

```text
Cirugía de 3ras molares
Evaluación y tratamiento quirúrgico de cordales cuando generan dolor, inflamación, mala posición o riesgo para otras piezas.
```

```text
Blanqueamiento
Tratamiento estético para aclarar el tono dental de forma profesional y controlada.
```

```text
Endodoncia
Tratamiento del conducto dental para conservar piezas afectadas por infección, dolor profundo o daño pulpar.
```

```text
Prótesis fija y removible
Opciones para recuperar función, estética y comodidad cuando faltan una o varias piezas dentales.
```

```text
Implantes dentales
Alternativa para reemplazar piezas dentales perdidas mediante soluciones diseñadas para recuperar función y estética.
```

```text
Otras especialidades
Atención y orientación según las necesidades específicas de cada paciente.
```

Avoid turning services into guaranteed results. Use phrases such as “puede ayudar”, “orientado a”, “según evaluación”.

### About Section

Because confirmed doctor/team details are not provided, keep this general.

Suggested copy:

```text
En SmileUp Dental Clinic creemos que una buena experiencia dental empieza con claridad, confianza y trato cercano. Nuestro enfoque combina salud oral, estética dental y comunicación sencilla para que cada paciente entienda sus opciones y pueda tomar decisiones informadas sobre su sonrisa.
```

If no team photo is available:

```text
[IMAGEN PENDIENTE]
```

### Why Choose SmileUp

Suggested benefits:

- Atención previa cita para una experiencia más ordenada.
- Servicios dentales integrales en un solo lugar.
- Enfoque preventivo y estético.
- Comunicación clara antes de cada tratamiento.
- Ambiente moderno, limpio y amigable.
- Tratamientos según evaluación profesional.

### Appointment Process Section

Use a simple 3-step section:

```text
1. Agenda tu cita
Escríbenos para coordinar el horario disponible.

2. Evaluamos tu caso
Revisamos tu necesidad dental y resolvemos tus dudas.

3. Inicia tu tratamiento
Te orientamos sobre las opciones adecuadas para tu sonrisa.
```

### FAQ Section

Suggested FAQs:

```text
¿Atienden sin cita?
La atención es previa cita para ofrecer una experiencia más ordenada. Puedes contactarnos para consultar disponibilidad.
```

```text
¿Qué servicios ofrece SmileUp Dental Clinic?
Ofrecemos limpieza, calzas de resina, ortodoncia, diseño de sonrisa, cirugía de terceras molares, blanqueamiento, endodoncia, prótesis, implantes dentales y otras especialidades.
```

```text
¿El blanqueamiento dental es para todos?
Debe evaluarse cada caso antes de indicar el tratamiento, especialmente si hay sensibilidad, restauraciones visibles o problemas de encías.
```

```text
¿Qué es una calza de resina?
Es una restauración estética usada para reparar dientes afectados por caries, desgaste o pequeñas fracturas.
```

```text
¿Puedo consultar por WhatsApp?
Sí, cuando el número esté confirmado. Mantener el CTA preparado con [WHATSAPP PENDIENTE] si aún no está disponible.
```

---

## Voice and Copywriting Style

The copy should be:

- Clear
- Fresh
- Professional
- Friendly
- Trustworthy
- Calm
- Optimistic
- Human
- Panama-friendly
- Sales-oriented without pressure

Preferred language:

- Spanish
- Professional but accessible
- Patient-first
- Simple explanations

Avoid:

- Cold institutional language
- Excessive medical jargon
- Fake urgency
- “Sonrisa perfecta garantizada”
- “Los mejores especialistas” unless verified
- “Resultados inmediatos garantizados”
- Fear-based claims
- Overpromising or diagnosing online

Microcopy examples:

```text
Agenda tu cita y recibe orientación según tu caso.
```

```text
Cada tratamiento inicia con una evaluación profesional.
```

```text
Te ayudamos a entender tus opciones antes de decidir.
```

```text
Atención previa cita para cuidar mejor tu tiempo.
```

---

## SEO Strategy

Optimize for local dental searches in Panama.

Target search themes:

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

Suggested SEO title:

```text
SmileUp Dental Clinic | Clínica Dental en Panamá
```

Alternative SEO title:

```text
SmileUp Dental Clinic Panamá | Limpieza, Diseño de Sonrisa y Odontología Estética
```

Suggested meta description:

```text
SmileUp Dental Clinic ofrece atención dental previa cita en Panamá: limpieza, calzas de resina, ortodoncia, diseño de sonrisa, blanqueamiento, endodoncia, prótesis e implantes dentales.
```

Update:

- Page titles
- Meta descriptions
- Open Graph title
- Open Graph description
- Twitter card metadata
- Image alt text
- Canonical URL if present
- Schema markup if present
- Footer SEO text
- Blog metadata if present
- Sitemap if applicable

### Suggested Schema

If the project includes JSON-LD schema, use a conservative `Dentist` or `LocalBusiness` schema with placeholders for unconfirmed fields.

Do not invent address, geo coordinates, phone number, opening hours, or doctor names.

---

## Image Guidelines

Review all images in:

- `/public`
- `/src/assets`
- `/assets`
- Any image folder used by the project

Identify any image belonging to:

- Clínica Derma
- Dra. Edysbell Barrios
- Odonto Panamá
- Any previous template brand
- Any unrelated dermatology or medical spa project

Do not delete images without approval.

If an image is clearly not related to SmileUp Dental Clinic, mark it as:

```text
[IMAGEN PENDIENTE DE REEMPLAZO]
```

Good image directions:

- Clean dental clinic environment
- Friendly patient interaction
- Natural smiles
- Dental instruments in clean composition
- Bright, airy clinic spaces
- Dentist/patient consultation imagery
- Abstract turquoise dental visuals

Good alt text examples:

```text
SmileUp Dental Clinic en Panamá
```

```text
Atención dental moderna y cercana
```

```text
Paciente recibiendo orientación dental profesional
```

```text
Servicios de limpieza dental y estética oral en SmileUp
```

Avoid alt text referencing old brands.

---

## Component Design Rules

### Buttons

Primary button:

- Background: `#00B8BA` or `#007F82`
- Text: white if contrast passes, otherwise dark teal on light aqua
- Border radius: rounded, friendly, not pill-only unless brand direction supports it
- Hover: slightly darker or subtle lift

Secondary button:

- White or transparent background
- Border: `#00B8BA`
- Text: `#007F82`

### Cards

Service cards should use:

- White background
- Subtle border: `#CBEFF2`
- Soft shadow or no shadow
- Rounded corners
- Small turquoise icon or accent line
- Clear title and concise description

### Forms

Forms should include:

- Name
- Phone or WhatsApp
- Email optional if current structure requires it
- Service of interest
- Message

Use friendly labels:

```text
Nombre
WhatsApp o teléfono
Servicio de interés
Cuéntanos brevemente qué necesitas
```

Use button:

```text
Solicitar cita
```

### Navigation

Keep navigation simple:

```text
Inicio
Servicios
Nosotros
Preguntas frecuentes
Contacto
```

---

## Content Files to Inspect and Update

Inspect the project structure before editing. Likely files may include:

```text
src/config/site.ts
src/content/services.ts
src/content/faqs.ts
src/content/testimonials.ts
src/content/doctors.ts
src/content/blog.ts
src/pages/index.astro
src/layouts/Layout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/Hero.astro
src/components/Services.astro
src/components/Contact.astro
public/images/
```

Do not assume these files exist. Inspect first.

---

## Old Brand Replacement Checklist

Search for and replace references to:

```text
Clínica Derma
Clinica Derma
Derma
medical spa
dermatología
dermatologica
Dra. Edysbell Barrios
Edysbell
Odonto Panamá
Odonto Panama
odontopanama
Odonto
```

Replace with SmileUp-appropriate content. Be careful: do not blindly replace generic words if they are part of technical paths unless needed.

Run searches such as:

```bash
grep -R "Clínica Derma\|Clinica Derma\|Dra. Edysbell\|Edysbell\|Odonto Panamá\|Odonto Panama\|odontopanama" -n src public . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.astro --exclude-dir=.git
```

For Windows Git Bash:

```bash
grep -R "Clínica Derma\|Clinica Derma\|Dra. Edysbell\|Edysbell\|Odonto Panamá\|Odonto Panama\|odontopanama" -n src public . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.astro --exclude-dir=.git
```

---

## Contact and CTA Rules

Review all contact-related elements:

- WhatsApp floating button
- Header CTA
- Hero CTA
- Footer phone
- Contact form
- Email links
- Google Maps embeds
- Social media links
- Instagram link
- Web3Forms configuration
- Form action URLs
- Environment variables

Use confirmed Instagram:

```text
https://www.instagram.com/smileup.pa/
```

Do not hardcode private keys.

Do not expose sensitive environment variables.

Use placeholders when missing:

```text
[WHATSAPP PENDIENTE]
[CORREO PENDIENTE]
[DIRECCIÓN PENDIENTE]
[HORARIO PENDIENTE]
[MAPA PENDIENTE]
```

If WhatsApp number is missing, preserve the UI but mark the href/action as pending instead of sending users to a fake number.

---

## Sanity / CMS Rules

If the project uses Sanity:

1. Identify:

   - projectId
   - dataset
   - apiVersion
   - schemas
   - queries
   - blog pages
   - studio route

2. Do not change Sanity credentials without approval.
3. Do not remove the blog unless requested.
4. If the blog uses categories, use or suggest a `dental` category for this site.
5. If the current Sanity configuration is shared with other demo sites, do not restructure it without approval.
6. If CMS data is unavailable, keep static placeholders and document what needs to be connected later.

---

## Blog Strategy

If a blog already exists, adapt it to dental education and SEO.

Suggested blog topics:

1. ¿Cada cuánto debo hacerme una limpieza dental?
2. Blanqueamiento dental: qué saber antes de hacerlo
3. ¿Qué son las calzas de resina y cuándo se necesitan?
4. Diseño de sonrisa: estética dental con planificación
5. ¿Cuándo deben extraerse las terceras molares?
6. Endodoncia: cómo ayuda a conservar un diente
7. Prótesis fija o removible: diferencias básicas
8. Implantes dentales: preguntas frecuentes antes de evaluar el tratamiento

Tone must be educational, not diagnostic. Avoid medical promises.

---

## Technical Workflow

Before making changes:

1. Inspect the project structure.
2. Identify the framework.
3. Identify the styling system.
4. Identify data/config files.
5. Identify all old brand references.
6. Confirm `package.json` scripts.
7. Present a concise plan before major edits.

After changes:

1. Run formatting/lint checks if available.
2. Run build checks.
3. Confirm old references have been removed.
4. Confirm the site still builds.
5. Provide a summary of changed files.

Common commands may include:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Do not assume commands without checking `package.json`.

---

## Git and GitHub Rules

This project should be connected to a new SmileUp repository, not the old template repository.

Suggested repository:

```text
https://github.com/alfonsodelag/smile-up-dental-clinic.git
```

If a different repo already exists, use the confirmed repo instead.

Before committing:

```bash
git status
```

Make sure these are not staged:

```text
.env
.env.local
.env.production
.env.development
.env.preview
.vercel/
node_modules/
dist/
.astro/
```

Recommended `.gitignore`:

```gitignore
node_modules/
dist/
.astro/
.vercel/
.env
.env.local
.env.production
.env.development
.env.preview
*.log
.DS_Store
```

Commit messages should be clear, for example:

```bash
git commit -m "Adapt branding for SmileUp Dental Clinic"
```

```bash
git commit -m "Update SmileUp services and SEO metadata"
```

```bash
git commit -m "Replace old clinic references"
```

---

## Vercel Deployment Notes

The project should be deployable as a separate Vercel project.

Before deployment, confirm:

- GitHub repo is correct
- Build command is correct
- Output directory is `dist` unless project config says otherwise
- Environment variables are configured in Vercel
- Web3Forms key is configured if contact form is active
- No old template URLs remain
- No old branding remains
- Contact placeholders are reviewed
- SEO metadata is updated
- Sitemap and robots are correct, if present

---

## README Alignment

After adapting the project, update `README.md` to reflect:

- SmileUp Dental Clinic
- Astro + Tailwind + TypeScript stack
- Local content workflow
- Web3Forms setup
- Vercel deployment
- Contact placeholders
- Confirmed service list
- New brand palette

Do not leave README text saying “Clínica Derma” or any previous brand.

---

## Quality Checklist

Before considering the migration complete, verify:

- No visible reference to Clínica Derma remains
- No visible reference to Dra. Edysbell Barrios remains
- No visible reference to Odonto Panamá remains
- Header uses SmileUp Dental Clinic branding
- Hero copy is updated
- Services are updated with confirmed SmileUp services
- Footer is updated
- Contact section is updated
- Instagram points to `https://www.instagram.com/smileup.pa/`
- WhatsApp CTA is updated or marked pending
- SEO title and description are updated
- Open Graph metadata is updated
- Images and alt text are reviewed
- Blog works or is marked pending
- Form does not break
- Site is responsive
- Color palette follows SmileUp brand
- `npm run build` passes
- Git status is clean after commit

---

## Important Restrictions

Do not:

- Invent business information
- Invent doctors or staff
- Invent phone, address, email, or schedule
- Invent testimonials
- Invent certifications
- Promise treatment outcomes
- Use fear-based dental marketing
- Delete major functionality without approval
- Rewrite the entire architecture unnecessarily
- Commit secrets
- Upload `.env`
- Remove CMS/blog functionality without approval
- Leave old clinic branding in metadata
- Leave old clinic branding in alt text
- Leave old clinic branding in footer
- Leave old clinic branding in Open Graph tags
- Break Vercel deploy compatibility

---

## Final Response Expected After Work

After completing any meaningful change, provide:

1. Summary of what changed
2. Files modified
3. Old references removed
4. Placeholders still pending
5. Tests/build commands run
6. Build result
7. Suggested next steps
8. Any risks Alfonso should review manually

The goal is a clean, professional, scalable website conversion into a new site for **SmileUp Dental Clinic**: bright like enamel under clinical light, soft like a reassuring smile, and precise enough to convert visitors into scheduled patients.

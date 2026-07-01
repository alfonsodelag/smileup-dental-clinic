import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "jdls3x4j",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
  useCdn: true,
});

// ── Servicios ────────────────────────────────────────────────────────────────
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  category,
  description,
  longDescription,
  benefits,
  "image": image.asset->url,
  featured,
  bacEligible
}`;

// ── Blog posts dentales ──────────────────────────────────────────────────────
// El dataset "production" es compartido entre varios proyectos demo (autos,
// belleza, regalos corporativos, dental, etc.) y los posts no siempre tienen
// "project" o "categories" asignados. Para evitar mostrar contenido de otros
// clientes en el blog de SmileUp, filtramos por los slugs dentales conocidos
// en vez de usar `!defined(project)` (que también incluiría posts sin marca).
// Si se agregan artículos dentales nuevos en Sanity Studio, súmalos a esta lista.
const dentalPostSlugs = [
  "implantes-oseointegrados",
  "odontologia-digital",
  "odontopediatria-cuidado-infantil",
];

export const blogPostsQuery = `*[_type == "post" && slug.current in $slugs] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime
}`;

export const blogPostsParams = { slugs: dentalPostSlugs };

export const blogPostBySlugQuery = `*[_type == "post" && slug.current in $slugs && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readTime,
  body
}`;

// ── Types ────────────────────────────────────────────────────────────────────
export type SanityPost = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readTime?: string | number;
  body?: SanityBlock[];
};

export type SanityBlock = {
  _type: string;
  _key: string;
  style?: string;
  children?: { _type: string; _key: string; text: string; marks: string[] }[];
  markDefs?: { _key: string; _type: string; href?: string }[];
};

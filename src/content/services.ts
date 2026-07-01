export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Limpieza dental",
    slug: "limpieza-dental",
    description:
      "Cuidado preventivo para remover placa, sarro y manchas superficiales, ayudando a mantener encías sanas y una sonrisa más fresca.",
    image: "/images/services/limpieza-dental.jpg",
    featured: true,
  },
  {
    title: "Calzas de resina",
    slug: "calzas-de-resina",
    description:
      "Restauraciones estéticas para reparar dientes afectados por caries, desgaste o fracturas pequeñas, buscando conservar una apariencia natural.",
    image: "/images/services/calzas-de-resina.jpg",
    featured: true,
  },
  {
    title: "Ortodoncia",
    slug: "ortodoncia",
    description:
      "Tratamientos orientados a mejorar la posición dental, la mordida y la armonía de la sonrisa.",
    image: "/images/services/ortodoncia.jpg",
    featured: true,
  },
  {
    title: "Diseño de sonrisa",
    slug: "diseno-de-sonrisa",
    description:
      "Planificación estética de la sonrisa considerando forma, proporción, color y armonía facial.",
    image: "/images/services/diseno-de-sonrisa.jpg",
    featured: true,
  },
  {
    title: "Cirugía de 3ras molares",
    slug: "cirugia-terceras-molares",
    description:
      "Evaluación y manejo quirúrgico de terceros molares, según la necesidad clínica de cada paciente.",
    image: "/images/services/cirugia-terceras-molares.jpg",
  },
  {
    title: "Blanqueamiento",
    slug: "blanqueamiento",
    description:
      "Tratamiento estético para aclarar el tono dental y mejorar la luminosidad de la sonrisa bajo criterio profesional.",
    image: "/images/services/blanqueamiento.jpg",
    featured: true,
  },
  {
    title: "Endodoncia",
    slug: "endodoncia",
    description:
      "Tratamiento para conservar piezas dentales afectadas en su parte interna, aliviando molestias y protegiendo la función dental.",
    image: "/images/services/endodoncia.jpg",
  },
  {
    title: "Prótesis fija y removible",
    slug: "protesis-fija-removible",
    description:
      "Soluciones para reemplazar piezas dentales ausentes y recuperar función, estética y comodidad.",
    image: "/images/services/protesis-fija-removible.jpg",
  },
  {
    title: "Implantes dentales",
    slug: "implantes-dentales",
    description:
      "Alternativa moderna para reemplazar dientes perdidos mediante una solución funcional y estética, previa evaluación profesional.",
    image: "/images/services/implantes-dentales.jpg",
    featured: true,
  },
  {
    title: "Otras especialidades",
    slug: "otras-especialidades",
    description:
      "Atención complementaria según las necesidades de cada paciente y el diagnóstico realizado en consulta.",
    image: "/images/services/otras-especialidades.jpg",
  },
];

export const featuredServices = services.filter((s) => s.featured);

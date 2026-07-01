export const siteConfig = {
  businessName: "SmileUp Dental Clinic",
  shortName: "SmileUp",
  tagline: "Odontología moderna, estética y cercana para cuidar tu sonrisa.",
  description:
    "SmileUp Dental Clinic ofrece atención dental previa cita en Panamá: limpieza, calzas de resina, ortodoncia, diseño de sonrisa, blanqueamiento, endodoncia, prótesis, implantes dentales y más.",
  url: "https://demo-smileup-dental-clinic-alfonsodelag.vercel.app",
  phone: "6672-1715",
  whatsapp: "50766721715",
  email: "smileup.dentalpa@gmail.com",
  address: "Calle 68 San Francisco, Plaza La Peatonal 68, Piso 1, Ciudad de Panamá",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+La+Peatonal+68+Calle+68+San+Francisco+Panama",
  mapsEmbedUrl: "https://www.google.com/maps?q=Plaza+La+Peatonal+68,+Calle+68+San+Francisco,+Panam%C3%A1&output=embed",
  appointmentNote: "Atención previa cita.",
  hours: {
    weekdays: "Lun – Vie: 10:00 a.m. – 6:00 p.m.",
    saturday: "Sáb: 8:00 a.m. – 12:00 p.m.",
    sunday: "",
    emergency: "Horario extendido para urgencias, previa cita."
  },
  social: {
    instagram: "https://www.instagram.com/smileup.pa/",
    facebook: "",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "SmileUp Dental Clinic | Clínica Dental en Panamá",
    description:
      "SmileUp Dental Clinic ofrece atención dental previa cita en Panamá: limpieza, calzas de resina, ortodoncia, diseño de sonrisa, blanqueamiento, endodoncia, prótesis, implantes dentales y más.",
    keywords: [
      "clínica dental en Panamá",
      "odontología en Panamá",
      "dentista en Panamá",
      "limpieza dental Panamá",
      "calzas de resina Panamá",
      "ortodoncia Panamá",
      "diseño de sonrisa Panamá",
      "blanqueamiento dental Panamá",
      "endodoncia Panamá",
      "implantes dentales Panamá",
      "prótesis dental Panamá",
      "cirugía de terceras molares Panamá",
      "SmileUp Dental Clinic",
      "SmileUp Panamá"
    ]
  },
  colors: {
    primary: "#00B8BA",
    primaryDark: "#007F82",
    primaryDeep: "#005F61",
    primarySoft: "#DFF8F8",
    secondary: "#87D1E4",
    secondarySoft: "#E8F8FC",
    background: "#F9FFFA",
    surface: "#FFFFFF",
    surfaceSoft: "#F2FCFC",
    text: "#123234",
    textMuted: "#5B7476",
    border: "#CBEFF2",
    white: "#FFFFFF"
  }
} as const;

// Si en algún momento el número de WhatsApp queda sin definir, el CTA
// apunta al perfil de Instagram para no dejar un enlace roto.
export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}`
  : siteConfig.social.instagram;

export function whatsappUrlFor(service?: string): string {
  if (!siteConfig.whatsapp) return siteConfig.social.instagram;
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  const message = `Hola SmileUp Dental Clinic, quiero agendar una cita.${
    service ? ` Me interesa recibir información sobre ${service}.` : ""
  }`;
  return `${base}?text=${encodeURIComponent(message)}`;
}

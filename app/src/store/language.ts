import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'es';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);

export const translations = {
  en: {
    nav: {
      intro: "INTRO",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
      process: "PROCESS",
      contact: "CONTACT",
      login: "LOG IN",
      logout: "LOG OUT",
      dashboard: "DASHBOARD"
    },
    hero: {
      driving: "DRIVING",
      scalable: "SCALABLE",
      impact: "IMPACT",
      desc: "Strategic Operations Leader specialized in executing complex visions and implementing high-impact development models.",
      view_projects: "View Projects",
      get_in_touch: "Get in Touch",
      vision: "Vision",
      vision_desc: "Strategic Execution",
      urban: "Luis",
      urban_desc: "Urban Intelligence"
    },
    experience: {
      title: "ALTRUISTIC EXPERIENCE",
      subtitle: "PROFESSIONAL TRACK RECORD & LEADERSHIP",
      table: {
        role: "Role / Project",
        company: "Company",
        period: "Period",
        location: "Location"
      },
      education: "EDUCATION",
      competencies: "COMPETENCIES"
    },
    process: {
      title: "STRATEGIC",
      title_accent: "PROCESS",
      steps: [
        {
          title: "ANALYSIS",
          desc: "Deep dive into operational bottlenecks, system inefficiencies, and growth opportunities within the urban or organizational landscape."
        },
        {
          title: "STRATEGY",
          desc: "Designing robust architectures for scalable impact, combining technical precision with strategic foresight to meet complex objectives."
        },
        {
          title: "EXECUTION",
          desc: "High-precision implementation of defined roadmaps, managing cross-functional teams and complex variables with agility."
        },
        {
          title: "OPTIMIZATION",
          desc: "Continuous measurement and refinement of results to ensure long-term sustainability and maximum impact for all stakeholders."
        }
      ]
    },
    projects: {
      title: "STRATEGIC PROJECTS",
      subtitle: "Innovation // Execution // Impact",
      case_study: "Case Study"
    },
    contact: {
      title: "LET'S",
      title_mid: "EXECUTE",
      title_accent: "VISION.",
      desc: "Available for strategic advisory, operational leadership, and high-impact development initiatives.",
      location: "Location",
      email: "Email",
      card: "DIGITAL CARD",
      button: "GET IN TOUCH"
    }
  },
  es: {
    nav: {
      intro: "INICIO",
      experience: "EXPERIENCIA",
      projects: "PROYECTOS",
      process: "PROCESO",
      contact: "CONTACTO",
      login: "INICIAR SESIÓN",
      logout: "CERRAR SESIÓN",
      dashboard: "PANEL"
    },
    hero: {
      driving: "IMPULSANDO",
      scalable: "IMPACTO",
      impact: "ESCALABLE",
      desc: "Líder de Operaciones Estratégicas especializado en ejecutar visiones complejas e implementar modelos de desarrollo de alto impacto.",
      view_projects: "Ver Proyectos",
      get_in_touch: "Contacto",
      vision: "Visión",
      vision_desc: "Ejecución Estratégica",
      urban: "Luis",
      urban_desc: "Inteligencia Urbana"
    },
    experience: {
      title: "EXPERIENCIA ALTRUISTA",
      subtitle: "TRAYECTORIA PROFESIONAL Y LIDERAZGO",
      table: {
        role: "Rol / Proyecto",
        company: "Empresa",
        period: "Período",
        location: "Ubicación"
      },
      education: "EDUCACIÓN",
      competencies: "COMPETENCIAS"
    },
    process: {
      title: "PROCESO",
      title_accent: "ESTRATÉGICO",
      steps: [
        {
          title: "ANÁLISIS",
          desc: "Inmersión profunda en cuellos de botella operativos, ineficiencias del sistema y oportunidades de crecimiento dentro del entorno urbano u organizacional."
        },
        {
          title: "ESTRATEGIA",
          desc: "Diseño de arquitecturas robustas para un impacto escalable, combinando precisión técnica con previsión estratégica para cumplir objetivos complejos."
        },
        {
          title: "EJECUCIÓN",
          desc: "Implementación de alta precisión de hojas de ruta definidas, gestionando equipos multifuncionales y variables complejas con agilidad."
        },
        {
          title: "OPTIMIZACIÓN",
          desc: "Medición y refinamiento continuo de resultados para asegurar la sostenibilidad a largo plazo y el máximo impacto para todos los interesados."
        }
      ]
    },
    projects: {
      title: "PROYECTOS ESTRATÉGICOS",
      subtitle: "Innovación // Ejecución // Impacto",
      case_study: "Caso de Estudio"
    },
    contact: {
      title: "VAMOS A",
      title_mid: "EJECUTAR",
      title_accent: "VISIÓN.",
      desc: "Disponible para asesoría estratégica, liderazgo operativo e iniciativas de desarrollo de alto impacto.",
      location: "Ubicación",
      email: "Correo",
      card: "TARJETA DIGITAL",
      button: "PONTE EN CONTACTO"
    }
  }
};

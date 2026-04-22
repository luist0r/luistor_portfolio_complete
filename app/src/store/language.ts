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
      roles: {
        manager: "General Manager",
        founder: "Founder & Curator",
        impact: "Social Impact Lead",
        organic: "Founder & Leader",
        advisor: "Political Advisor"
      },
      descriptions: {
        manager: "Designed and implemented local economic development and sustainable agriculture programs, improving productivity and climate resilience for 700+ direct beneficiaries.",
        founder: "Led the Jalapa Hub during a critical growth phase, scaling local impact projects and strengthening the community of young leaders.",
        impact: "Dedicated thousands of hours to community development, altruistic initiatives, and social welfare projects across Guatemala, focusing on education and economic empowerment.",
        organic: "Built and led a team introducing organic agricultural practices across Jalapa, Jutiapa, and Santa Rosa.",
        advisor: "Designed and implemented political communication and positioning strategies at the regional level, increasing voter intention by 35%."
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
      case_study: "Case Study",
      items: {
        plus_plan: {
          tag: "DRONE TECH & ANALYSIS",
          desc: "Land-analysis solution combining drone technology with high-precision 3D models and image-processing algorithms."
        },
        gt_intel: {
          tag: "TERRITORIAL INTELLIGENCE",
          desc: "Strategic intelligence dashboard for monitoring national security, infrastructure risk, and territorial dynamics."
        },
        mision_arg: {
          tag: "URBAN LAB & TECH HUB",
          desc: "Exploration of the Argentinian tech ecosystem, focusing on smart cities, urban laboratories, and the scaling of LatAm tech unicorns."
        },
        fuds: {
          tag: "SUSTAINABLE AGRI",
          desc: "Leading-edge organic agricultural practices implementation across multiple regions, increasing production by 50%."
        },
        gpt: {
          tag: "AI INVESTMENT SYSTEM",
          desc: "Monthly AI-driven asset selection model using macro-economic analysis and institutional flows to outperform benchmarks."
        },
        global: {
          tag: "LEADERSHIP & VISION",
          desc: "Strategic advisory and operational leadership for multi-stakeholder initiatives and high-impact economic models."
        }
      }
    },
    contact: {
      title: "LET'S",
      title_accent: "CONNECT",
      subtitle: "STRATEGIC PARTNERSHIPS, TECH VENTURES, OR SYSTEMIC SOLUTIONS.",
      form: {
        name: "NAME",
        email: "EMAIL",
        message: "MESSAGE",
        message_placeholder: "HOW CAN WE COLLABORATE?",
        send: "SEND MESSAGE"
      }
    },
    footer: {
      desc: "Strategic Operations Leader specialized in executing complex visions and implementing high-impact development models.",
      navigate: "NAVIGATE",
      talk: "LET'S TALK",
      rights: "© 2024 Luis Torres Portfolio",
      location: "Guatemala / Global"
    },
    chat: {
      support: "STUDIO SUPPORT",
      login_prompt: "Log in to chat with our studio team",
      loading: "Loading messages...",
      no_messages: "No messages yet.",
      ask_anything: "Ask us anything about commissions!",
      placeholder: "Type your message...",
      login: "LOG IN"
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
      roles: {
        manager: "Gerente General",
        founder: "Fundador y Curador",
        impact: "Líder de Impacto Social",
        organic: "Fundador y Líder",
        advisor: "Asesor Político"
      },
      descriptions: {
        manager: "Diseñó e implementó programas de desarrollo económico local y agricultura sostenible, mejorando la productividad y resiliencia climática para más de 700 beneficiarios directos.",
        founder: "Lideró el Hub de Jalapa durante una fase crítica de crecimiento, escalando proyectos de impacto local y fortaleciendo la comunidad de jóvenes líderes.",
        impact: "Dedicó miles de horas al desarrollo comunitario, iniciativas altruistas y proyectos de bienestar social en toda Guatemala, centrándose en la educación y el empoderamiento económico.",
        organic: "Construyó y lideró un equipo introduciendo prácticas agrícolas orgánicas en Jalapa, Jutiapa y Santa Rosa.",
        advisor: "Diseñó e implementó estrategias regionales de comunicación y posicionamiento político, incrementando la intención de voto en un 35%."
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
      case_study: "Caso de Estudio",
      items: {
        plus_plan: {
          tag: "TECNOLOGÍA DE DRONES Y ANÁLISIS",
          desc: "Solución de análisis de suelo combinando tecnología de drones con modelos 3D de alta precisión y algoritmos de procesamiento de imágenes."
        },
        gt_intel: {
          tag: "INTELIGENCIA TERRITORIAL",
          desc: "Panel de inteligencia estratégica para el monitoreo de seguridad nacional, riesgo de infraestructura y dinámica territorial."
        },
        mision_arg: {
          tag: "LABORATORIO URBANO Y HUB TECNOLÓGICO",
          desc: "Exploración del ecosistema tecnológico argentino, centrado en ciudades inteligentes, laboratorios urbanos y el escalado de unicornios tecnológicos en LatAm."
        },
        fuds: {
          tag: "AGRICULTURA SOSTENIBLE",
          desc: "Implementación de prácticas agrícolas orgánicas de vanguardia en múltiples regiones, aumentando la producción en un 50%."
        },
        gpt: {
          tag: "SISTEMA DE INVERSIÓN IA",
          desc: "Modelo mensual de selección de activos impulsado por IA que utiliza análisis macroeconómico y flujos institucionales para superar los índices de referencia."
        },
        global: {
          tag: "LIDERAZGO Y VISIÓN",
          desc: "Asesoría estratégica y liderazgo operativo para iniciativas de múltiples partes interesadas y modelos económicos de alto impacto."
        }
      }
    },
    contact: {
      title: "VAMOS A",
      title_accent: "CONECTAR",
      subtitle: "ALIANZAS ESTRATÉGICAS, EMPRENDIMIENTOS TECNOLÓGICOS O SOLUCIONES SISTÉMICAS.",
      form: {
        name: "NOMBRE",
        email: "CORREO",
        message: "MENSAJE",
        message_placeholder: "¿CÓMO PODEMOS COLABORAR?",
        send: "ENVIAR MENSAJE"
      }
    },
    footer: {
      desc: "Líder de Operaciones Estratégicas especializado en ejecutar visiones complejas e implementar modelos de desarrollo de alto impacto.",
      navigate: "NAVEGAR",
      talk: "HABLEMOS",
      rights: "© 2024 Portafolio de Luis Torres",
      location: "Guatemala / Global"
    },
    chat: {
      support: "SOPORTE DEL ESTUDIO",
      login_prompt: "Inicia sesión para chatear con nuestro equipo",
      loading: "Cargando mensajes...",
      no_messages: "No hay mensajes aún.",
      ask_anything: "¡Pregúntanos cualquier cosa sobre comisiones!",
      placeholder: "Escribe tu mensaje...",
      login: "INICIAR SESIÓN"
    }
  }
};

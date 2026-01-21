import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

export interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly LANGUAGE_KEY = 'portfolio-language';

  currentLanguage = signal<Language>('es');

  private translations: Translations = {
    // Navigation
    'nav.home': {
      es: 'Inicio',
      en: 'Home',
    },
    'nav.skills': {
      es: 'Habilidades',
      en: 'Skills',
    },
    'nav.projects': {
      es: 'Proyectos',
      en: 'Projects',
    },
    'nav.experience': {
      es: 'Experiencia',
      en: 'Experience',
    },
    'nav.education': {
      es: 'Educación',
      en: 'Education',
    },
    'nav.certificates': {
      es: 'Certificados',
      en: 'Certificates',
    },
    'nav.contact': {
      es: 'Contacto',
      en: 'Contact',
    },

    // Profile
    'profile.name': {
      es: 'Francisco Castro',
      en: 'Francisco Castro',
    },
    'profile.title': {
      es: 'Systems Engineer | Full Stack Developer',
      en: 'Systems Engineer | Full Stack Developer',
    },
    'profile.description': {
      es: 'Apasionado por el desarrollo de software y la innovación tecnológica, con experiencia en crear soluciones eficientes y escalables.',
      en: 'Passionate about software development and technological innovation, with experience in creating efficient and scalable solutions.',
    },
    'profile.downloadCv': {
      es: 'Descargar CV',
      en: 'Download CV',
    },

    // Controls
    'controls.theme.light': {
      es: 'Modo Claro',
      en: 'Light Mode',
    },
    'controls.theme.dark': {
      es: 'Modo Oscuro',
      en: 'Dark Mode',
    },
    'controls.language.en': {
      es: 'English',
      en: 'English',
    },
    'controls.language.es': {
      es: 'Español',
      en: 'Español',
    },

    // Skills
    'skills.title': {
      es: 'Habilidades Técnicas',
      en: 'Technical Skills',
    },
    'skills.subtitle': {
      es: 'Tecnologías y herramientas que domino',
      en: 'Technologies and tools I master',
    },
    'skills.description': {
      es: 'Aquí están las principales tecnologías y herramientas con las que trabajo regularmente. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.',
      en: 'Here are the main technologies and tools I work with regularly. I am always learning new technologies and improving my skills.',
    },
    'skills.professional': {
      es: 'Habilidades Profesionales',
      en: 'Professional Skills',
    },
    'skills.frontend': {
      es: 'Frontend',
      en: 'Frontend',
    },
    'skills.backend': {
      es: 'Backend',
      en: 'Backend',
    },
    'skills.cloud': {
      es: 'Nube y DevOps',
      en: 'Cloud & DevOps',
    },
    'skills.database': {
      es: 'Base de Datos',
      en: 'Database',
    },
    'skills.architecture': {
      es: 'Arquitectura y Patrones',
      en: 'Architecture & Patterns',
    },
    'skills.leadership': {
      es: 'Liderazgo',
      en: 'Leadership',
    },
    'skills.commitment': {
      es: 'Compromiso',
      en: 'Commitment',
    },
    'skills.problemSolving': {
      es: 'Resolución de Problemas',
      en: 'Problem Solving',
    },
    'skills.teamwork': {
      es: 'Trabajo en Equipo',
      en: 'Teamwork',
    },
    'skills.adaptability': {
      es: 'Adaptabilidad',
      en: 'Adaptability',
    },
    'skills.innovation': {
      es: 'Innovación',
      en: 'Innovation',
    },

    // Projects
    'projects.title': {
      es: 'Mis Proyectos',
      en: 'My Projects',
    },
    'projects.subtitle': {
      es: 'Aquí hay algunos de mis proyectos que muestran mis habilidades y experiencia. Siempre estoy buscando nuevos desafíos y oportunidades para crecer como desarrollador.',
      en: 'Here are some of my projects that showcase my skills and experience. I am always looking for new challenges and opportunities to grow as a developer.',
    },
    'projects.featured': {
      es: 'Proyectos Destacados',
      en: 'Featured Projects',
    },
    'projects.other': {
      es: 'Otros Proyectos',
      en: 'Other Projects',
    },
    'projects.technologies': {
      es: 'Tecnologías:',
      en: 'Technologies:',
    },
    'projects.code': {
      es: 'Código',
      en: 'Code',
    },
    'projects.demo': {
      es: 'Ver Demo',
      en: 'View Demo',
    },
    'projects.notDeployed': {
      es: 'No desplegado',
      en: 'Not Deployed',
    },

    // Project descriptions
    'projects.hermesBanking.description': {
      es: 'Sistema bancario empresarial completo con ASP.NET Core MVC que incluye gestión de usuarios, cuentas de ahorro, tarjetas de crédito, préstamos, transacciones y panel administrativo integral. Implementa Onion Architecture con CQRS, MediatR y JWT. *No desplegado por requerir infraestructura bancaria especializada y servicios de pago certificados.*',
      en: 'Complete enterprise banking system with ASP.NET Core MVC including user management, savings accounts, credit cards, loans, transactions and comprehensive admin panel. Implements Onion Architecture with CQRS, MediatR and JWT. *Not deployed due to requiring specialized banking infrastructure and certified payment services.*',
    },
    'projects.countryApp.description': {
      es: 'Aplicación web para encontrar países y sus informaciones por regiones, países y capitales. Lista cada país respectivamente y permite ver más información como bandera, idiomas, moneda, etc.',
      en: 'Web application to find countries and their information by regions, countries and capitals. Lists each country respectively and allows viewing more information such as flag, languages, currency, etc.',
    },
    'projects.portfolio.description': {
      es: 'Portafolio personal desarrollado con Angular 19, incluye partículas interactivas, diseño responsive, sección de skills con rating system y navegación SPA fluida.',
      en: 'Personal portfolio developed with Angular 19, includes interactive particles, responsive design, skills section with rating system and smooth SPA navigation.',
    },
    'projects.itlaNetworking.description': {
      es: 'Red social completa con ASP.NET Core MVC: autenticación, gestión de amistades, publicaciones multimedia y juego Battleship integrado. Implementa Onion Architecture y Repository Pattern.',
      en: 'Complete social network with ASP.NET Core MVC: authentication, friendship management, multimedia posts and integrated Battleship game. Implements Onion Architecture and Repository Pattern.',
    },
    'projects.appCenar.description': {
      es: 'Aplicación web completa para gestión de pedidos de delivery que conecta clientes, comercios y repartidores en una plataforma integrada. Arquitectura MVC con Node.js y Express.',
      en: 'Complete web application for delivery order management that connects customers, businesses and delivery drivers in an integrated platform. MVC architecture with Node.js and Express.',
    },

    // Education
    'education.title': {
      es: 'Educación',
      en: 'Education',
    },
    'education.subtitle': {
      es: 'Tengo una sólida formación educativa en ingeniería de sistemas y programación. Siempre estoy buscando nuevas oportunidades para aprender y crecer.',
      en: 'I have a solid educational background in systems engineering and programming. I am always looking for new opportunities to learn and grow.',
    },
    'education.degree.title': {
      es: 'Tecnología en Desarrollo de Software',
      en: 'Technology in Software Development',
    },
    'education.degree.subtitle': {
      es: 'Carrera Técnica',
      en: 'Technical Career',
    },
    'education.degree.institution': {
      es: 'Instituto Tecnológico de las Américas (ITLA)',
      en: 'Instituto Tecnológico de las Américas (ITLA)',
    },
    'education.degree.period': {
      es: '2023 - Actualmente Cursando',
      en: '2023 - Currently Enrolled',
    },
    'education.degree.location': {
      es: 'República Dominicana',
      en: 'Dominican Republic',
    },
    'education.degree.description': {
      es: 'Formación integral en desarrollo de software, programación, bases de datos, arquitectura de sistemas y metodologías ágiles.',
      en: 'Comprehensive training in software development, programming, databases, system architecture and agile methodologies.',
    },
    'education.status.current': {
      es: 'En curso',
      en: 'In Progress',
    },
    'education.status.completed': {
      es: 'Completado',
      en: 'Completed',
    },

    // Experience
    'experience.title': {
      es: 'Experiencia Profesional',
      en: 'Professional Experience',
    },
    'experience.subtitle': {
      es: 'Mi trayectoria laboral y los roles que he desempeñado en el ámbito tecnológico.',
      en: 'My career path and the roles I have played in the technology field.',
    },
    'experience.minecon.role': {
      es: 'Junior Software Developer',
      en: 'Junior Software Developer',
    },
    'experience.minecon.jobType': {
      es: 'Jornada completa',
      en: 'Full-time',
    },
    'experience.minecon.company': {
      es: 'MINECON, S.A',
      en: 'MINECON, S.A',
    },
    'experience.minecon.period': {
      es: 'Enero 2026 - Presente',
      en: 'January 2026 - Present',
    },
    'experience.minecon.location': {
      es: 'Santo Domingo Oeste, República Dominicana',
      en: 'Santo Domingo Oeste, Dominican Republic',
    },
    'experience.minecon.locationType': {
      es: 'Presencial',
      en: 'On-site',
    },
    'experience.minecon.description': {
      es: 'Como desarrollador de software, participo en el desarrollo e integración de soluciones tecnológicas para distintos sistemas y áreas dentro del grupo empresarial.\n\nMe enfoco en:\n• Desarrollo de aplicaciones y servicios backend utilizando C# .NET, orientados a procesos internos y a la integración entre sistemas.\n• Creación de APIs y servicios web (REST/SOAP) para la comunicación entre aplicaciones propias, sistemas externos y el ERP.\n• Desarrollo de interfaces web con React, enfocadas en herramientas operativas y administrativas.\n• Integración y personalización de Microsoft Dynamics 365 Business Central (AL) según las necesidades de la empresa y compañías asociadas.\n• Automatización de procesos de negocio relacionados con operaciones, logística, inventario y contabilidad.\n• Soporte técnico, mantenimiento evolutivo y mejora continua de las soluciones implementadas.\n• Documentación técnica y funcional para asegurar continuidad, escalabilidad y soporte.',
      en: 'As a software developer, I participate in the development and integration of technological solutions for different systems and areas within the business group.\n\nI focus on:\n• Development of backend applications and services using C# .NET, oriented to internal processes and system integration.\n• Creation of APIs and web services (REST/SOAP) for communication between proprietary applications, external systems, and the ERP.\n• Development of web interfaces with React, focused on operational and administrative tools.\n• Integration and customization of Microsoft Dynamics 365 Business Central (AL) according to the needs of the company and associated companies.\n• Automation of business processes related to operations, logistics, inventory and accounting.\n• Technical support, evolutionary maintenance and continuous improvement of implemented solutions.\n• Technical and functional documentation to ensure continuity, scalability and support.',
    },

    // Certificates
    'certificates.title': {
      es: 'Certificados',
      en: 'Certificates',
    },
    'certificates.subtitle': {
      es: 'He obtenido varios certificados que demuestran mis habilidades y conocimientos en programación y desarrollo de software. Siempre estoy buscando nuevas oportunidades para aprender y crecer.',
      en: 'I have obtained several certificates that demonstrate my skills and knowledge in programming and software development. I am always looking for new opportunities to learn and grow.',
    },
    'certificates.itla': {
      es: 'Educación Continua',
      en: 'Continuing Education',
    },
    'certificates.itla.name': {
      es: 'ITLA',
      en: 'ITLA',
    },
    'certificates.udemy': {
      es: 'Cursos Udemy',
      en: 'Udemy Courses',
    },

    // Contact
    'contact.title': {
      es: 'Hablemos de tu proyecto',
      en: "Let's talk about your project",
    },
    'contact.subtitle': {
      es: '¿Tienes una idea? Me encanta colaborar en proyectos desafiantes. Contactémonos y hagamos realidad tu visión.',
      en: "Do you have an idea? I love collaborating on challenging projects. Let's get in touch and make your vision a reality.",
    },
    'contact.info.title': {
      es: 'Información de Contacto',
      en: 'Contact Information',
    },
    'contact.form.title': {
      es: 'Envíame un mensaje',
      en: 'Send me a message',
    },
    'contact.form.success.title': {
      es: '¡Mensaje enviado!',
      en: 'Message sent!',
    },
    'contact.form.success.message': {
      es: 'Te contactaré pronto. Gracias por escribirme.',
      en: 'I will contact you soon. Thank you for writing to me.',
    },
    'contact.form.success.another': {
      es: 'Enviar otro mensaje',
      en: 'Send another message',
    },
    'contact.form.error.title': {
      es: 'Error al enviar',
      en: 'Error sending',
    },
    'contact.form.error.message': {
      es: 'Hubo un problema enviando tu mensaje. Por favor intenta nuevamente.',
      en: 'There was a problem sending your message. Please try again.',
    },
    'contact.form.name.label': {
      es: 'Nombre completo *',
      en: 'Full name *',
    },
    'contact.form.name.placeholder': {
      es: 'Tu nombre',
      en: 'Your name',
    },
    'contact.form.email.label': {
      es: 'Correo electrónico *',
      en: 'Email address *',
    },
    'contact.form.email.placeholder': {
      es: 'tu@email.com',
      en: 'your@email.com',
    },
    'contact.form.subject.label': {
      es: 'Asunto *',
      en: 'Subject *',
    },
    'contact.form.subject.placeholder': {
      es: '¿En qué te puedo ayudar?',
      en: 'How can I help you?',
    },
    'contact.form.message.label': {
      es: 'Mensaje *',
      en: 'Message *',
    },
    'contact.form.message.placeholder': {
      es: 'Cuéntame sobre tu proyecto, ideas, o cualquier cosa en la que pueda ayudarte...',
      en: 'Tell me about your project, ideas, or anything I can help you with...',
    },
    'contact.form.submit': {
      es: 'Enviar mensaje',
      en: 'Send message',
    },
    'contact.form.sending': {
      es: 'Enviando...',
      en: 'Sending...',
    },
    'contact.info.phone': {
      es: 'Teléfono',
      en: 'Phone',
    },
    'contact.info.email': {
      es: 'Email',
      en: 'Email',
    },
    'contact.info.location': {
      es: 'Ubicación',
      en: 'Location',
    },
    'contact.info.social': {
      es: 'También puedes encontrarme en:',
      en: 'You can also find me at:',
    },
    'contact.cta.title': {
      es: '¿Listo para comenzar?',
      en: 'Ready to get started?',
    },
    'contact.cta.description': {
      es: 'Ya sea un proyecto personal, empresarial o simplemente quieres saludar, siempre estoy disponible para una buena conversación sobre desarrollo.',
      en: "Whether it's a personal project, business venture, or just want to say hello, I'm always available for a good conversation about development.",
    },
    'contact.cta.call': {
      es: 'Llamar ahora',
      en: 'Call now',
    },
    'contact.cta.email': {
      es: 'Enviar email',
      en: 'Send email',
    },
    'certificates.itla.status': {
      es: 'Certificado ITLA',
      en: 'ITLA Certificate',
    },
    'certificates.udemy.status': {
      es: 'Curso Online',
      en: 'Online Course',
    },

    // Certificate issuers
    'certificates.itla.issuer': {
      es: 'ITLA - Educación Continua',
      en: 'ITLA - Continuing Education',
    },
    'certificates.udemy.issuer': {
      es: 'Udemy',
      en: 'Udemy',
    },

    // Certificate details
    'certificates.csharpBasic.title': {
      es: 'Curso C# Básico',
      en: 'Basic C# Course',
    },
    'certificates.csharpBasic.date': {
      es: 'Enero - Marzo 2025',
      en: 'January - March 2025',
    },
    'certificates.csharpIntermediate.title': {
      es: 'Curso C# Intermedio',
      en: 'Intermediate C# Course',
    },
    'certificates.csharpIntermediate.date': {
      es: 'Abril - Junio 2025',
      en: 'April - June 2025',
    },
    'certificates.csharpAdvanced.title': {
      es: 'Curso C# Avanzado',
      en: 'Advanced C# Course',
    },
    'certificates.csharpAdvanced.date': {
      es: 'Julio - Actualmente cursando',
      en: 'July - Currently Enrolled',
    },
    'certificates.angular.title': {
      es: 'Angular de Cero a Experto (Angular 19+)',
      en: 'Angular - The Complete Guide (Angular 19+)',
    },
    'certificates.angular.date': {
      es: 'Abril - Actualmente Cursando',
      en: 'April - Currently Enrolled',
    },
    'certificates.python.title': {
      es: 'Python Básico desde 0',
      en: 'Python Basic from 0',
    },
    'certificates.python.date': {
      es: '4 abril - 10 abril 2025',
      en: 'April 4 - April 10, 2025',
    },
  };

  constructor() {
    this.loadLanguageFromStorage();
  }

  private loadLanguageFromStorage(): void {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      this.currentLanguage.set(savedLanguage);
    }
  }

  toggleLanguage(): void {
    const newLanguage: Language = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.setLanguage(newLanguage);
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem(this.LANGUAGE_KEY, language);
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }

    return translation[this.currentLanguage()] || key;
  }

  // Método helper para usar en templates
  t(key: string): string {
    return this.translate(key);
  }

  isSpanish(): boolean {
    return this.currentLanguage() === 'es';
  }

  isEnglish(): boolean {
    return this.currentLanguage() === 'en';
  }
}

import type { TimelineItem, ProjectItem, VolunteerItem, SportItem } from "@/types";

export const personalInfo = {
  name: "Gabriel Pizarro Rivera",
  title: "Ingeniero Civil Informático",
  university: "Pontificia Universidad Católica de Valparaíso",
  location: "Valparaíso, Chile",
  email: "gabriel.pizarro@pucv.cl",
  linkedin: "https://www.linkedin.com/in/gabriel-pizarro-rivera/",
  github: "https://github.com/GaboPizarro",
  bio: "Recién Titulado de Ingeniería Civil Informática apasionado por el desarrollo de software, la inteligencia artificial y la innovación tecnológica. Busco crear soluciones que generen impacto real.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  skills: ["TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Machine Learning"],
};

export const educacionData: TimelineItem[] = [
  {
    id: "edu-1",
    title: "Ingeniería Civil Informática",
    institution: "Pontificia Universidad Católica de Valparaíso",
    location: "Valparaíso, Chile",
    period: "2021 — 2025",
    description: "Formación en ciencias de la computación, ingeniería de software, sistemas distribuidos e inteligencia artificial. Participación activa en proyectos de investigación de la Escuela de Ingeniería Informática.",
    tags: ["Algoritmos", "Sistemas Operativos", "IA", "BD", "Redes"],
    photos: [
      { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop", alt: "Campus universitario", caption: "Campus Curauma, PUCV" },
      { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop", alt: "Biblioteca", caption: "Biblioteca central" },
      { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop", alt: "Laboratorio", caption: "Laboratorio de computación" },
    ],
  },
  {
    id: "edu-2",
    title: "Licenciatura en Ciencias de la Ingeniería",
    institution: "Pontificia Universidad Católica de Valparaíso",
    location: "Valparaíso, Chile",
    period: "2019 — 2021",
    description: "Estudios de bachillerato en ciencias exactas con mención en matemáticas y física. Base sólida para el desarrollo de pensamiento lógico-matemático.",
    tags: ["Cálculo", "Álgebra Lineal", "Física", "Estadística"],
    photos: [
      { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop", alt: "Ceremonia", caption: "Ceremonia de bienvenida 2019" },
      { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop", alt: "Sala de clases", caption: "Sala de clases PUCV" },
      { src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=500&fit=crop", alt: "Trabajo en equipo", caption: "Proyectos grupales" },
    ],
  },
  {
    id: "edu-3",
    title: "Enseñanza Media Científico-Humanista",
    institution: "Colegio San Ignacio El Bosque",
    location: "Santiago, Chile",
    period: "2015 — 2018",
    description: "Graduado con honores. Participación en olimpiadas de matemática y robótica escolar. Delegado de curso durante cuatro años consecutivos.",
    tags: ["Matemática", "Física", "Robótica", "Liderazgo"],
    photos: [
      { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop", alt: "Colegio", caption: "San Ignacio El Bosque" },
      { src: "https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=800&h=500&fit=crop", alt: "Olimpiadas", caption: "Olimpiadas de Matemática 2017" },
      { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=500&fit=crop", alt: "Robótica", caption: "Competencia de robótica escolar" },
    ],
  },
];

export const practicasData: TimelineItem[] = [
  {
    id: "prac-1",
    title: "Práctica Profesional – Ingeniero de Software",
    institution: "Bci Tecnología",
    location: "Santiago, Chile",
    period: "Ene 2024 — Mar 2024",
    description: "Desarrollo de microservicios en Node.js y TypeScript para el sistema de pagos del banco. Implementación de APIs REST con autenticación OAuth2. Reducción del 30% en latencia de transacciones mediante optimización de queries SQL.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "OAuth2"],
    photos: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop", alt: "Oficinas Bci", caption: "Torre Bci, Santiago" },
      { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop", alt: "Trabajo en equipo", caption: "Daily stand-up con el equipo" },
      { src: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=500&fit=crop", alt: "Code review", caption: "Sesión de code review" },
    ],
  },
  {
    id: "prac-2",
    title: "Práctica Laboral – Desarrollador Full Stack",
    institution: "Startup Fintual",
    location: "Santiago, Chile",
    period: "Ene 2023 — Mar 2023",
    description: "Desarrollo de funcionalidades en el panel de inversiones con React y Ruby on Rails. Implementación de visualizaciones de datos financieros con D3.js. Integración con APIs de bolsas de valores latinoamericanas.",
    tags: ["React", "Ruby on Rails", "D3.js", "PostgreSQL", "AWS"],
    photos: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop", alt: "Oficinas Fintual", caption: "Oficinas Fintual, Providencia" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", alt: "Dashboard financiero", caption: "Dashboard de inversiones" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop", alt: "Análisis datos", caption: "Análisis de datos financieros" },
    ],
  },
];

export const proyectosData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "ChileTraffic AI",
    description: "Sistema de predicción de tráfico urbano para Santiago usando ML",
    longDescription: "Modelo de machine learning que predice la congestión vehicular en tiempo real usando datos del DTPM y sensores IoT. Precisión del 87% en predicciones a 30 minutos. Desplegado como API REST consumida por 3 municipalidades.",
    tags: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    year: "2024",
    github: "https://github.com/GaboPizarro/chile-traffic-ai",
    demo: "https://chile-traffic-ai.vercel.app",
    photos: [
      { src: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&h=500&fit=crop", alt: "Tráfico", caption: "Mapa de calor tráfico Santiago" },
      { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop", alt: "Dashboard", caption: "Dashboard de monitoreo" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop", alt: "ML Model", caption: "Arquitectura del modelo ML" },
    ],
  },
  {
    id: "proj-2",
    title: "EduCL Platform",
    description: "Plataforma de e-learning para estudiantes vulnerables en Chile",
    longDescription: "Plataforma educativa con IA que adapta el contenido al ritmo de aprendizaje de cada estudiante. Incluye detección automática de dificultades de aprendizaje. Utilizada por 1,200 estudiantes en 8 colegios municipales de la RM.",
    tags: ["Next.js", "TypeScript", "Prisma", "OpenAI API", "Vercel"],
    year: "2023",
    github: "https://github.com/GaboPizarro/edu-cl",
    photos: [
      { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop", alt: "Educación", caption: "Interfaz de aprendizaje" },
      { src: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&h=500&fit=crop", alt: "Estudiantes", caption: "Estudiantes usando la plataforma" },
      { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop", alt: "Analytics", caption: "Panel de analytics educativo" },
    ],
  },
  {
    id: "proj-3",
    title: "BlockVote Chile",
    description: "Sistema de votación electrónica basado en blockchain",
    longDescription: "Prototipo de sistema de votación electrónica usando Ethereum y contratos inteligentes. Garantiza anonimato y verificabilidad. Proyecto de investigación en colaboración con el SERVEL.",
    tags: ["Solidity", "Ethereum", "React", "Web3.js", "Node.js"],
    year: "2023",
    github: "https://github.com/GaboPizarro/blockvote",
    photos: [
      { src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop", alt: "Blockchain", caption: "Arquitectura blockchain" },
      { src: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=500&fit=crop", alt: "Votación", caption: "Interfaz de votación" },
      { src: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=500&fit=crop", alt: "Smart Contract", caption: "Deploy de smart contract" },
    ],
  },
  {
    id: "proj-4",
    title: "Minga CLI",
    description: "Herramienta CLI para gestión de proyectos académicos PUCV",
    longDescription: "CLI desarrollada en Rust para automatizar tareas repetitivas en proyectos universitarios: generación de informes LaTeX, gestión de entregas y control de versiones con Git hooks.",
    tags: ["Rust", "CLI", "LaTeX", "Git", "Shell"],
    year: "2022",
    github: "https://github.com/GaboPizarro/minga-cli",
    photos: [
      { src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop", alt: "Terminal", caption: "Minga CLI en acción" },
      { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop", alt: "Código", caption: "Código fuente Rust" },
      { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop", alt: "Documentación", caption: "Documentación del proyecto" },
    ],
  },
];

export const voluntariadosData: VolunteerItem[] = [
  {
    id: "vol-1",
    organization: "Code & Coffee Santiago",
    role: "Mentor de Programación",
    period: "2022 — Presente",
    description: "Mentoría semanal a estudiantes de enseñanza media en programación básica con Python. Más de 80 jóvenes han pasado por el programa. Coordinación de hackathones estudiantiles trimestrales.",
    tags: ["Python", "Mentoría", "Educación", "Juventud"],
    photos: [
      { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop", alt: "Taller", caption: "Taller de programación" },
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop", alt: "Estudiantes", caption: "Jóvenes aprendiendo Python" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop", alt: "Hackathon", caption: "Hackathon estudiantil 2023" },
    ],
  },
  {
    id: "vol-2",
    organization: "TECHO Chile",
    role: "Voluntario Constructor",
    period: "2020 — 2022",
    description: "Construcción de mediaguas en campamentos de la Región Metropolitana. Participación en 6 jornadas de construcción con equipos de 40 personas. Capacitación en trabajo en altura y trabajo comunitario.",
    tags: ["Construcción", "Comunidad", "Trabajo Social", "Liderazgo"],
    photos: [
      { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop", alt: "Construcción", caption: "Jornada de construcción" },
      { src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop", alt: "Equipo", caption: "Equipo TECHO 2021" },
      { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop", alt: "Comunidad", caption: "Con la comunidad del campamento" },
    ],
  },
];

export const deportesData: SportItem[] = [
  {
    id: "dep-1",
    sport: "Escalada Deportiva",
    role: "Competidor — Club Escalar PUCV",
    period: "2020 — Presente",
    achievements: ["2° lugar Campeonato Interuniversitario Roca 2023", "Certificado Lead IFSC Nivel 3", "Instructor certificado boulder indoor"],
    description: "Competidor activo en modalidades boulder y lead. Entrenamiento 4 veces por semana. Organización de salidas a sectores de roca en la Región Metropolitana y IV Región.",
    photos: [
      { src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=500&fit=crop", alt: "Escalada", caption: "Ruta 7b, Cajón del Maipo" },
      { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop", alt: "Boulder", caption: "Competencia boulder PUCV" },
      { src: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&h=500&fit=crop", alt: "Equipo", caption: "Club Escalar en Ovalle 2023" },
    ],
  },
  {
    id: "dep-2",
    sport: "Fútbol",
    role: "Mediocampista — Selección PUCV",
    period: "2019 — Presente",
    achievements: ["Campeón Interfacultades 2022", "Goleador del equipo 2021-2022", "Participación en Interfacultades PUCV 2023"],
    description: "Seleccionado de fútbol de la Pontificia Universidad Católica de Valparaíso. Torneo interfacultades y torneos interuniversitarios en la Región de Valparaíso.",
    photos: [
      { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop", alt: "Partido", caption: "Final interfacultades 2022" },
      { src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop", alt: "Entrenamiento", caption: "Entrenamiento en PUCV" },
      { src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=500&fit=crop", alt: "Celebración", caption: "Celebración campeonato 2022" },
    ],
  },
];

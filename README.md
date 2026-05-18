# 🧑‍💻 Portafolio ICI — Sebastián Morales

Portafolio personal multipágina construido con **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Shadcn/ui** y **Lucide React**. Estética inspirada en la plantilla Picto: paleta cálida crema/amarillo con tipografía Playfair Display.

## ✨ Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio — Hero, skills, proyecto destacado |
| `/educacion` | Formación académica con timeline |
| `/practicas` | Prácticas profesionales con cards |
| `/proyectos` | Grilla de proyectos con PhotoGrid |
| `/voluntariados` | Voluntariados con galería 3 fotos |
| `/deportes` | Deportes con carrusel de imágenes |
| `/contacto` | Formulario funcional con Formspree |

## 🚀 Instalación y desarrollo

```bash
# 1. Clonar / descomprimir el proyecto
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar en desarrollo
npm run dev
# → http://localhost:3000
```

## ⚙️ Configuración de Formspree

1. Ve a [formspree.io](https://formspree.io) y crea una cuenta gratuita
2. Crea un nuevo form → copia el **Form ID** (e.g. `xpwzgjkl`)
3. Abre `src/components/sections/ContactForm.tsx`
4. Reemplaza `YOUR_FORMSPREE_ID` con tu ID:

```typescript
const FORMSPREE_ID = "xpwzgjkl"; // ← tu ID aquí
```

## 🎨 Personalización

### Datos personales
Edita **`src/lib/data.ts`** para actualizar:
- `personalInfo` — nombre, bio, email, links, foto
- `educacionData` — historial académico
- `practicasData` — experiencias laborales
- `proyectosData` — proyectos personales
- `voluntariadosData` — voluntariados
- `deportesData` — actividades deportivas

### Fotos
Reemplaza las URLs de Unsplash en `data.ts` con tus fotos reales. Puedes subirlas a `/public/` y usar rutas relativas:

```typescript
photos: [
  { src: "/photos/universidad-1.jpg", alt: "Campus", caption: "Mi universidad" },
  ...
]
```

### Colores
En `tailwind.config.ts` y `src/app/globals.css`, los colores clave son:
- `#F5C518` → amarillo Picto (acento principal)
- `#0D0D0D` → casi negro (texto y fondo dark)
- `#FAF7F2` → crema (fondo principal)

## 🌐 Deploy en Vercel

```bash
# Opción 1: Vercel CLI
npm i -g vercel
vercel

# Opción 2: GitHub + Vercel Dashboard
# 1. Sube el proyecto a GitHub
# 2. Ve a vercel.com → New Project → Import from GitHub
# 3. Framework: Next.js (auto-detectado)
# 4. Deploy → listo
```

## 📁 Estructura de carpetas

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz (navbar + footer)
│   │   ├── page.tsx            # Inicio
│   │   ├── globals.css         # Estilos globales + variables
│   │   ├── not-found.tsx       # Página 404
│   │   ├── educacion/page.tsx
│   │   ├── practicas/page.tsx
│   │   ├── proyectos/page.tsx
│   │   ├── voluntariados/page.tsx
│   │   ├── deportes/page.tsx
│   │   └── contacto/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navbar sticky responsive
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   └── ContactForm.tsx # Formulario Formspree
│   │   └── ui/
│   │       ├── PhotoCarousel.tsx # Carrusel Embla
│   │       ├── PhotoGrid.tsx     # Grilla 3 fotos
│   │       ├── PageHeader.tsx
│   │       └── TagPill.tsx
│   ├── lib/
│   │   ├── data.ts             # Todos los datos del portafolio
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/                     # Assets estáticos
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── vercel.json
```

## 🛠️ Stack

- **Next.js 14** — App Router + SSR
- **TypeScript** — Tipado estricto
- **Tailwind CSS** — Utilidades CSS
- **Lucide React** — Iconos
- **Embla Carousel** — Carrusel de fotos
- **Formspree** — Backend de formularios sin servidor
- **Playfair Display + DM Sans** — Tipografía editorial

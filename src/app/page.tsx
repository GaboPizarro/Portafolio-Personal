import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Heart,
  Dumbbell,
} from "lucide-react";
import { personalInfo, educacionData, proyectosData } from "@/lib/data";
import { TagPill } from "@/components/ui/TagPill";

const quickLinks = [
  { href: "/educacion", icon: GraduationCap, label: "Educación", desc: "Formación académica" },
  { href: "/practicas", icon: Briefcase, label: "Prácticas", desc: "Experiencia laboral" },
  { href: "/proyectos", icon: Code2, label: "Proyectos", desc: "Trabajo personal" },
  { href: "/voluntariados", icon: Heart, label: "Voluntariados", desc: "Compromiso social" },
  { href: "/deportes", icon: Dumbbell, label: "Deportes", desc: "Vida activa" },
];

export default function HomePage() {
  const latestProject = proyectosData[0];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4169E1]/20 border border-[#4169E1]/40 text-sm font-medium text-[#0D0D0D] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4169E1] animate-pulse" />
            Disponible para empleos, nuevas oportunidades y proyectos colaborativos
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
            Gabriel
            <br />
            <span className="text-[#4169E1]">Pizarro</span>
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-0.5 bg-[#0D0D0D]" />
            <p className="text-[#6B6B6B] font-medium tracking-wide uppercase text-xs">
              Ingeniero Civil Informático
            </p>
          </div>

          <p className="mt-6 text-[#3A3A3A] text-lg leading-relaxed max-w-lg">
            {personalInfo.bio}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-[#6B6B6B]">
            <MapPin size={14} className="text-[#4169E1]" />
            {personalInfo.location} · {personalInfo.university}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0D0D] text-white rounded-full font-medium hover:bg-[#4169E1] hover:text-[#0D0D0D] transition-all duration-200 group"
            >
              Ver proyectos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/cv-gabriel-pizarro.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#0D0D0D] rounded-full font-medium hover:bg-[#0D0D0D] hover:text-white transition-all duration-200"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#E8E0D0] hover:border-[#4169E1] hover:bg-[#4169E1] transition-all">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#E8E0D0] hover:border-[#4169E1] hover:bg-[#4169E1] transition-all">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full border border-[#E8E0D0] hover:border-[#4169E1] hover:bg-[#4169E1] transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Avatar card */}
        <div className="animate-fade-up delay-200 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 rounded-3xl bg-[#4169E1]/30 rotate-6" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 rounded-3xl bg-[#0D0D0D]/5 -rotate-3" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 border border-[#E8E0D0]">
              <p className="text-xs text-[#6B6B6B] font-medium">Stack principal</p>
              <div className="mt-2 flex flex-wrap gap-1 max-w-[160px]">
                {personalInfo.skills.slice(0, 4).map((s) => (
                  <TagPill key={s} tag={s} variant="dark" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick nav grid */}
      <section className="py-12 border-t border-[#E8E0D0]">
        <p className="section-number mb-6">01 — NAVEGACIÓN</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickLinks.map(({ href, icon: Icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="card-lift group p-5 rounded-2xl border border-[#E8E0D0] bg-white hover:border-[#4169E1] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F0E8] flex items-center justify-center mb-3 group-hover:bg-[#4169E1] transition-colors">
                <Icon size={20} />
              </div>
              <p className="font-semibold text-sm">{label}</p>
              <p className="text-xs text-[#6B6B6B] mt-0.5">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 border-t border-[#E8E0D0]">
        <p className="section-number mb-6">02 — STACK TECNOLÓGICO</p>
        <div className="flex flex-wrap gap-2">
          {personalInfo.skills.map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-[#E8E0D0] text-sm font-medium hover:bg-[#4169E1] hover:border-[#4169E1] transition-all cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Latest project preview */}
      <section className="py-12 border-t border-[#E8E0D0]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="section-number mb-2">03 — PROYECTO DESTACADO</p>
            <h2 className="font-display text-3xl font-bold">{latestProject.title}</h2>
          </div>
          <Link
            href="/proyectos"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-[#4169E1] transition-colors group"
          >
            Ver todos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <Image
              src={latestProject.photos[0].src}
              alt={latestProject.photos[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#3A3A3A] leading-relaxed">{latestProject.longDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {latestProject.tags.map((t) => <TagPill key={t} tag={t} />)}
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-white rounded-full text-sm font-medium hover:bg-[#4169E1] hover:text-[#0D0D0D] transition-all"
              >
                Ver proyecto <ArrowRight size={14} />
              </Link>
              {latestProject.github && (
                <a
                  href={latestProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E8E0D0] rounded-full text-sm font-medium hover:border-[#0D0D0D] transition-all"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Mail, Linkedin, Github, MapPin, Clock, MessageSquare } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contacto — Gabriel Pizarro Rivera",
  description: "Contáctate con Gabriel Pizarro Rivera, Ingeniero Civil Informático.",
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: "Respondo en menos de 24h",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "gabriel-pizarro-rivera",
    href: personalInfo.linkedin,
    desc: "Conéctate profesionalmente",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "GaboPizarro",
    href: personalInfo.github,
    desc: "Mira mi código",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Santiago, Chile",
    href: undefined,
    desc: "GMT-3 / Disponible remoto",
  },
];

export default function ContactoPage() {
  return (
    <div>
      <PageHeader
        number="06 — CONTACTO"
        title="Hablemos"
        subtitle="¿Tienes un proyecto interesante, una propuesta de práctica o simplemente quieres conversar de tecnología? Escríbeme."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="animate-fade-up space-y-8">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <Clock size={13} className="text-green-600" />
              <span className="text-xs font-semibold text-green-800">
                Disponible para prácticas y proyectos — 2025
              </span>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold mb-3">¿En qué puedo ayudarte?</h2>
              <ul className="space-y-2 text-sm text-[#3A3A3A]">
                {[
                  "Práctica profesional (jornada completa o parcial)",
                  "Desarrollo web full-stack (React, Next.js, Node.js)",
                  "Proyectos de machine learning y análisis de datos",
                  "Consultoría técnica y arquitectura de sistemas",
                  "Colaboraciones académicas y de investigación",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4169E1] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-3">
              {contactCards.map(({ icon: Icon, label, value, href, desc }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group p-4 bg-white rounded-2xl border border-[#E8E0D0] hover:border-[#4169E1] transition-all card-lift"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F5F0E8] group-hover:bg-[#4169E1] flex items-center justify-center mb-2 transition-colors">
                      <Icon size={15} />
                    </div>
                    <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium mt-0.5 truncate">{value}</p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">{desc}</p>
                  </Wrapper>
                );
              })}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-[#4169E1] pl-4 py-2">
              <p className="font-display text-lg italic text-[#3A3A3A]">
                "El mejor código es aquel que resuelve problemas reales para personas reales."
              </p>
            </blockquote>
          </div>

          {/* Right — form */}
          <div
            className="bg-white rounded-3xl p-8 border border-[#E8E0D0] shadow-sm animate-fade-up delay-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#4169E1] flex items-center justify-center">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Envíame un mensaje</h3>
                <p className="text-xs text-[#6B6B6B]">Formulario seguro via Formspree</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

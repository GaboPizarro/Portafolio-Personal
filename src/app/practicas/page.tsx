import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { practicasData } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { TagPill } from "@/components/ui/TagPill";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";

export const metadata = {
  title: "Prácticas — Sebastián Morales",
  description: "Experiencia laboral de Sebastián Morales en empresas tecnológicas chilenas.",
};

export default function PracticasPage() {
  return (
    <div>
      <PageHeader
        number="02 — PRÁCTICAS"
        title="Experiencia Laboral"
        subtitle="Prácticas profesionales donde apliqué mis conocimientos en entornos reales, contribuyendo con soluciones de alto impacto."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-10">
          {practicasData.map((item, idx) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E8E0D0] card-lift animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5C518] flex items-center justify-center flex-shrink-0">
                      <Briefcase size={22} className="text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-[#F5C518] font-semibold mt-0.5">{item.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[#6B6B6B] mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#F5C518]" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#F5C518]" />
                      {item.location}
                    </div>
                  </div>

                  <hr className="hr-accent mb-4" />

                  <p className="text-[#3A3A3A] text-sm leading-relaxed">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>

                  {/* Número de práctica */}
                  <div className="mt-6 pt-4 border-t border-[#E8E0D0]">
                    <span className="section-number">
                      PRÁCTICA {idx + 1} DE {practicasData.length}
                    </span>
                  </div>
                </div>

                {/* Photos */}
                <PhotoCarousel photos={item.photos} />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#6B6B6B] mb-4">¿Interesado en trabajar juntos?</p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#0D0D0D] text-white rounded-full font-medium hover:bg-[#F5C518] hover:text-[#0D0D0D] transition-all"
          >
            Contáctame <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

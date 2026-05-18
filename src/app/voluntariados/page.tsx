import { Heart, MapPin, Calendar } from "lucide-react";
import { voluntariadosData } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { TagPill } from "@/components/ui/TagPill";
import { PhotoGrid } from "@/components/ui/PhotoGrid";

export const metadata = {
  title: "Voluntariados — Sebastián Morales",
  description: "Trabajo voluntario y compromiso social de Sebastián Morales.",
};

export default function VoluntariadosPage() {
  return (
    <div>
      <PageHeader
        number="04 — VOLUNTARIADOS"
        title="Compromiso Social"
        subtitle="Creo que la tecnología debe estar al servicio de las personas. Estos son los proyectos donde intento aportar algo más que código."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Impact stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-up">
          {[
            { value: "80+", label: "Jóvenes mentoreados" },
            { value: "6", label: "Jornadas de construcción" },
            { value: "2", label: "Organizaciones activas" },
            { value: "4+", label: "Años de voluntariado" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-[#E8E0D0] text-center">
              <p className="font-display text-3xl font-black text-[#F5C518]">{value}</p>
              <p className="text-xs text-[#6B6B6B] mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {voluntariadosData.map((item, idx) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#E8E0D0] card-lift animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5C518] flex items-center justify-center flex-shrink-0">
                      <Heart size={20} className="text-[#0D0D0D]" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold">{item.organization}</h2>
                      <p className="text-sm text-[#6B6B6B] font-medium mt-0.5">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-4">
                    <Calendar size={13} className="text-[#F5C518]" />
                    {item.period}
                  </div>

                  <hr className="hr-accent mb-4" />

                  <p className="text-sm text-[#3A3A3A] leading-relaxed">{item.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <TagPill key={tag} tag={tag} />
                    ))}
                  </div>
                </div>

                {/* Photo grid 3 fotos */}
                <div>
                  <p className="section-number mb-3">GALERÍA</p>
                  <PhotoGrid photos={item.photos} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

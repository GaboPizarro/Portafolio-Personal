import { Trophy, Calendar } from "lucide-react";
import { deportesData } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";

export const metadata = {
  title: "Deportes — Gabriel Pizarro Rivera",
  description: "Vida deportiva y actividades físicas de Gabriel Pizarro Rivera.",
};

export default function DeportesPage() {
  return (
    <div>
      <PageHeader
        number="05 — DEPORTES"
        title="Vida Activa"
        subtitle="El deporte me enseñó disciplina, trabajo en equipo y cómo superar límites. Habilidades que aplico cada día en mi carrera."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {deportesData.map((item, idx) => (
            <article
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Photo carousel */}
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <PhotoCarousel photos={item.photos} />
                </div>

                {/* Content */}
                <div className={`bg-white rounded-3xl p-8 border border-[#E8E0D0] card-lift ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="section-number">{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  <h2 className="font-display text-2xl font-black">{item.sport}</h2>
                  <p className="text-[#4169E1] font-semibold mt-1 text-sm">{item.role}</p>

                  <div className="flex items-center gap-2 text-sm text-[#6B6B6B] mt-2">
                    <Calendar size={13} className="text-[#4169E1]" />
                    {item.period}
                  </div>

                  <hr className="hr-accent my-4" />

                  <p className="text-sm text-[#3A3A3A] leading-relaxed">{item.description}</p>

                  {/* Achievements */}
                  <div className="mt-5">
                    <p className="section-number mb-3">LOGROS</p>
                    <ul className="space-y-2">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-[#4169E1] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Trophy size={10} className="text-[#0D0D0D]" />
                          </div>
                          <span className="text-[#3A3A3A]">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-16 bg-[#0D0D0D] rounded-3xl p-8 text-center text-white">
          <p className="font-display text-2xl font-bold mb-2">
            El deporte y el código tienen algo en común:
          </p>
          <p className="text-[#4169E1] font-display text-xl">
            la práctica constante hace al maestro.
          </p>
        </div>
      </div>
    </div>
  );
}

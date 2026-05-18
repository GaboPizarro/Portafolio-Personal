import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { educacionData } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { TagPill } from "@/components/ui/TagPill";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";

export const metadata = {
  title: "Educación — Sebastián Morales",
  description: "Formación académica de Sebastián Morales, Ingeniero Civil Informático.",
};

export default function EducacionPage() {
  return (
    <div>
      <PageHeader
        number="01 — EDUCACIÓN"
        title="Formación Académica"
        subtitle="Mi trayectoria educativa, desde la enseñanza media hasta la universidad, con los hitos que me han formado como profesional."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5C518] via-[#E8E0D0] to-transparent hidden md:block" />

          <div className="space-y-16">
            {educacionData.map((item, idx) => (
              <div
                key={item.id}
                className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 animate-fade-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#F5C518] flex items-center justify-center shadow-md">
                    <GraduationCap size={20} className="text-[#0D0D0D]" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl p-8 border border-[#E8E0D0] card-lift">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="tag-pill">
                          {idx === 0 ? "En curso" : "Completado"}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl font-bold leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-[#F5C518] font-semibold mt-1">{item.institution}</p>

                      <div className="mt-3 flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
                          <Calendar size={13} className="text-[#F5C518]" />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
                          <MapPin size={13} className="text-[#F5C518]" />
                          {item.location}
                        </div>
                      </div>

                      <hr className="hr-accent my-4" />

                      <p className="text-[#3A3A3A] text-sm leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <TagPill key={tag} tag={tag} variant="outline" />
                        ))}
                      </div>
                    </div>

                    {/* Photos */}
                    <PhotoCarousel photos={item.photos} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

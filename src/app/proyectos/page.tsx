import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { proyectosData } from "@/lib/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { TagPill } from "@/components/ui/TagPill";
import { PhotoGrid } from "@/components/ui/PhotoGrid";

export const metadata = {
  title: "Proyectos — Gabriel Pizarro Rivera",
  description: "Proyectos de software desarrollados por Gabriel Pizarro Rivera.",
};

export default function ProyectosPage() {
  return (
    <div>
      <PageHeader
        number="03 — PROYECTOS"
        title="Trabajo Personal"
        subtitle="Proyectos construidos por pasión, curiosidad y el deseo de resolver problemas reales con tecnología."
      />

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Featured (first project) */}
        <div className="mb-16 animate-fade-up">
          <p className="section-number mb-4">PROYECTO DESTACADO</p>
          <div className="bg-[#0D0D0D] rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src={proyectosData[0].photos[0].src}
                alt={proyectosData[0].photos[0].alt}
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="p-8 md:p-10 text-white flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={13} className="text-[#4169E1]" />
                <span className="text-xs text-[#4169E1] font-mono">{proyectosData[0].year}</span>
              </div>
              <h2 className="font-display text-3xl font-black">{proyectosData[0].title}</h2>
              <p className="mt-3 text-[#A0A0A0] text-sm leading-relaxed">
                {proyectosData[0].longDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {proyectosData[0].tags.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {proyectosData[0].github && (
                  <a href={proyectosData[0].github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#4169E1] hover:text-[#0D0D0D] text-sm font-medium transition-all">
                    <Github size={14} /> GitHub
                  </a>
                )}
                {proyectosData[0].demo && (
                  <a href={proyectosData[0].demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4169E1] text-[#0D0D0D] text-sm font-medium hover:opacity-90 transition-all">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Grid of remaining projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {proyectosData.slice(1).map((project, idx) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8E0D0] card-lift animate-fade-up"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Photo grid */}
              <div className="p-4">
                <PhotoGrid photos={project.photos} />
              </div>

              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="section-number">{project.year}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#4169E1] transition-all">
                        <Github size={15} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-[#4169E1] transition-all">
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed">{project.description}</p>

                <hr className="hr-accent my-3" />

                <p className="text-sm text-[#3A3A3A] leading-relaxed">{project.longDescription}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <TagPill key={tag} tag={tag} variant="outline" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#E8E0D0] bg-[#FAF7F2] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold">
              <span className="text-[#F5C518]">S.</span>Morales
            </p>
            <p className="text-sm text-[#6B6B6B] mt-1">
              Ingeniero Civil Informático · {personalInfo.university}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#F5C518] hover:text-[#0D0D0D] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[#F5C518] hover:text-[#0D0D0D] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full hover:bg-[#F5C518] hover:text-[#0D0D0D] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-[#6B6B6B]">
            © {year} {personalInfo.name}. Hecho con Next.js & ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

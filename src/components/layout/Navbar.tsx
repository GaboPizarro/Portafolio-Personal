"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/educacion", label: "Educación" },
  { href: "/practicas", label: "Prácticas" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/voluntariados", label: "Voluntariados" },
  { href: "/deportes", label: "Deportes" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E0D0]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight hover:text-[#F5C518] transition-colors"
        >
          <span className="text-[#F5C518]">S.</span>Morales
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md",
                    active
                      ? "text-[#0D0D0D]"
                      : "text-[#6B6B6B] hover:text-[#0D0D0D]"
                  )}
                >
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 bg-[#F5C518] rounded-full" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#0D0D0D] text-[#FAF7F2] text-sm font-medium rounded-full hover:bg-[#F5C518] hover:text-[#0D0D0D] transition-all duration-200"
        >
          Contáctame
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#F5F0E8] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E8E0D0] bg-[#FAF7F2] px-6 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                      active
                        ? "bg-[#F5C518] text-[#0D0D0D]"
                        : "text-[#6B6B6B] hover:bg-[#F5F0E8] hover:text-[#0D0D0D]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

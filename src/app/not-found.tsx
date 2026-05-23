import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-[#4169E1] text-sm tracking-widest mb-4">404</p>
      <h1 className="font-display text-5xl font-black mb-4">Página no encontrada</h1>
      <p className="text-[#6B6B6B] max-w-sm mb-8">
        Esta página no existe o fue movida. Vuelve al inicio para seguir explorando.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D0D0D] text-white rounded-full font-medium hover:bg-[#4169E1] hover:text-[#0D0D0D] transition-all"
      >
        <ArrowLeft size={16} />
        Volver al inicio
      </Link>
    </div>
  );
}

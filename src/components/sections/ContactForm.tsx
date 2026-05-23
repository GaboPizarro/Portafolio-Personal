"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Replace with your Formspree form ID
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#E8E0D0] bg-[#FAF7F2] text-sm text-[#0D0D0D] placeholder:text-[#A0A0A0] focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Success */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-200">
          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-green-800">¡Mensaje enviado!</p>
            <p className="text-xs text-green-700 mt-0.5">
              Gracias por contactarme. Te responderé a la brevedad.
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200">
          <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-800">Error al enviar</p>
            <p className="text-xs text-red-700 mt-0.5">
              Hubo un problema. Por favor intenta nuevamente o escríbeme directo al correo.
            </p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
          Asunto *
        </label>
        <select
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Selecciona un asunto</option>
          <option value="Práctica profesional">Práctica profesional</option>
          <option value="Proyecto freelance">Proyecto freelance</option>
          <option value="Colaboración académica">Colaboración académica</option>
          <option value="Consulta general">Consulta general</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
          Mensaje *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntame sobre tu proyecto o consulta..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0D0D0D] text-white rounded-xl font-semibold text-sm hover:bg-[#4169E1] hover:text-[#0D0D0D] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}

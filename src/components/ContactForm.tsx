"use client";

import { useState } from "react";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>('[name="honeypot"]');
    if (honeypot?.value) return;

    setSending(true);
    setError(false);

    const formData = new FormData(form);
    formData.delete("honeypot");
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://webhook.autofunil.com.br/webhook/eabe18a9-3165-49f0-b929-784c3951a7ed",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl text-center">
        <div className="text-6xl mb-6">✓</div>
        <h3 className="text-2xl font-bold text-navy mb-4">Solicitação enviada!</h3>
        <p className="text-slate-500 text-lg">
          Entraremos em contato em breve para agendar seu diagnóstico gratuito.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div style={{ display: "none" }}>
        <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
          Nome do Decisor
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
          placeholder="Seu nome completo"
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
          E-mail Corporativo
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
          placeholder="seu@email.com.br"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
            WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
            Nome da Empresa
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald outline-none transition-all font-bold text-navy"
            placeholder="Razão Social ou Fantasia"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center font-semibold">
          Ocorreu um erro. Tente novamente ou use o WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-emerald text-white font-black py-6 rounded-2xl hover:bg-slate-800 transition-all shadow-2xl shadow-emerald/20 text-base uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {sending ? "Enviando..." : "Receber Diagnóstico"}
      </button>

      <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        Sua privacidade é nossa prioridade absoluta.
      </p>
    </form>
  );
}

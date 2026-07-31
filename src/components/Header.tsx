"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/diagnostico-ia", label: "AI Scan®" },
  { href: "/servicos", label: "Serviços" },
  { href: "/setores", label: "Setores" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/logotipo-dc.png"
            alt="Douglas Cuimar"
            className="h-[52px] w-auto object-contain"
          />
          <span className="text-xl font-bold text-navy hidden sm:block uppercase tracking-tighter">
            DOUGLAS<span className="text-emerald">CUIMAR</span>
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-emerald transition-colors ${link.href === "/diagnostico-ia" ? "text-emerald font-black tracking-[0.3em]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="bg-navy text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-navy/10"
          >
            Diagnóstico Gratuito
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-emerald transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="bg-navy text-white text-center px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest"
            onClick={() => setOpen(false)}
          >
            Diagnóstico Gratuito
          </Link>
        </div>
      )}
    </header>
  );
}

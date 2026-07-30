import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logotipo-dc.png"
              alt="Douglas Cuimar"
              className="h-[52px] w-auto object-contain"
            />
            <span className="text-2xl font-black text-navy uppercase tracking-tighter">
              DOUGLAS<span className="text-emerald">CUIMAR</span>
            </span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <Link href="/servicos" className="hover:text-emerald transition-colors">
                Serviços
              </Link>
              <Link href="/setores" className="hover:text-emerald transition-colors">
                Setores
              </Link>
              <Link href="/blog" className="hover:text-emerald transition-colors">
                Blog
              </Link>
              <Link href="/sobre" className="hover:text-emerald transition-colors">
                Sobre
              </Link>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/douglas_cuimar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald transition-colors"
                aria-label="Instagram"
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
                  className="w-6 h-6"
                >
                  <title>Instagram</title>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@douglas_cuimar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald transition-colors"
                aria-label="YouTube"
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
                  className="w-6 h-6"
                >
                  <title>YouTube</title>
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 uppercase font-black tracking-widest">
          <p>&copy; {new Date().getFullYear()} Douglas Cuimar Assessoria. Inteligência &amp; Automação.</p>
          <div className="flex gap-8">
            <Link href="/privacidade" className="hover:text-navy transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-navy transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Centro de conhecimento sobre IA, automação empresarial, integração de sistemas e produtividade. Artigos práticos para PMEs.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Blog | Douglas Cuimar",
    description:
      "Centro de conhecimento sobre IA, automação e integração de sistemas para PMEs.",
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Douglas Cuimar",
          description:
            "Centro de conhecimento sobre IA, automação e integração de sistemas.",
          url: "https://douglascuimar.com.br/blog",
        }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]} />

      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h1 className="text-sm font-black text-emerald uppercase tracking-[0.4em] mb-4">
            Blog
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
            Centro de{" "}
            <span className="italic text-emerald">Conhecimento</span>
          </h2>
          <p className="text-slate-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Artigos práticos sobre IA, automação, integração de sistemas e
            produtividade para PMEs.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-10">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="p-8 lg:p-10 rounded-[2rem] bg-surface-alt border border-slate-100 hover:border-emerald/30 transition-all"
              >
                <time className="text-[10px] font-black text-emerald uppercase tracking-widest">
                  {post.date}
                </time>
                <h3 className="text-2xl font-bold text-navy mt-3 mb-4">
                  {post.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-navy font-bold hover:text-emerald transition-colors"
                >
                  Ler artigo →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

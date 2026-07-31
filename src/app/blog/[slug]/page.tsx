import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogPosts, getPostBySlug, getAllSlugs, type BlogPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `./` },
    openGraph: {
      title: `${post.title} | Douglas Cuimar`,
      description: post.description,
      type: "article",
      publishedTime: post.isoDate,
      modifiedTime: post.isoDate,
      authors: [post.author],
    },
    other: {
      "article:published_time": post.isoDate,
      "article:modified_time": post.isoDate,
      "article:author": post.author,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-4 tracking-tighter"
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="text-xl md:text-2xl font-bold text-navy mt-8 mb-3 tracking-tighter"
        >
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    if (line.match(/^#{1,}\s/)) {
      elements.push(
        <p
          key={i}
          className="text-lg font-bold text-navy mt-6 mb-2"
        >
          {line.replace(/^#{1,}\s/, "")}
        </p>
      );
      i++;
      continue;
    }

    if (line === "---") {
      elements.push(
        <hr key={i} className="my-8 border-slate-200" />
      );
      i++;
      continue;
    }

    if (line.startsWith("| ")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }

      const headerCells = tableLines[0]
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim());
      const rows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .filter(Boolean)
          .map((c) => c.trim())
      );

      elements.push(
        <div key={i - 1} className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="px-4 py-3 text-left font-bold first:rounded-tl-lg last:rounded-tr-lg">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-b border-slate-200 even:bg-surface-alt">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].match(/^\d+\.\s/) || lines[i] === "")) {
        if (lines[i].match(/^\d+\.\s/)) {
          listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        }
        i++;
      }
      elements.push(
        <ol key={i - 1} className="list-decimal list-inside space-y-2 my-4 text-slate-600 leading-relaxed">
          {listItems.map((item, li) => (
            <li key={li} className="pl-1">
              <span className="font-semibold text-navy">{item.split("**").filter((_, idx) => idx % 2 === 1).join("")}</span>
              {item.replace(/\*\*/g, "").replace(item.split("**").filter((_, idx) => idx % 2 === 1).join(""), "")}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-emerald pl-4 my-6 text-slate-500 italic leading-relaxed"
        >
          {line.replace("> ", "")}
        </blockquote>
      );
      i++;
      continue;
    }

    if (line.startsWith("[")) {
      const match = line.match(/^\[(.+?)\]\((.+?)\)$/);
      if (match) {
        elements.push(
          <Link
            key={i}
            href={match[2]}
            className="inline-block bg-navy text-white px-6 py-3 rounded-2xl text-base font-bold hover:bg-slate-800 transition-all mt-6 shadow-xl shadow-navy/20"
          >
            {match[1]}
          </Link>
        );
        i++;
        continue;
      }
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-lg font-bold text-navy mt-6 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const paragraphLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith("|") && !lines[i].startsWith(">") && !lines[i].startsWith("[") && !lines[i].match(/^\d+\.\s/)) {
      paragraphLines.push(lines[i]);
      i++;
    }

    if (paragraphLines.length > 0) {
      const text = paragraphLines.join(" ");
      elements.push(
        <p key={i - paragraphLines.length} className="text-slate-600 leading-relaxed mb-4">
          {text}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "ProfessionalService",
      name: "Douglas Cuimar",
      logo: {
        "@type": "ImageObject",
        url: "https://douglascuimar.com.br/assets/logotipo-dc.png",
      },
    },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://douglascuimar.com.br/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 lg:py-20">
        <header className="mb-12">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <time dateTime={post.isoDate}>{post.date}</time>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tighter mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="prose-custom text-base md:text-lg">
          {renderContent(post.content)}
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-sm mb-6">
            Publicado em {post.date} por {post.author}
          </p>
          <Link
            href="/blog"
            className="text-navy font-bold hover:text-emerald transition-colors"
          >
            ← Voltar ao Blog
          </Link>
        </footer>

        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-bold text-navy mb-4">Leia também</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-5 rounded-2xl bg-surface-alt border border-slate-100 hover:border-emerald/30 transition-all"
                >
                  <p className="text-xs text-emerald font-black uppercase tracking-widest mb-2">
                    {related.date}
                  </p>
                  <p className="text-navy font-bold text-sm leading-snug">
                    {related.title}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </article>
    </>
  );
}

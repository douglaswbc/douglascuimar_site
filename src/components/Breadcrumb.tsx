import type { FC } from "react";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

interface Breadcrumbs {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: Breadcrumbs[];
}

function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const schemaItems = items.map((i) => ({
    name: i.label,
    item: `https://douglascuimar.com.br${i.href}`,
  }));

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-300 flex-shrink-0"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-slate-600 font-medium truncate">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-emerald transition-colors truncate"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

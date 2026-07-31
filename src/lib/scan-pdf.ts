import type { ScanResult } from "./scan-engine";

export async function generatePDF(
  element: HTMLElement,
  result: ScanResult
): Promise<void> {
  const html2pdf = (await import("html2pdf.js")).default;

  const safeCompanyName = result.companyName.replace(/[^a-zA-Z0-9_-]/g, "_") || "empresa";
  const dateStr = new Date().toISOString().split("T")[0];

  const margin: [number, number, number, number] = [0.5, 0.5, 0.5, 0.5];

  const opt = {
    margin,
    filename: `AI_Business_Scan_${safeCompanyName}_${dateStr}.pdf`,
    image: { type: "jpeg" as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
    },
    jsPDF: {
      unit: "in" as const,
      format: "a4" as const,
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] as const },
  };

  await html2pdf().from(element).set(opt).save();
}

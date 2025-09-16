import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PdfOptions } from '@/types/reports';

type GeneratePdfOptions = PdfOptions;

/** Conversão aproximada de CSS px para mm (96dpi). */
const PX_PER_MM = 96 / 25.4; // ≈ 3.779527559

/** Gera um PDF A4 (210x297mm) a partir de um elemento HTML, com quebra automática de páginas. */
export async function generatePdfFromElement(element: HTMLElement, options: GeneratePdfOptions = {}) {
  const {
    filename = `Relatorio-${new Date().toISOString().slice(0, 10)}.pdf`,
    marginMm = 10,
    scale = 2,
    backgroundColor = '#ffffff',
    watermark,
  } = options;

  // Dimensões do A4 em mm
  const pageWidthMm = 210;
  const pageHeightMm = 297;

  // Renderiza o elemento em um canvas de alta qualidade
  const canvas = await html2canvas(element, {
    backgroundColor,
    scale,
    useCORS: true,
    logging: false,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const contentWidthPx = canvas.width;
  const contentHeightPx = canvas.height;

  // Área útil do PDF (sem margens)
  const usableWidthMm = pageWidthMm - marginMm * 2;
  const usableHeightMm = pageHeightMm - marginMm * 2;

  // Converte altura útil para pixels a partir do fator (96dpi)
  const usableHeightPx = Math.floor(usableHeightMm * PX_PER_MM);

  // Largura em mm será a largura total utilizável; a altura de cada fatia é proporcional
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

  let currentY = 0;
  let isFirstPage = true;

  while (currentY < contentHeightPx) {
    const sliceHeightPx = Math.min(usableHeightPx, contentHeightPx - currentY);

    // Canvas temporário com a fatia atual
    const pageCanvas = document.createElement('canvas');
    pageCanvas.width = contentWidthPx;
    pageCanvas.height = sliceHeightPx;
    const ctx = pageCanvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not available');

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
    ctx.drawImage(
      canvas,
      0,
      currentY,
      contentWidthPx,
      sliceHeightPx,
      0,
      0,
      contentWidthPx,
      sliceHeightPx,
    );

    const imgData = pageCanvas.toDataURL('image/png');
    // Altura da imagem em mm mantendo proporção
    const sliceHeightMm = sliceHeightPx / PX_PER_MM;
    const imgHeightMm = (usableWidthMm * sliceHeightMm) / (contentWidthPx / PX_PER_MM);

    if (!isFirstPage) {
      pdf.addPage('a4', 'portrait');
    }
    pdf.addImage(
      imgData,
      'PNG',
      marginMm,
      marginMm,
      usableWidthMm,
      imgHeightMm,
    );

    isFirstPage = false;
    currentY += sliceHeightPx;
  }

  // Adiciona watermark se especificado
  if (watermark) {
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(48);
      pdf.setTextColor(200, 200, 200);
      pdf.setGState(new pdf.GState({ opacity: 0.1 }));
      pdf.text(watermark, pageWidthMm / 2, pageHeightMm / 2, { 
        align: 'center',
        angle: 45 
      });
    }
  }

  pdf.save(filename);
}

/**
 * Utilitário para gerar PDF a partir de um seletor CSS.
 * Útil quando não há acesso ao ref diretamente.
 */
export async function generatePdfFromSelector(selector: string, options?: GeneratePdfOptions) {
  const element = document.querySelector(selector) as HTMLElement | null;
  if (!element) throw new Error(`Elemento não encontrado para o seletor: ${selector}`);
  await generatePdfFromElement(element, options);
}



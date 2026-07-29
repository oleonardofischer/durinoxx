export interface SheetRow {
  id: string;
  title: string;
  category: string;
  detalhes: string;
  imageUrl: string;
  year: string;
  gallery: string;
}

// Convert google drive view/edit/direct urls to direct stream/view URLs
export function getGoogleDriveDirectUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.includes("googleusercontent.com")) return trimmed;
  
  // Matches file ID from drive urls:
  // - drive.google.com/file/d/FILE_ID/view...
  // - drive.google.com/open?id=FILE_ID
  // - docs.google.com/file/d/FILE_ID/...
  const regExp = /\/file\/d\/([a-zA-Z0-9_-]+)|[?&]id=([a-zA-Z0-9_-]+)/;
  const match = trimmed.match(regExp);
  if (match) {
    const id = match[1] || match[2];
    return `https://lh3.googleusercontent.com/d/${id}`;
  }
  return trimmed;
}

const PUB_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTSVqgUkMyTHTxTtA9A8JsteNOkBA6oAbXYehGV6AND7oFOuXC3GD0Fmcmf1bD_K31E1tD30GDxu_mu/pub?gid=1153408212&single=true&output=csv';

// Default / fallback images so the app never shows a broken state
export const DEFAULT_SHEET_DATA: Record<string, SheetRow> = {
  "01": {
    id: "01",
    title: "Durinoxx",
    category: "logotipo",
    description: "Logotipo da Durinoxx para Website",
    detalhes: "Logotipo Durinoxx",
    imageUrl: "https://lh3.googleusercontent.com/d/1g16jOz9GM4xwEGEXRR4Y-pijy_mlJsXJ",
    year: "2026",
    gallery: ""
  },
  "02": {
    id: "02",
    title: "Vários tanques biogás",
    category: "foto",
    description: "Vários tanques biogás",
    detalhes: "Tanque biogás",
    imageUrl: "https://lh3.googleusercontent.com/d/1gj6KAfTA5MVMBxBiz0A5blRh_87KuK-P",
    year: "2026",
    gallery: ""
  },
  "03": {
    id: "03",
    title: "Sistema em operação",
    category: "foto",
    description: "Sistema em operação",
    detalhes: "",
    imageUrl: "https://lh3.googleusercontent.com/d/1sBRQUWNprNX0lEAKMQ1fUT-IzwA6Vqdt",
    year: "2026",
    gallery: ""
  }
};

export function parseCSV(csvText: string): string[][] {
  const lines: string[][] = [];
  let row: string[] = [""];
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push("");
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += char;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  return lines;
}

export async function fetchSpreadsheetRows(): Promise<SheetRow[]> {
  try {
    const response = await fetch(PUB_CSV_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const parsedLines = parseCSV(text);
    
    if (parsedLines.length <= 1) {
      return [];
    }

    // Skip header row (id, title, category, description, detalhes, imageUrl, year, gallery)
    const header = parsedLines[0].map(h => h.trim().toLowerCase());
    const idIndex = header.indexOf("id") !== -1 ? header.indexOf("id") : 0;
    const titleIndex = header.indexOf("title") !== -1 ? header.indexOf("title") : 1;
    const categoryIndex = header.indexOf("category") !== -1 ? header.indexOf("category") : 2;
    const descriptionIndex = header.indexOf("description") !== -1 ? header.indexOf("description") : 3;
    const detalhesIndex = header.indexOf("detalhes") !== -1 ? header.indexOf("detalhes") : 4;
    const imageUrlIndex = header.indexOf("imageurl") !== -1 ? header.indexOf("imageurl") : 5;
    const yearIndex = header.indexOf("year") !== -1 ? header.indexOf("year") : 6;
    const galleryIndex = header.indexOf("gallery") !== -1 ? header.indexOf("gallery") : 7;

    const parsedRows: SheetRow[] = parsedLines.slice(1).map((row) => {
      const getVal = (index: number): string => {
        if (!row || index >= row.length) return "";
        return String(row[index]).trim();
      };

      // Format ID to 2 digits if it's numeric
      let rawId = getVal(idIndex);
      if (rawId && !isNaN(Number(rawId))) {
        rawId = Number(rawId).toString().padStart(2, '0');
      }

      return {
        id: rawId,
        title: getVal(titleIndex),
        category: getVal(categoryIndex),
        description: getVal(descriptionIndex),
        detalhes: getVal(detalhesIndex),
        imageUrl: getGoogleDriveDirectUrl(getVal(imageUrlIndex)),
        year: getVal(yearIndex),
        gallery: getVal(galleryIndex)
      };
    }).filter(row => row.id !== ""); // skip empty lines

    return parsedRows;
  } catch (error) {
    console.warn("Failed to fetch spreadsheet data, using fallbacks. Error:", error);
    return Object.values(DEFAULT_SHEET_DATA);
  }
}

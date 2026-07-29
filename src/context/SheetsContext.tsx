import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchSpreadsheetRows, SheetRow, DEFAULT_SHEET_DATA } from '../lib/sheetsService';

interface SheetsContextType {
  rows: SheetRow[];
  loading: boolean;
  getImageUrl: (id: string, fallbackId?: string) => string;
  getRow: (id: string) => SheetRow | undefined;
}

const SheetsContext = createContext<SheetsContextType | undefined>(undefined);

export function SheetsProvider({ children }: { children: ReactNode }) {
  const [rows, setRows] = useState<SheetRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchSpreadsheetRows();
        setRows(data);
      } catch (err) {
        console.error("SheetsProvider failed to load data:", err);
        setRows(Object.values(DEFAULT_SHEET_DATA));
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const getRow = (id: string): SheetRow | undefined => {
    // Format ID to 2 digits if it's numeric to match standard ids (e.g. "01", "02")
    let formattedId = id;
    if (id && !isNaN(Number(id))) {
      formattedId = Number(id).toString().padStart(2, '0');
    }
    
    // Find in loaded rows
    const found = rows.find(r => r.id === formattedId || r.id === id);
    if (found) return found;
    
    // Fallback to DEFAULT_SHEET_DATA
    return DEFAULT_SHEET_DATA[formattedId] || DEFAULT_SHEET_DATA[id];
  };

  const getImageUrl = (id: string, fallbackId?: string): string => {
    const row = getRow(id);
    if (row && row.imageUrl) {
      return row.imageUrl;
    }
    if (fallbackId) {
      const fallbackRow = getRow(fallbackId);
      if (fallbackRow && fallbackRow.imageUrl) {
        return fallbackRow.imageUrl;
      }
    }
    return "";
  };

  return (
    <SheetsContext.Provider value={{ rows, loading, getImageUrl, getRow }}>
      {children}
    </SheetsContext.Provider>
  );
}

export function useSheets() {
  const context = useContext(SheetsContext);
  if (!context) {
    throw new Error('useSheets must be used within a SheetsProvider');
  }
  return context;
}

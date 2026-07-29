import { useSheets } from '../context/SheetsContext';

interface DurinoxxLogoProps {
  className?: string;
  iconSize?: number;
}

export default function DurinoxxLogo({ className = "h-8 sm:h-9 md:h-10" }: DurinoxxLogoProps) {
  const { getImageUrl } = useSheets();
  const logoUrl = getImageUrl("01") || "https://lh3.googleusercontent.com/d/1g16jOz9GM4xwEGEXRR4Y-pijy_mlJsXJ";

  return (
    <div className="flex items-center select-none shrink-0 min-h-[32px]">
      <img 
        src={logoUrl} 
        alt="Durinoxx - Engenharia em Inox" 
        className={`${className} object-contain`} 
        style={{ maxHeight: '48px' }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

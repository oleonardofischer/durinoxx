import { useSheets } from '../context/SheetsContext';

interface DurinoxxLogoProps {
  className?: string;
  iconSize?: number;
}

export default function DurinoxxLogo({ className = "h-8 sm:h-9 md:h-10", iconSize = 24 }: DurinoxxLogoProps) {
  const { getImageUrl } = useSheets();
  const logoUrl = getImageUrl("01");

  const isPlaceholder = !logoUrl || logoUrl.includes("images.unsplash.com");

  return (
    <div className="flex items-center space-x-2.5 select-none">
      {!isPlaceholder ? (
        <img 
          src={logoUrl} 
          alt="Durinoxx" 
          className={`${className} object-contain`} 
          style={{ maxHeight: '48px' }}
          referrerPolicy="no-referrer"
        />
      ) : (
        <>
          {/* Stylized Modular Tank / Steel Shield Icon Fallback */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md scale-110 pointer-events-none" />
            <svg
              width={iconSize + 8}
              height={iconSize + 8}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 drop-shadow-md"
            >
              <path
                d="M16 2L28 8V24L16 30L4 24V8L16 2Z"
                stroke="url(#steel-grad)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                fill="#090d16"
              />
              <path d="M5 13H27" stroke="url(#steel-grad)" strokeWidth="1.5" strokeDasharray="1 2" />
              <path d="M4.5 19H27.5" stroke="url(#steel-grad)" strokeWidth="1.5" strokeDasharray="1 2" />
              <path
                d="M16 9C16 9 20 13 20 16.5C20 18.9853 18.2091 21 16 21C13.7909 21 12 18.9853 12 16.5C12 13 16 9 16 9Z"
                fill="url(#orange-grad)"
              />
              <defs>
                <linearGradient id="steel-grad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="orange-grad" x1="12" y1="9" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Typography */}
          <div className="flex flex-col justify-center leading-none">
            <span className="font-sans font-black tracking-wider text-lg sm:text-xl text-white">
              DURI<span className="text-orange-500">NOXX</span>
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-0.5">
              Engenharia em Inox
            </span>
          </div>
        </>
      )}
    </div>
  );
}

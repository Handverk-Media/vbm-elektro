type P = { size?: number }
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export const IcCamera = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" /><circle cx="12" cy="13" r="3.2" /></svg>
)
export const IcSearch = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.8-4.8" /></svg>
)
export const IcDoc = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 17h6" /></svg>
)
export const IcCalendar = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3.5" y="5" width="17" height="16" rx="1.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></svg>
)
export const IcCheckDoc = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9.5 13.5l1.6 1.6L15 11.5" /></svg>
)
export const IcStar = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.6 6.5 19.5l1.4-6.1L3.2 9.3l6.2-.6z" /></svg>
)
export const IcBolt = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>
)
export const IcShield = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const IcPin = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></svg>
)
export const IcClock = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
)
export const IcRuler = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-8 12 12)" /><path d="M7 9l.6 2M11 8.3l.6 2M15 7.7l.6 2" /></svg>
)
export const IcPanel = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M8 7h8M8 11h8M8 15h4" /></svg>
)
export const IcPlug = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M9 3v6M15 3v6M7 9h10v3a5 5 0 01-10 0z" /><path d="M12 17v4" /></svg>
)
export const IcBulb = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0012 3z" /></svg>
)
export const IcHeat = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M12 3v6M12 15v6M4 12h6M14 12h6M6 6l4 4M18 18l-4-4M18 6l-4 4M6 18l4-4" /></svg>
)
export const IcHouse = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M4 11l8-7 8 7" /><path d="M6 10v10h12V10" /></svg>
)
export const IcWrench = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><path d="M14.5 6.5a4 4 0 00-5.4 4.5L3 17.1l1.9 1.9 6.1-6.1a4 4 0 004.5-5.4l-2.6 2.6-2-2z" /></svg>
)
export const IcMore = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><circle cx="5" cy="12" r="1.3" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1.3" fill="currentColor" stroke="none" /></svg>
)
export const IcCheck = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6" /></svg>
)

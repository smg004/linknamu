type LinkCardProps = {
  href: string;
  label: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ href, label, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/10 bg-indigo-950/60 px-6 py-4 text-base font-medium text-white shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-indigo-900/60"
    >
      <span>{label}</span>
      <span className="absolute right-6 text-xs font-normal text-white/50">{clickCount}회</span>
    </a>
  );
}

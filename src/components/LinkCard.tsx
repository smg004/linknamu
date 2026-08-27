type LinkCardProps = {
  href: string;
  label: string;
};

export default function LinkCard({ href, label }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-indigo-950/60 px-6 py-4 text-base font-medium text-white shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-indigo-900/60"
    >
      {label}
    </a>
  );
}

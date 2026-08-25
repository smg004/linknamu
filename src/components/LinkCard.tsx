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
      className="flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-4 text-base font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {label}
    </a>
  );
}

import LinkCard from "@/components/LinkCard";

const PROFILE = {
  name: "성명기",
  bio: "세계 최강 바이브 코더",
};

const LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Blog", href: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="h-36 w-36 rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {PROFILE.bio}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-5">
          {LINKS.map((link) => (
            <LinkCard key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </main>
    </div>
  );
}

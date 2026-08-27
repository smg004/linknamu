import LinkCard from "@/components/LinkCard";

const PROFILE = {
  name: "성명기",
  bio: "풀 스택 개발자 | 바이브 코딩을 위주로 해요",
  imageUrl: "/profile.jpg",
};

const LINKS = [
  { label: "💻 GitHub", href: "https://github.com/smg004" },
  { label: "📲 Instagram", href: "https://www.instagram.com/me.0_.91" },
  { label: "📩 Email", href: "mailto:qazplm7085@gmail.com" },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#020103_0%,#0e0620_38%,#1c0a3e_62%,#040915_100%)] px-6 py-16 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl"
      />

      <main className="relative z-10 flex w-full max-w-sm flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-fuchsia-400 via-violet-500 to-sky-400 opacity-60 blur-xl" />
            <img
              src={PROFILE.imageUrl}
              alt={PROFILE.name}
              className="relative h-36 w-36 rounded-full object-cover ring-4 ring-white/15 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-white/70">{PROFILE.bio}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {LINKS.map((link) => (
            <LinkCard key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </main>
    </div>
  );
}

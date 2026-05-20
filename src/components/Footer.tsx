import profileFallback from "@/data/profile";
import type { Profile } from "@/data/types";

interface Props {
  profile?: Profile;
}

export default function Footer({ profile: profileProp }: Props) {
  const profile = profileProp ?? profileFallback;
  return (
    <footer className="py-12 pb-20 px-6 md:px-10 border-t border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="font-mono text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <span className="text-[var(--border)]">|</span>
          <span className="font-mono text-sm text-[var(--text-faint)]">{profile.handle}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {profile.socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-faint)] text-sm hover:text-[var(--text-secondary)] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--text-faint)] text-sm hover:text-[var(--text-secondary)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

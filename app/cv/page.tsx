import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  description: `Curriculum vitae of ${profile.name}`,
};

// Light, print-friendly CV. Cmd+P / "Save as PDF" produces the PDF version.
export default function CV() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <main className="max-w-3xl mx-auto px-6 py-12 print:p-0 print:max-w-none">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 print:hidden">← Portfolio</Link>

        <header className="text-center mt-6 mb-10">
          <h1 className="text-4xl font-bold tracking-wide text-slate-900">{profile.name.toUpperCase()}</h1>
          <p className="mt-2 text-slate-600">{profile.title}</p>
          <p className="mt-2 text-sm text-slate-600">
            <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
            {" • "}{profile.location}{" • "}
            <a href={profile.links.github} className="hover:underline">{profile.links.github.replace("https://", "")}</a>
          </p>
        </header>

        <Section title="Profile">
          <p>{profile.summary}</p>
        </Section>

        <Section title="Education">
          {profile.education.map((e) => (
            <Entry key={e.degree} heading={e.degree} sub={e.school} period={e.period}>
              {e.details.map((d) => <p key={d}>{d}</p>)}
            </Entry>
          ))}
        </Section>

        <Section title="Experience">
          {profile.experience.map((x) => (
            <Entry key={x.role} heading={x.role} sub={x.org} period={x.period}>
              <p>{x.description}</p>
            </Entry>
          ))}
        </Section>

        <Section title="Selected Projects">
          {profile.projects.map((p) => (
            <Entry key={p.title} heading={p.title} sub={p.role} period={p.year}>
              <p>{p.description}</p>
            </Entry>
          ))}
        </Section>

        <div className="grid sm:grid-cols-2 gap-x-10 print:grid-cols-2">
          <Section title="Technical Skills">
            {Object.entries(profile.skills).map(([group, items]) => (
              <p key={group}><span className="font-semibold text-slate-900">{group}:</span> {items.join(", ")}</p>
            ))}
          </Section>
          <Section title="Languages">
            {profile.languages.map((l) => <p key={l}>{l}</p>)}
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="mb-8 break-inside-avoid-page">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Entry({ heading, sub, period, children }: { heading: string, sub: string, period: string, children: React.ReactNode }) {
  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between gap-4">
        <p className="font-semibold text-slate-900">{heading}</p>
        {period && <p className="text-slate-500 whitespace-nowrap">{period}</p>}
      </div>
      {sub && <p className="text-slate-600 italic">{sub}</p>}
      <div className="mt-1">{children}</div>
    </div>
  );
}

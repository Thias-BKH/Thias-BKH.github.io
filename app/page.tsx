import { profile } from "@/content/profile";
import Room from "./Room";

const link = "underline decoration-1 underline-offset-4 decoration-grid hover:decoration-verdigris hover:text-verdigris transition-colors";

export default function Home() {
  const [first, middle, last] = profile.name.split(" ");

  return (
    <div className="min-h-screen bg-plaster text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-ink text-plaster px-3 py-2">
        Skip to content
      </a>

      <header className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-4 justify-between items-baseline">
        <span className="font-semibold">{profile.name}</span>
        <nav aria-label="Main">
          <ul className="flex gap-6 text-muted">
            <li><a href="#work" className={link}>Work</a></li>
            <li><a href="#about" className={link}>About</a></li>
            <li><a href="/cv" className={link}>CV</a></li>
            <li><a href="#contact" className={link}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="max-w-6xl mx-auto px-6 pb-24">
        <Room>
          <h1 className="room-name">
            {first} {middle}<br />{last}
          </h1>
        </Room>

        <section className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8">
          <p className="md:col-span-7 text-2xl md:text-3xl leading-snug font-medium text-pretty">
            I design interactive systems that respond to the person in front of them.
          </p>
          <div className="md:col-span-5 space-y-4 text-muted leading-relaxed">
            <p>
              A screen that turns into a window when you move. A belt that lets you feel distance.
              An app that knows when you look away. I&apos;m studying for an MSc in Medialogy at
              Aalborg University Copenhagen, after a BSc in Digital Design &amp; Interactive Technologies at ITU.
            </p>
            <p className="hidden [@media(hover:hover)]:block text-sm">
              Move your pointer: the room above shifts with your viewpoint, using the same
              head-coupled perspective as my Rådhuspladsen installation.
            </p>
          </div>
        </section>

        <section id="work" className="mt-28">
          <h2 className="text-3xl font-extrabold tracking-tight">Selected work</h2>
          <ul className="mt-10 space-y-16">
            {profile.projects.map((p) => (
              <li key={p.title} className="grid md:grid-cols-12 gap-x-8 gap-y-3">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold text-balance">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{[p.role, p.year].filter(Boolean).join(", ")}</p>
                </div>
                <div className="md:col-span-8 max-w-[65ch] space-y-3 leading-relaxed">
                  <p>{p.description}</p>
                  <p className="text-sm text-muted">{p.tags.join(", ")}</p>
                  {p.href && (
                    <a href={p.href} className={`${link} inline-block text-sm text-verdigris`}>
                      View the code on GitHub
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="mt-28 grid md:grid-cols-12 gap-x-8 gap-y-10">
          <div className="md:col-span-4">
            <h2 className="text-3xl font-extrabold tracking-tight">About</h2>
          </div>
          <div className="md:col-span-8 space-y-10 max-w-[65ch]">
            <p className="leading-relaxed">{profile.summary}</p>
            <div>
              <h3 className="font-bold">Experience</h3>
              <ul className="mt-3 space-y-5">
                {profile.experience.map((x) => (
                  <li key={x.role}>
                    <p>{x.role}, {x.org} <span className="text-muted whitespace-nowrap">{x.period}</span></p>
                    <p className="mt-1 text-muted leading-relaxed">{x.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Education</h3>
              <ul className="mt-3 space-y-2">
                {profile.education.map((e) => (
                  <li key={e.degree}>
                    {e.degree}, {e.school} <span className="text-muted whitespace-nowrap">{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Skills</h3>
              <dl className="mt-3 space-y-2">
                {Object.entries(profile.skills).map(([group, items]) => (
                  <div key={group} className="sm:flex gap-2">
                    <dt className="text-muted sm:w-48 shrink-0">{group}</dt>
                    <dd>{items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p><span className="font-bold">Languages:</span> {profile.languages.join(", ")}</p>
          </div>
        </section>

        <section id="contact" className="mt-28">
          <h2 className="text-3xl font-extrabold tracking-tight">Contact</h2>
          <a href={`mailto:${profile.email}`} className={`${link} mt-6 inline-block text-2xl sm:text-4xl md:text-5xl font-bold text-verdigris break-all`}>
            {profile.email}
          </a>
          <p className="mt-6 max-w-[60ch] text-muted leading-relaxed">
            Based in {profile.location}. Open to student jobs, internships and collaborations in
            interaction design, immersive media and physical computing.
          </p>
          <ul className="mt-6 flex gap-6">
            <li><a href={profile.links.github} className={link}>GitHub</a></li>
            <li><a href={profile.links.linkedin} className={link}>LinkedIn</a></li>
            <li><a href="/cv" className={link}>Read my CV</a></li>
          </ul>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-muted">
        © {profile.name}
      </footer>
    </div>
  );
}

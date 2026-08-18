import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Headset, Phone } from "lucide-react";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug, title: service.title, short: service.short };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "خدمت یافت نشد | هلپینو ۲۴" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} | هلپینو ۲۴`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.title,
            description: loaderData.short,
            provider: { "@type": "Organization", name: "هلپینو ۲۴" },
            areaServed: "IR",
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const others = services.filter((s) => s.slug !== slug).slice(0, 4);
  const Icon = service.icon;

  return (
    <div className="bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl text-primary-foreground surface-primary">
              <Headset className="size-5" />
            </span>
            <span className="text-base font-extrabold">هلپینو ۲۴</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 surface-primary"
            >
              <Phone className="size-4" />
              درخواست پشتیبانی
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-2 text-sm font-bold text-primary"
            >
              همه خدمات
              <ArrowLeft className="size-4" />
            </Link>
          </div>

        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <nav aria-label="مسیر صفحه" className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                خانه
              </Link>
              <span className="px-2">/</span>
              <Link to="/services" className="hover:text-primary">
                خدمات
              </Link>
            </nav>

            <span className="mt-6 grid size-14 place-items-center rounded-3xl bg-primary/10 text-primary">
              <Icon className="size-7" />
            </span>
            <h1 className="mt-6 text-balance text-3xl font-black leading-[1.4] sm:text-4xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              {service.long}
            </p>

            <ul className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-5 py-4 text-sm font-semibold"
                >
                  <Check className="size-4 shrink-0 text-primary" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:-translate-y-1 surface-primary"
              >
                <Phone className="size-4" />
                درخواست پشتیبانی
              </Link>
              <Link
                to="/"
                hash="services"
                className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-1"
              >
                سایر خدمات
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-xl font-extrabold">خدمات مرتبط</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold leading-7">{s.title}</h3>
                  <p className="mt-2 grow text-xs leading-6 text-muted-foreground">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

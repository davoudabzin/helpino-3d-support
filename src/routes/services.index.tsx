import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Headset, Phone } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "خدمات هلپینو ۲۴ | مرکز تماس، پشتیبانی مشتریان و پشتیبانی فنی" },
      {
        name: "description",
        content:
          "فهرست کامل خدمات هلپینو ۲۴: مرکز تماس، پشتیبانی مشتریان، پشتیبانی فنی کامپیوتر و موبایل، Android، iPhone، پشتیبانی از راه دور، شبکه و کسب‌وکارها.",
      },
      { property: "og:title", content: "خدمات هلپینو ۲۴" },
      {
        property: "og:description",
        content: "همه خدمات پشتیبانی و مرکز تماس هلپینو ۲۴ در یک صفحه.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-2 text-sm font-bold text-primary"
          >
            بازگشت به خانه
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-balance text-3xl font-black leading-[1.4] sm:text-4xl">
          خدمات هلپینو ۲۴
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          از پاسخگویی به مشتریان تا رفع مشکلات فنی و پشتیبانی دیجیتال؛ خدمات هلپینو ۲۴ برای
          نیازهای مختلف کاربران و کسب‌وکارها
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="size-6" />
              </span>
              <h2 className="mt-5 text-base font-extrabold leading-7">{s.title}</h2>
              <p className="mt-3 grow text-sm leading-7 text-muted-foreground">{s.short}</p>
              <div className="mt-6 flex flex-col gap-2">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  aria-label={`مشاهده خدمت ${s.title}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 surface-primary"
                >
                  مشاهده خدمت
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </Link>
                <Link
                  to="/"
                  hash="contact"
                  aria-label={`درخواست پشتیبانی برای ${s.title}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                >
                  <Phone className="size-4" />
                  درخواست پشتیبانی
                </Link>
              </div>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}

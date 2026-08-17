import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="relative isolate py-20 sm:py-24">
      <div
        className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-72 max-w-4xl rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            خدمات
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.45] sm:text-4xl">
            خدمات هلپینو ۲۴
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از پاسخگویی به مشتریان تا رفع مشکلات فنی و پشتیبانی دیجیتال؛ خدمات هلپینو ۲۴ برای
            نیازهای مختلف کاربران و کسب‌وکارها
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 90} className="h-full">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
              >
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:text-primary-foreground group-hover:surface-primary"
                  aria-hidden
                >
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-base font-extrabold leading-7">{s.title}</h3>
                <p className="mt-3 grow text-sm leading-7 text-muted-foreground">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  مشاهده خدمت
                  <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, CountUp } from "@/components/site/reveal";
import { ServicesSection } from "@/components/site/services-section";

import heroImg from "@/assets/hero-callcenter.png";
import callCenterImg from "@/assets/callcenter-scene.png";
import techImg from "@/assets/tech-support.png";
import dashboardImg from "@/assets/dashboard-3d.png";
import {
  Phone,
  Headset,
  MessageCircle,
  Ticket,
  Clock,
  Zap,
  Users,
  Share2,
  ShieldCheck,
  Heart,
  Mail,
  Globe,
  Send,
  Instagram,
  MonitorSmartphone,
  Building2,
  GraduationCap,
  ShoppingCart,
  Rocket,
  Code2,
  Store,
  Wrench,
  Cpu,
  ArrowLeft,
} from "lucide-react";

const faqs = [
  {
    q: "مرکز تماس هلپینو ۲۴ چه خدماتی ارائه می‌دهد؟",
    a: "مرکز تماس هلپینو ۲۴ شامل پاسخگویی تلفنی، تماس ورودی و خروجی، پیگیری مشتریان، ثبت و مدیریت درخواست‌ها، پشتیبانی مشتریان و نظرسنجی رضایت است؛ همه در یک فرایند منظم و قابل گزارش‌گیری.",
  },
  {
    q: "آیا هلپینو ۲۴ پشتیبانی ۲۴ ساعته دارد؟",
    a: "بله. تیم‌های شیفتی هلپینو ۲۴ به صورت شبانه‌روزی و در تمام روزهای هفته پاسخگوی تماس‌ها، چت‌ها و تیکت‌های مشتریان شما هستند.",
  },
  {
    q: "آیا امکان برون‌سپاری مرکز تماس وجود دارد؟",
    a: "بله. کسب‌وکارها می‌توانند کل پاسخگویی تلفنی و پشتیبانی مشتریان خود را به هلپینو ۲۴ بسپارند؛ از تعریف سناریوی مکالمه تا گزارش عملکرد ماهانه.",
  },
  {
    q: "پشتیبانی از راه دور چگونه انجام می‌شود؟",
    a: "پس از ثبت درخواست، کارشناس با شما تماس می‌گیرد و از طریق یک اتصال امن Remote، دستگاه شما را بررسی و مشکل را حل می‌کند. کنترل اتصال همیشه در اختیار شماست.",
  },
  {
    q: "آیا هلپینو ۲۴ از کامپیوتر و لپ‌تاپ پشتیبانی می‌کند؟",
    a: "بله. رفع مشکلات ویندوز، کندی سیستم، نصب و تنظیم نرم‌افزارها و خطاهای رایج کامپیوتر و لپ‌تاپ بخشی از خدمات پشتیبانی فنی هلپینو ۲۴ است.",
  },
  {
    q: "آیا پشتیبانی Android و iPhone ارائه می‌شود؟",
    a: "بله. پشتیبانی تخصصی اندروید (حساب گوگل، به‌روزرسانی، اپلیکیشن‌ها) و پشتیبانی iPhone و Apple (Apple ID، iCloud، تنظیمات iOS) ارائه می‌شود.",
  },
  {
    q: "آیا خدمات پشتیبانی برای کسب‌وکارها ارائه می‌شود؟",
    a: "بله. کسب‌وکارها، استارتاپ‌ها و فروشگاه‌های اینترنتی می‌توانند از خط اختصاصی، کارشناس آموزش‌دیده روی محصول و گزارش عملکرد ماهانه هلپینو ۲۴ استفاده کنند.",
  },
  {
    q: "چگونه می‌توان درخواست پشتیبانی ثبت کرد؟",
    a: "کافی است فرم درخواست پشتیبانی را تکمیل کنید یا با مرکز تماس هلپینو ۲۴ تماس بگیرید؛ درخواست ثبت می‌شود و کارشناس مربوطه در کوتاه‌ترین زمان با شما ارتباط می‌گیرد.",
  },

];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مرکز تماس و پشتیبانی حرفه‌ای | هلپینو ۲۴" },
      {
        name: "description",
        content:
          "هلپینو ۲۴؛ مرکز تماس حرفه‌ای، پشتیبانی تلفنی، آنلاین و فنی ۲۴ ساعته، برون‌سپاری کال سنتر و پشتیبانی از راه دور برای کسب‌وکارها.",
      },
      { property: "og:title", content: "مرکز تماس و پشتیبانی حرفه‌ای | هلپینو ۲۴" },
      {
        property: "og:description",
        content:
          "پاسخگویی، پشتیبانی و حل مشکلات مشتریان؛ سریع، تخصصی و همیشه در دسترس با هلپینو ۲۴.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "مرکز تماس و پشتیبانی مشتریان",
              name: "خدمات مرکز تماس هلپینو ۲۴",
              provider: { "@type": "Organization", name: "هلپینو ۲۴" },
              areaServed: "IR",
              description:
                "پشتیبانی تلفنی، پشتیبانی آنلاین، پشتیبانی فنی و برون‌سپاری مرکز تماس به صورت ۲۴ ساعته.",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function SectionTitle({
  overline,
  title,
  desc,
  dark = false,
}: {
  overline?: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {overline && (
        <span
          className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide ${
            dark ? "glass-dark text-primary-glow" : "glass text-primary"
          }`}
        >
          {overline}
        </span>
      )}
      <h2
        className={`mt-5 text-balance text-3xl font-extrabold leading-[1.45] sm:text-4xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-8 ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function Cta({
  children,
  variant = "primary",
  href = "#contact",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  href?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.97]";
  const styles = {
    primary:
      "text-primary-foreground shadow-[var(--shadow-float)] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] surface-primary",
    ghost:
      "glass text-foreground hover:-translate-y-1 hover:text-primary hover:shadow-[var(--shadow-glow)]",
    light:
      "glass-dark text-white hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
    </a>
  );
}

function Home() {
  return (
    <div id="top" className="overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Intro />
        <ServicesSection />

        <CallCenter />
        <MultiChannel />
        <TechSupport />
        <RemoteSupport />
        <WhyUs />
        <HowItWorks />
        <BusinessSupport />
        <Industries />
        <DashboardTech />
        <CustomerExperience />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

const nav = [
  { label: "خانه", href: "#top" },
  { label: "خدمات", href: "#services" },
  { label: "مرکز تماس", href: "#call-center" },
  { label: "پشتیبانی فنی", href: "#technical" },
  { label: "پشتیبانی کسب‌وکارها", href: "#business" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];


function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span
            className="grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground shadow-[var(--shadow-float)] surface-primary"
            aria-hidden
          >
            <Headset className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold">هلپینو ۲۴</span>
            <span className="block truncate text-[11px] text-muted-foreground">
              Helpino 24 — Call Center
            </span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:-translate-y-0.5 surface-primary"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">درخواست پشتیبانی</span>
            <span className="sm:hidden">پشتیبانی</span>
          </a>
        </div>
      </div>

      <nav
        aria-label="منوی موبایل"
        className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="inline-flex min-h-10 shrink-0 items-center rounded-xl bg-secondary/60 px-3.5 text-[13px] font-semibold text-secondary-foreground"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>

  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden />
      <div
        className="absolute -top-40 right-[-10%] -z-10 size-[38rem] rounded-full opacity-45 blur-3xl surface-primary"
        aria-hidden
      />
      <div
        className="absolute bottom-[-14rem] left-[-8%] -z-10 size-[32rem] rounded-full bg-primary-glow/30 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-20">
        <Reveal className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            پشتیبانی زنده، همین حالا در دسترس
          </span>

          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.35] sm:text-5xl lg:text-[3.35rem]">
            مرکز تماس و <span className="text-gradient">پشتیبانی حرفه‌ای</span> هلپینو ۲۴
          </h1>

          <p className="mt-5 text-lg font-semibold leading-9 text-secondary-foreground">
            پاسخگویی، پشتیبانی و حل مشکلات مشتریان؛ سریع، تخصصی و همیشه در دسترس
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
            هلپینو ۲۴ با ارائه خدمات مرکز تماس، پشتیبانی تلفنی و پشتیبانی دیجیتال، به
            کسب‌وکارها کمک می‌کند تجربه‌ای سریع، منظم و حرفه‌ای برای مشتریان خود ایجاد کنند.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Cta>درخواست پشتیبانی</Cta>
            <Cta variant="ghost">مشاوره با هلپینو ۲۴</Cta>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-3">
            {[
              { k: "پاسخگویی زیر", v: 30, s: " ثانیه" },
              { k: "رضایت مشتریان", v: 98, s: "٪" },
              { k: "تماس ماهانه", v: 45000, s: "+" },
            ].map((s) => (
              <div key={s.k} className="glass rounded-3xl px-3 py-4 text-center">
                <dt className="text-[11px] text-muted-foreground">{s.k}</dt>
                <dd className="mt-1 text-xl font-black text-primary sm:text-2xl">
                  <CountUp to={s.v} suffix={s.s} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="relative order-1 lg:order-2" style={{ perspective: "1400px" }}>
          <div className="animate-float-slow">
            <img
              src={heroImg}
              alt="کارشناس مرکز تماس هلپینو ۲۴ با هدست در حال پاسخگویی به مشتریان کنار داشبورد سه‌بعدی پشتیبانی"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="mx-auto w-full max-w-[36rem] drop-shadow-[0_40px_60px_rgba(20,45,90,0.28)]"
            />
          </div>

          <div className="animate-float absolute right-0 top-8 hidden sm:block">
            <div className="glass rounded-3xl px-5 py-4 text-right">
              <p className="text-[11px] text-muted-foreground">پشتیبانی</p>
              <p className="text-2xl font-black text-gradient">۲۴/۷</p>
            </div>
          </div>

          <div className="animate-float absolute bottom-10 left-0 hidden sm:block [animation-delay:1.2s]">
            <div className="glass flex items-center gap-3 rounded-3xl px-5 py-4">
              <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold">چت آنلاین</p>
                <p className="text-[11px] text-muted-foreground">۱۲ گفتگوی فعال</p>
              </div>
            </div>
          </div>

          <div className="animate-float absolute bottom-40 right-2 hidden lg:block [animation-delay:2s]">
            <div className="glass flex items-center gap-3 rounded-3xl px-5 py-4">
              <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Ticket className="size-5" />
              </span>
              <div>
                <p className="text-xs font-bold">تیکت حل‌شده</p>
                <p className="text-[11px] text-muted-foreground">امروز: ۳۴۸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const trustCards = [
  { icon: Clock, t: "پشتیبانی ۲۴ ساعته", d: "شبانه‌روزی، حتی در تعطیلات و ساعات پیک تماس." },
  { icon: Zap, t: "پاسخگویی سریع", d: "میانگین پاسخ زیر ۳۰ ثانیه در کانال تلفن و چت." },
  { icon: Users, t: "کارشناسان متخصص", d: "تیم آموزش‌دیده روی محصول و لحن برند شما." },
  { icon: Share2, t: "پشتیبانی چندکاناله", d: "تلفن، چت، پیام‌رسان‌ها، ایمیل و تیکت در یک جا." },
];

function Trust() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          overline="چرا کسب‌وکارها به ما اعتماد می‌کنند"
          title="پشتیبانی حرفه‌ای، فراتر از پاسخگویی"
          desc="هر تماس، چت و تیکت در یک فرایند مشخص ثبت، پیگیری و گزارش می‌شود."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <article
                className="card-3d glass group h-full rounded-[1.75rem] p-7"
                style={{ perspective: "900px" }}
              >
                <span className="grid size-14 place-items-center rounded-2xl text-primary-foreground shadow-[var(--shadow-float)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 surface-primary">
                  <c.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold">{c.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            درباره هلپینو ۲۴
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.45] sm:text-4xl">
            هلپینو ۲۴؛ مرکز تماس و پشتیبانی برای کسب‌وکارهای مدرن
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            هلپینو ۲۴ فقط یک مرکز تماس نیست؛ یک مجموعه چندمنظوره برای پاسخگویی، پشتیبانی
            مشتریان، پشتیبانی فنی و خدمات دیجیتال است. ما تماس‌های ورودی، گفتگوهای آنلاین،
            تیکت‌ها و درخواست‌های فنی را در یک ساختار واحد مدیریت می‌کنیم تا مشتری شما در هیچ
            نقطه‌ای از مسیر، بی‌پاسخ نماند.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "مرکز تماس ورودی و خروجی",
              "پشتیبانی آنلاین و چت زنده",
              "پشتیبانی فنی و از راه دور",
              "گزارش‌های دقیق و قابل پیگیری",
            ].map((t) => (
              <li key={t} className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-4" />
                </span>
                <span className="min-w-0 text-sm font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[2.5rem] glass p-4 sm:p-6">
            <img
              src={callCenterImg}
              alt="ایلاستریشن سه‌بعدی از مرکز ارتباطی دیجیتال هلپینو ۲۴ با کارشناسان و داشبوردهای شناور"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-[1.75rem]"
            />
            <div className="animate-float absolute -bottom-6 right-6 glass rounded-2xl px-5 py-3">
              <p className="text-xs font-bold text-primary">میانگین رضایت مشتری</p>
              <p className="text-lg font-black">۴.۹ از ۵</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const callCenterServices = [
  "پاسخگویی تلفنی",
  "مرکز تماس ورودی",
  "تماس خروجی",
  "پیگیری مشتریان",
  "ثبت و مدیریت درخواست‌ها",
  "پشتیبانی مشتریان",
  "نظرسنجی و رضایت مشتری",
  "مدیریت تماس‌ها",
];

function CallCenter() {
  return (
    <section id="call-center" className="relative isolate overflow-hidden surface-navy py-24">
            <div
        className="bg-grid absolute inset-0 -z-10 opacity-20 mix-blend-overlay"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          dark
          overline="خدمات مرکز تماس"
          title="مرکز تماس حرفه‌ای برای ارتباط بهتر با مشتریان"
          desc="از اولین زنگ تا آخرین پیگیری؛ خدمات کال سنتر هلپینو ۲۴ برای کسب‌وکارهایی که ارتباط با مشتری برایشان جدی است."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {callCenterServices.map((s) => (
                <div
                  key={s}
                  className="glass-dark group flex items-center gap-3 rounded-2xl px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/25 text-primary-glow transition-transform duration-300 group-hover:rotate-12">
                    <Phone className="size-4" />
                  </span>
                  <span className="min-w-0 text-sm font-semibold text-white">{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Cta variant="light">درخواست راه‌اندازی مرکز تماس</Cta>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-[2.5rem] glass-dark p-4">
              <img
                src={callCenterImg}
                alt="صحنه سه‌بعدی مرکز تماس هلپینو ۲۴ با چند کارشناس هدست‌به‌سر در محیط دیجیتال مدرن"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-[1.75rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const channels = [
  { icon: Phone, label: "Phone" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Send, label: "Telegram" },
  { icon: Instagram, label: "Instagram" },
  { icon: Globe, label: "Website" },
  { icon: MessageCircle, label: "Live Chat" },
  { icon: Mail, label: "Email" },
  { icon: Ticket, label: "Ticket" },
];

function MultiChannel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          overline="پشتیبانی چندکاناله"
          title="مشتری شما از هر کانالی که ارتباط بگیرد، تنها نمی‌ماند"
          desc="تمام کانال‌های ارتباطی به یک هسته واحد متصل‌اند؛ تاریخچه گفتگو گم نمی‌شود و پاسخ‌ها یکپارچه است."
        />

        <Reveal className="mt-16">
          <div className="relative mx-auto aspect-square w-full max-w-[38rem]">
            <div
              className="absolute inset-[18%] rounded-full border border-primary/20"
              aria-hidden
            />
            <div
              className="absolute inset-[6%] rounded-full border border-dashed border-primary/15"
              aria-hidden
            />
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative grid size-32 place-items-center rounded-full text-center text-primary-foreground shadow-[var(--shadow-glow)] sm:size-40 surface-primary">
                <span
                  className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/40"
                  aria-hidden
                />
                <span className="relative">
                  <Headset className="mx-auto size-7" />
                  <span className="mt-1 block text-sm font-black">HELPINO 24</span>
                </span>
              </div>
            </div>

            {channels.map((c, i) => {
              const angle = (i / channels.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + 42 * Math.cos(angle);
              const y = 50 + 42 * Math.sin(angle);
              return (
                <div
                  key={c.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className="glass group flex w-[6.5rem] flex-col items-center gap-1.5 rounded-2xl px-2 py-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)] sm:w-28"
                    style={{ animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` }}
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <c.icon className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold">{c.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const techItems = [
  "رفع مشکلات کامپیوتر",
  "رفع مشکلات لپ‌تاپ",
  "پشتیبانی موبایل",
  "Android",
  "iPhone",
  "Apple ID",
  "Windows",
  "نرم‌افزارها",
  "مشکلات اینترنت",
  "شبکه",
  "پشتیبانی از راه دور",
];

function TechSupport() {
  return (
    <section id="technical" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal delay={80}>
          <div className="relative">
            <div
              className="absolute inset-8 -z-10 rounded-full bg-primary-glow/25 blur-3xl"
              aria-hidden
            />
            <img
              src={techImg}
              alt="ایلاستریشن سه‌بعدی پشتیبانی فنی هلپینو ۲۴ شامل لپ‌تاپ، موبایل، ابر و اتصال از راه دور"
              width={1280}
              height={960}
              loading="lazy"
              className="animate-float-slow w-full"
            />
          </div>
        </Reveal>

        <Reveal>
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            پشتیبانی فنی
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] sm:text-4xl">
            پشتیبانی فنی؛ از مشکل تا راه‌حل
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            کارشناسان فنی هلپینو ۲۴ مشکلات کامپیوتر، لپ‌تاپ، موبایل، نرم‌افزار، اینترنت و شبکه
            را بررسی و در کوتاه‌ترین زمان برطرف می‌کنند؛ حضوری یا از راه دور.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {techItems.map((t) => (
              <span
                key={t}
                className="glass rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:shadow-[var(--shadow-glow)]"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RemoteSupport() {
  return (
    <section className="relative isolate overflow-hidden surface-navy py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          dark
          overline="Remote Support"
          title="مشکل را از راه دور حل می‌کنیم"
          desc="بدون جابه‌جایی و بدون اتلاف وقت؛ کارشناس هلپینو ۲۴ از طریق یک اتصال امن، دستگاه شما را بررسی و مشکل را برطرف می‌کند."
        />

        <Reveal className="mt-16">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="glass-dark rounded-[2rem] p-8 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-primary/20 text-primary-glow">
                <MonitorSmartphone className="size-7" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">دستگاه شما</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                لپ‌تاپ، کامپیوتر یا موبایل با یک درخواست ساده آماده اتصال می‌شود.
              </p>
            </div>

            <div className="relative mx-auto flex h-24 w-full items-center justify-center md:h-40 md:w-40">
              <div
                className="h-[3px] w-full rounded-full surface-primary md:h-full md:w-[3px]"
                aria-hidden
              />
              <span className="absolute grid size-14 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)] surface-primary">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/50" />
                <ShieldCheck className="relative size-6" />
              </span>
            </div>

            <div className="glass-dark rounded-[2rem] p-8 text-center">
              <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-primary/20 text-primary-glow">
                <Headset className="size-7" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">کارشناس هلپینو ۲۴</h3>
              <p className="mt-2 text-sm leading-7 text-white/65">
                اتصال امن، کنترل در اختیار شما و گزارش کامل از اقدامات انجام‌شده.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Cta variant="light">درخواست پشتیبانی فوری</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const whyCards = [
  { icon: Zap, t: "پاسخگویی سریع", d: "صف تماس هوشمند و پاسخ در کمترین زمان ممکن." },
  { icon: Users, t: "کارشناسان متخصص", d: "آموزش اختصاصی بر اساس محصول و مشتریان شما." },
  { icon: Clock, t: "پشتیبانی ۲۴ ساعته", d: "پوشش شبانه‌روزی در تمام روزهای سال." },
  { icon: Share2, t: "پشتیبانی چندکاناله", d: "تلفن، چت، شبکه‌های اجتماعی، ایمیل و تیکت." },
  { icon: ShieldCheck, t: "فرایند منظم و قابل پیگیری", d: "هر درخواست شماره، مسئول و مهلت دارد." },
  { icon: Heart, t: "تمرکز بر رضایت مشتری", d: "نظرسنجی پس از تماس و بهبود مستمر کیفیت." },
];

function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          overline="مزیت‌های ما"
          title="چرا هلپینو ۲۴؟"
          desc="شش دلیل که کسب‌وکارها پشتیبانی مشتریان خود را به هلپینو ۲۴ می‌سپارند."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <article
                className="card-3d glass group relative h-full overflow-hidden rounded-[1.75rem] p-7"
                style={{ perspective: "900px" }}
              >
                <span
                  className="absolute -left-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="grid size-14 place-items-center rounded-2xl text-primary-foreground shadow-[var(--shadow-float)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 surface-primary">
                  <c.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold">{c.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { t: "ثبت درخواست", d: "از طریق تماس، چت، پیام‌رسان یا فرم سایت." },
  { t: "بررسی مشکل", d: "دسته‌بندی درخواست و تعیین سطح اولویت." },
  { t: "اتصال به کارشناس", d: "ارجاع به کارشناس متخصص همان حوزه." },
  { t: "حل مشکل", d: "پاسخ تلفنی، راهنمایی آنلاین یا پشتیبانی از راه دور." },
  { t: "پیگیری رضایت مشتری", d: "نظرسنجی و ثبت بازخورد برای بهبود کیفیت." },
];

function HowItWorks() {
  return (
    <section id="process" className="relative isolate overflow-hidden surface-navy py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          dark
          overline="How it works"
          title="فرایند دریافت پشتیبانی در هلپینو ۲۴"
          desc="مسیری شفاف و قابل پیگیری از لحظه ثبت درخواست تا رضایت نهایی مشتری."
        />

        <div className="relative mt-16">
          <div
            className="absolute inset-x-0 top-[3.25rem] hidden h-[2px] surface-primary lg:block"
            aria-hidden
          />
          <ol className="grid gap-6 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 110}>
                <li className="relative flex h-full flex-col items-center text-center">
                  <span className="relative z-10 grid size-[4.5rem] place-items-center rounded-3xl text-lg font-black text-primary-foreground shadow-[var(--shadow-glow)] surface-primary">
                    {(i + 1).toLocaleString("fa-IR")}
                  </span>
                  <div className="glass-dark mt-5 w-full flex-1 rounded-[1.5rem] p-6">
                    <h3 className="text-base font-extrabold text-white">{s.t}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const businessItems = [
  { icon: Headset, t: "برون‌سپاری مرکز تماس" },
  { icon: Users, t: "پشتیبانی مشتریان" },
  { icon: Phone, t: "پاسخگویی تلفنی" },
  { icon: MessageCircle, t: "پشتیبانی آنلاین" },
  { icon: Ticket, t: "ثبت و پیگیری تیکت" },
  { icon: Heart, t: "مدیریت ارتباط با مشتری" },
  { icon: Wrench, t: "پشتیبانی فنی" },
];

function BusinessSupport() {
  return (
    <section id="business" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            راهکار سازمانی B2B
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] sm:text-4xl">
            پشتیبانی برون‌سپاری‌شده برای کسب‌وکارها
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            به‌جای ساختن یک تیم پشتیبانی از صفر، تیم آماده، آموزش‌دیده و قابل مقیاس هلپینو ۲۴
            را در کنار کسب‌وکار خود داشته باشید؛ با گزارش عملکرد شفاف و هزینه قابل پیش‌بینی.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {businessItems.map((b) => (
              <div
                key={b.t}
                className="glass group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <b.icon className="size-4" />
                </span>
                <span className="min-w-0 text-sm font-semibold">{b.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Cta>دریافت پلن پشتیبانی سازمانی</Cta>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[2.5rem] glass p-4">
            <img
              src={dashboardImg}
              alt="داشبورد سه‌بعدی مدیریتی هلپینو ۲۴ برای پایش تماس‌ها و عملکرد تیم پشتیبانی"
              width={1280}
              height={800}
              loading="lazy"
              className="w-full rounded-[1.75rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const industries = [
  { icon: ShoppingCart, t: "فروشگاه‌های اینترنتی" },
  { icon: Cpu, t: "شرکت‌های فناوری" },
  { icon: Rocket, t: "استارتاپ‌ها" },
  { icon: Wrench, t: "مجموعه‌های خدماتی" },
  { icon: GraduationCap, t: "شرکت‌های آموزشی" },
  { icon: Globe, t: "کسب‌وکارهای آنلاین" },
  { icon: Code2, t: "شرکت‌های نرم‌افزاری" },
  { icon: Store, t: "مراکز فروش و خدمات" },
];

function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          overline="صنایع"
          title="راهکارهای پشتیبانی متناسب با هر کسب‌وکار"
          desc="سناریوی پاسخگویی، سطح خدمات و کانال‌های ارتباطی بر اساس نوع کسب‌وکار شما تنظیم می‌شود."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <article
                className="card-3d glass flex h-full items-center gap-4 rounded-[1.5rem] p-6"
                style={{ perspective: "800px" }}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </span>
                <h3 className="min-w-0 text-sm font-extrabold leading-7">{c.t}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const kpis = [
  { t: "Active Calls", fa: "تماس‌های در حال مکالمه", v: 128, s: "" },
  { t: "Waiting Calls", fa: "تماس‌های در صف انتظار", v: 7, s: "" },
  { t: "Active Agents", fa: "کارشناسان فعال", v: 64, s: "" },
  { t: "Average Response Time", fa: "میانگین زمان پاسخ (ثانیه)", v: 27, s: "" },
  { t: "Open Tickets", fa: "تیکت‌های باز", v: 86, s: "" },
  { t: "Resolved Tickets", fa: "تیکت‌های حل‌شده امروز", v: 942, s: "" },
  { t: "Resolved Requests", fa: "درخواست‌های حل‌شده (ماه)", v: 15400, s: "+" },
  { t: "Customer Satisfaction", fa: "رضایت مشتری", v: 98, s: "٪" },
];


function DashboardTech() {
  return (
    <section className="relative isolate overflow-hidden surface-navy py-24">
            <div className="bg-grid absolute inset-0 -z-10 opacity-20 mix-blend-overlay" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          dark
          overline="تکنولوژی"
          title="داشبورد زنده مرکز تماس هلپینو ۲۴"
          desc="نمونه‌ای از داشبورد پایش عملکرد (Demo UI) — اعداد نمایشی هستند و صرفاً برای معرفی قابلیت‌های گزارش‌گیری آورده شده‌اند."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-[2.5rem] glass-dark p-4">
              <img
                src={dashboardImg}
                alt="داشبورد سه‌بعدی فناورانه مرکز تماس با نمودارهای زنده و شاخص‌های عملکرد پشتیبانی"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full rounded-[1.75rem]"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {kpis.map((k, i) => (
              <Reveal key={k.t} delay={i * 80}>
                <div className="glass-dark rounded-[1.5rem] p-6 transition-transform duration-300 hover:-translate-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-glow">
                    {k.t}
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    <CountUp to={k.v} suffix={k.s} />
                  </p>
                  <p className="mt-1 text-xs text-white/55">{k.fa}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerExperience() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            تجربه مشتری
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] sm:text-4xl">
            هر تماس، یک فرصت برای ساختن تجربه بهتر
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            برای مشتری شما، کیفیت پشتیبانی همان کیفیت برند است. هلپینو ۲۴ روی لحن گفتگو،
            سرعت پاسخ و حل واقعی مشکل تمرکز می‌کند تا هر تماس به یک تجربه مثبت تبدیل شود.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { t: "Customer Experience", d: "طراحی مسیر گفتگو بر اساس نیاز مشتری" },
              { t: "Customer Satisfaction", d: "سنجش رضایت پس از هر تماس" },
              { t: "Fast Response", d: "کاهش زمان انتظار و صف تماس" },
              { t: "Professional Support", d: "کارشناسان آموزش‌دیده و منظم" },
            ].map((c) => (
              <div key={c.t} className="glass rounded-2xl p-5">
                <p className="text-sm font-extrabold text-primary">{c.t}</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[2.5rem] glass p-4">
            <img
              src={heroImg}
              alt="ارتباط موفق کارشناس پشتیبانی هلپینو ۲۴ با مشتری در فضایی حرفه‌ای و سه‌بعدی"
              width={1280}
              height={1280}
              loading="lazy"
              className="w-full rounded-[1.75rem]"
            />
            <div className="animate-float absolute bottom-8 left-8 glass rounded-2xl px-5 py-3">
              <p className="text-xs text-muted-foreground">نرخ حل در اولین تماس</p>
              <p className="text-lg font-black text-gradient">۸۹٪</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          overline="سوالات متداول"
          title="هر آنچه درباره خدمات پشتیبانی هلپینو ۲۴ باید بدانید"
        />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="glass overflow-hidden rounded-[1.5rem] border-none px-6"
              >
                <AccordionTrigger className="text-right text-sm font-extrabold leading-7 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-8 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative isolate overflow-hidden surface-navy py-28">
            <img
        src={callCenterImg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 -z-10 size-full object-cover opacity-[0.12]"
      />
      <div
        className="absolute -top-24 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/35 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="mx-auto flex w-fit gap-3">
            {[Headset, Phone, MessageCircle, Ticket].map((I, i) => (
              <span
                key={i}
                className="glass-dark grid size-12 place-items-center rounded-2xl text-primary-glow"
                style={{ animation: `float ${6 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                <I className="size-5" />
              </span>
            ))}
          </div>
          <h2 className="mt-8 text-balance text-3xl font-black leading-[1.45] text-white sm:text-4xl">
            پشتیبانی کسب‌وکارتان را به متخصصان بسپارید
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            هلپینو ۲۴ آماده است تا پاسخگویی و پشتیبانی مشتریان شما را حرفه‌ای‌تر، سریع‌تر و
            منظم‌تر کند.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta>درخواست مشاوره</Cta>
            <Cta variant="light">شروع همکاری</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const footerCols: { t: string; links: { l: string; slug?: string }[] }[] = [
  {
    t: "خدمات",
    links: [
      { l: "مرکز تماس و کال سنتر", slug: "call-center" },
      { l: "پشتیبانی مشتریان", slug: "customer-support" },
      { l: "پشتیبانی کامپیوتر و لپ‌تاپ", slug: "computer-support" },
      { l: "پشتیبانی موبایل", slug: "mobile-support" },
      { l: "پشتیبانی Android", slug: "android-support" },
      { l: "پشتیبانی iPhone و Apple", slug: "iphone-support" },
    ],
  },
  {
    t: "پشتیبانی تخصصی",
    links: [
      { l: "پشتیبانی از راه دور", slug: "remote-support" },
      { l: "پشتیبانی شبکه و اینترنت", slug: "network-support" },
      { l: "پشتیبانی شبکه‌های اجتماعی", slug: "social-media-support" },
      { l: "پشتیبانی وب‌سایت", slug: "website-support" },
      { l: "پشتیبانی دیجیتال", slug: "digital-support" },
      { l: "پشتیبانی کسب‌وکارها", slug: "business-support" },
    ],
  },
  {
    t: "هلپینو ۲۴",
    links: [
      { l: "درباره هلپینو ۲۴" },
      { l: "تماس با ما" },
      { l: "حریم خصوصی" },
      { l: "قوانین و مقررات" },
    ],
  },
];


function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl text-primary-foreground shadow-[var(--shadow-float)] surface-primary">
                <Headset className="size-5" />
              </span>
              <span>
                <span className="block text-base font-extrabold">هلپینو ۲۴</span>
                <span className="block text-[11px] text-muted-foreground">Helpino 24</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              مرکز تماس، پشتیبانی تلفنی، پشتیبانی آنلاین و پشتیبانی فنی ۲۴ ساعته برای
              کسب‌وکارها و کاربران.
            </p>
          </div>

          {footerCols.map((c) => (
            <nav key={c.t} aria-label={c.t}>
              <h3 className="text-sm font-extrabold">{c.t}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((item) => (
                  <li key={item.l}>
                    {item.slug ? (
                      <Link
                        to="/services/$slug"
                        params={{ slug: item.slug }}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.l}
                      </Link>
                    ) : (
                      <a
                        href="#contact"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear().toLocaleString("fa-IR", { useGrouping: false })} هلپینو
            ۲۴ — تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Building2 className="size-4" />
            پشتیبانی حرفه‌ای کسب‌وکارها
          </div>
        </div>
      </div>
    </footer>
  );
}

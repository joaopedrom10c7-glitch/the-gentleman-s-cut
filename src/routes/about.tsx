import { createFileRoute } from "@tanstack/react-router";
import { Award, Clock, MapPin, Scissors, ShieldCheck } from "lucide-react";
import { BARBER_SHOP } from "@/lib/barbershop-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `Sobre — ${BARBER_SHOP.name}` },
      {
        name: "description",
        content: `Conheça a história da ${BARBER_SHOP.name}. Tradição, qualidade e atendimento personalizado.`,
      },
      { property: "og:title", content: `Sobre — ${BARBER_SHOP.name}` },
      { property: "og:description", content: BARBER_SHOP.about.title },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const DIFFERENTIALS = [
  {
    icon: Scissors,
    title: "Profissionais experientes",
    description: "Barbeiros especializados em cortes clássicos e modernos.",
  },
  {
    icon: ShieldCheck,
    title: "Higiene e cuidado",
    description: "Equipamentos esterilizados e ambiente limpo e acolhedor.",
  },
  {
    icon: Award,
    title: "Produtos premium",
    description: "Utilizamos apenas produtos de alta qualidade para sua barba e cabelo.",
  },
];

function AboutPage() {
  return (
    <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sobre nós
          </span>
          <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
            {BARBER_SHOP.about.title}
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            {BARBER_SHOP.about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <item.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-heading text-lg text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <img
            src="/images/gallery-2.jpg"
            alt="Ambiente clássico da barbearia"
            className="rounded-2xl object-cover shadow-2xl shadow-black/20"
          />

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading text-xl text-foreground">Informações</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{BARBER_SHOP.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <ul className="space-y-1">
                  {BARBER_SHOP.hours.map((h) => (
                    <li key={h.day}>
                      <span className="text-foreground">{h.day}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

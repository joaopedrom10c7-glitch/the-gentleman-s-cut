import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/service-card";
import { BARBER_SHOP, SERVICES } from "@/lib/barbershop-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Serviços — ${BARBER_SHOP.name}` },
      {
        name: "description",
        content: `Conheça os serviços da ${BARBER_SHOP.name}: cortes sociais, degradês, barba, combos e mais. Agende pelo WhatsApp.`,
      },
      { property: "og:title", content: `Serviços — ${BARBER_SHOP.name}` },
      {
        property: "og:description",
        content: `Cortes, barba e cuidados masculinos na ${BARBER_SHOP.name}.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Nossos serviços
        </span>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
          Serviços & Cortes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Todos os nossos serviços são realizados com produtos de qualidade e atenção aos
          detalhes. Clique em "Agendar" para reservar pelo WhatsApp.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

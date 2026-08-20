import { createFileRoute } from "@tanstack/react-router";
import { BARBER_SHOP, GALLERY_IMAGES } from "@/lib/barbershop-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Galeria — ${BARBER_SHOP.name}` },
      {
        name: "description",
        content: `Veja os trabalhos realizados na ${BARBER_SHOP.name}. Inspire-se com nosso portfólio de cortes e barbas.`,
      },
      { property: "og:title", content: `Galeria — ${BARBER_SHOP.name}` },
      { property: "og:description", content: `Portfólio de trabalhos da ${BARBER_SHOP.name}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Portfólio
        </span>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Galeria</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Alguns dos nossos trabalhos. Cada imagem reflete o cuidado e a precisão que entregamos
          a cada cliente.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-3">
        {GALLERY_IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-2xl bg-card ${
              index === 0 || index === 3 ? "row-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-sm font-medium text-foreground">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

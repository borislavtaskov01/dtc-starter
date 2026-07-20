import { Github } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button, Heading, Text } from "@modules/common/components/ui"

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(241,245,249,0.95)_45%,_rgba(226,232,240,0.9)_100%)]">
      <div className="content-container relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center small:py-28">
        <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
          Refined storefront experience
        </div>
        <div className="mt-8 max-w-4xl">
          <Heading
            level="h1"
            className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 small:text-5xl xl:text-6xl"
          >
            Discover modern commerce with a faster, calmer shopping flow
          </Heading>
        </div>
        <Text className="mt-6 max-w-2xl text-base leading-7 text-slate-600 small:text-lg">
          Browse thoughtfully presented collections, compare products quickly,
          and move from discovery to checkout with less friction.
        </Text>
        <div className="mt-10 flex flex-col gap-3 small:flex-row">
          <LocalizedClientLink href="/store">
            <Button size="large">Shop the catalog</Button>
          </LocalizedClientLink>
          <a
            href="https://github.com/medusajs/dtc-starter"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary" size="large">
              View source <Github />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { Button, Heading, Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import Package from "@modules/common/icons/package"

const trustSignals = [
  { icon: FastDelivery, label: "Free shipping over $50" },
  { icon: Refresh, label: "30-day easy returns" },
  { icon: Package, label: "Secure, tracked delivery" },
]

const Hero = () => {
  return (
    <div className="w-full border-b border-blue-100">
      <div className="relative h-[75vh] min-h-[480px] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center small:px-32">
          <span className="max-w-2xl">
            <Heading
              level="h1"
              className="text-4xl leading-tight text-blue-950 font-semibold small:text-6xl"
            >
              Everyday essentials, elevated
            </Heading>
            <Text className="mt-4 text-lg text-blue-700 small:text-xl">
              Thoughtfully designed products, delivered fast. Discover pieces
              made to last and priced to love.
            </Text>
          </span>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="w-full bg-blue-700 text-white hover:bg-blue-800 focus-visible:ring-blue-500 sm:w-auto"
              >
                Shop all products
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store">
              <Button
                variant="secondary"
                size="large"
                className="w-full border-blue-200 text-blue-800 hover:bg-blue-50 focus-visible:ring-blue-500 sm:w-auto"
              >
                Explore collections
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      <div className="content-container">
        <ul className="grid grid-cols-1 gap-4 py-6 text-center small:grid-cols-3 small:text-left">
          {trustSignals.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 small:justify-start"
            >
              <Icon size="24" className="text-blue-700" />
              <Text className="text-sm font-medium text-blue-800">
                {label}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero

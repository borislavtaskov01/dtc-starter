import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@modules/common/components/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-20">
      <div className="mb-8 flex flex-col gap-4 small:flex-row small:items-end small:justify-between">
        <div className="max-w-2xl">
          <Text className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Featured collection
          </Text>
          <Heading
            level="h2"
            className="text-3xl font-semibold tracking-tight text-slate-950"
          >
            {collection.title}
          </Heading>
          <Text className="mt-3 text-sm leading-6 text-slate-600">
            Handpicked products with improved browsing, spacing, and pricing
            clarity.
          </Text>
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-10 small:grid-cols-3 small:gap-x-6 small:gap-y-12">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}

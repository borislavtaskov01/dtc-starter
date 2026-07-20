import { Text } from "@modules/common/components/ui"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region: _region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <article
        className="rounded-[30px] border border-slate-200/70 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        data-testid="product-wrapper"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Text className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              {product.collection?.title || "Product"}
            </Text>
            <Text
              className="text-base font-medium leading-6 text-slate-900"
              data-testid="product-title"
            >
              {product.title}
            </Text>
          </div>
          <div className="flex shrink-0 items-center gap-x-2 text-right">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </article>
    </LocalizedClientLink>
  )
}

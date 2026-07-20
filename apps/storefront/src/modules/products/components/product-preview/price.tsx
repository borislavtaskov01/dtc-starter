import { Text, clx } from "@modules/common/components/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className="text-sm text-slate-400 line-through"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-sm font-semibold text-slate-700", {
          "text-emerald-600": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}

import { Suspense } from "react"

import { OptionValueIds } from "@lib/util/product-option-filters"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
  optionValueIds,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  optionValueIds?: OptionValueIds
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="content-container py-8 small:py-12" data-testid="category-container">
      <div className="mb-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-sm small:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Browse
        </p>
        <div className="mt-3 flex flex-col gap-3 small:flex-row small:items-end small:justify-between">
          <div>
            <h1
              className="text-3xl font-semibold tracking-tight text-slate-950 small:text-4xl"
              data-testid="store-page-title"
            >
              All products
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Compare styles faster with clearer pricing, better spacing, and
              simplified filters.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 small:flex-row small:items-start">
        <div className="small:sticky small:top-28">
          <RefinementList sortBy={sort} />
        </div>
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
              optionValueIds={optionValueIds}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate

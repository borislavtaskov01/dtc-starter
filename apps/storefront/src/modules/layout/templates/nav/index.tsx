import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="border-b border-slate-200/80 bg-slate-50/85 backdrop-blur-xl">
        <nav className="content-container flex h-20 items-center justify-between gap-4 text-sm text-slate-600">
          <div className="flex flex-1 basis-0 items-center gap-3">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
            <div className="hidden small:flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-500 shadow-sm">
              Curated essentials
            </div>
          </div>

          <div className="flex items-center justify-center">
            <LocalizedClientLink
              href="/"
              className="flex flex-col items-center text-center"
              data-testid="nav-store-link"
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-500">
                Medusa
              </span>
              <span className="text-lg font-semibold tracking-tight text-slate-950">
                Modern Storefront
              </span>
            </LocalizedClientLink>
          </div>

          <div className="flex flex-1 basis-0 items-center justify-end gap-3 small:gap-4">
            <div className="hidden small:flex items-center gap-2">
              <LocalizedClientLink
                className="rounded-full px-4 py-2 font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-950"
                href="/store"
              >
                Shop
              </LocalizedClientLink>
              <LocalizedClientLink
                className="rounded-full px-4 py-2 font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-950"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:text-slate-950"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}

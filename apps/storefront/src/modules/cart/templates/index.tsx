import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="py-8 small:py-12">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <>
            <div className="mb-10 rounded-[32px] border border-slate-200 bg-white px-6 py-8 shadow-sm small:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Cart
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 small:text-4xl">
                Review your order
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Confirm quantities, update options, and head to checkout when
                everything looks right.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 small:grid-cols-[1fr_380px]">
              <div className="flex flex-col gap-y-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                {!customer && (
                  <>
                    <SignInPrompt />
                    <Divider />
                  </>
                )}
                <ItemsTemplate cart={cart} />
              </div>
              <div className="relative">
                <div className="sticky top-28 flex flex-col gap-y-8">
                  {cart && cart.region && (
                    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                      <Summary cart={cart} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate

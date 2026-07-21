---
applyTo: "**"
---

# DTC Starter repository instructions

## Repository layout
- This repository is a pnpm workspace managed with Turbo.
- `apps/backend` contains the Medusa backend.
- `apps/storefront` contains the Next.js storefront.
- Prefer making the smallest possible change in the app you are modifying instead of spreading logic across both apps.

## Build and validation
- Always run `pnpm install` from the repository root in a fresh checkout before running workspace scripts. The root scripts depend on local `turbo`, `medusa`, and `next` binaries from `node_modules`.
- Root workspace commands are `pnpm lint`, `pnpm test`, and `pnpm build`.
- Check `turbo.json` and package scripts before relying on `pnpm test` from the repository root; in the current repository state it completes without running package tests.
- Storefront lint and build require `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` to be set.
- Storefront build also needs a reachable Medusa backend URL for build-time data fetching. Use `NEXT_PUBLIC_MEDUSA_BACKEND_URL` when validating storefront build behavior.
- For backend-only changes, prefer validating from `apps/backend` with the package scripts defined there.
- For storefront-only changes, prefer validating from `apps/storefront` with the package scripts defined there.

## Coding guidance
- Follow existing TypeScript, React, Next.js, and Medusa patterns in the file you are editing.
- Keep functions focused. Do not extract single-use helpers unless reuse or readability clearly improves.
- Prefer `const`, early returns, and straightforward control flow.
- Avoid unnecessary destructuring when dot notation keeps the code clearer.
- Avoid `any` unless there is no practical typed alternative.
- Add comments only for non-obvious behavior, constraints, or framework-specific caveats.

## Repository-specific context
- The root ESLint config lives in `eslint.config.ts` and uses `@medusajs/eslint-plugin` recommended settings.
- The `.github/workflows/update.yaml` workflow is a manual Medusa update workflow that provides storefront env vars through GitHub secrets.
- Read the root `README.md` first for local setup expectations, especially the backend and storefront environment files.

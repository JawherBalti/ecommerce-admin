## Live application
[e-commerce.com](ecommerce-admin-one-xi.vercel.app)

## Getting Started

First, install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, create a .env file in the root of the project and add the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FyZWZ1bC1nbmF0LTk3LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_MRFIDpLZ2w2HrGgxmfxGENNgOgraUIdUAwKjv6eJfB
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL="postgresql://postgres:ecommDbPwdPostgres@db.igqbmubnbjaztifeftgv.supabase.co:5432/postgres"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dv1lhvgjr"
STRIPE_API_KEY=sk_test_51NtUx3FGJbyO1D6WzekNv9m2NtWUYJPjjNPo23vEDDlKqwj3qM794yj3pWWUmuwG2vxMSYK6WjzhB76vJNk4xXPU009lpmIs6N
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET= whsec_e3216e8e1d810cf4ed048e40a0f1af7493ebe761f07b1f773577c42abd714f86
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

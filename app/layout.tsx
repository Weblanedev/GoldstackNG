import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/app/store-provider'
import { getCategories } from '@/lib/features/categories/categoriesSlice'
import { store } from '@/lib/store'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

import { Header } from '@/lib/components/shared/layout/header/header'
import { Footer } from '@/lib/components/shared/layout/footer'
import { Alert } from '@/lib/components/shared/alert'
import { Cookies } from '@/lib/components/shared/cookies'

import { getProducts } from '@/lib/features/products/productsSlice'
import { getUser, setUser } from '@/lib/features/auth/authSlice'
import { IUser } from '@/lib/definitions'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: "Goldstack Technologies - Best Online Shopping Store",
  description: "Find everything you need online at Goldstack Technologies. Shop electronics, fashion, home goods, and more with fast shipping and a 100% refund guarantee.",
  // icons: {
  //   icon: [
  //     {
  //       media: '(prefers-color-scheme: light)',
  //       url: 'https://th.bing.com/th/id/OIP.lWQt24n04e7pQp7cJJA5EgAAAA?rs=1&pid=ImgDetMain',
  //       href: 'https://th.bing.com/th/id/OIP.lWQt24n04e7pQp7cJJA5EgAAAA?rs=1&pid=ImgDetMain',
  //     },
  //     {
  //       media: '(prefers-color-scheme: dark)',
  //       url: 'https://th.bing.com/th/id/OIP.lWQt24n04e7pQp7cJJA5EgAAAA?rs=1&pid=ImgDetMain',
  //       href: 'https://th.bing.com/th/id/OIP.lWQt24n04e7pQp7cJJA5EgAAAA?rs=1&pid=ImgDetMain',
  //     },
  //   ],
  // },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  await store.dispatch(getCategories());
  await store.dispatch(getProducts());

  const { categories } = store.getState().categories;
  const { products } = store.getState().products;

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let user: null | IUser = null;

  if (token && token.value) {
    await store.dispatch(getUser(token.value as string)).unwrap().then((res: IUser) => {
      user = res;
      store.dispatch(setUser(res));
    })
  }

  return (
    <html lang="en">
      <head><link rel="" href="" /></head>
      <body className={inter.className}>
        <StoreProvider preloadedState={{
          categories: {
            categories
          },
          products: {
            products
          },
          auth: {
            user
          }
        }}>
          <div className="bg-white app dark:bg-gray-900">
            <Header />

            {children}

            <Footer categories={categories} />

            <Alert />

            <Cookies />
          </div>
        </StoreProvider>
      </body>
    </html >
  )
}

import { store } from '@/lib/store'
import { Metadata } from 'next'
// import Link from 'next/link'
import Image from "next/image";

import { Banner } from '@/lib/components/product/banner'
import { Features } from '@/lib/components/shared/features'
// import { Card as CategoriesCard } from '@/lib/components/categories/card'
// import { Slider as ProductSlider } from '@/lib/components/product/slider'
// import { Partners } from '@/lib/components/shared/partners'
// import { MobileApps } from '@/lib/components/shared/mobile-apps'

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
}
export default async function Home() {

  const { categories } = store.getState().categories;
  const { products } = store.getState().products;

  return (
    <>
      <Banner />

      <Features />

      {/* <section className='py-10'>
        <Partners />
      </section> */}

      <section className="container flex flex-col items-center px-4 py-20 mx-auto gap-14 md:px-16 lg:flex-row lg:gap-20">
        <div className="flex flex-col flex-1 gap-2">
          <span className="block font-semibold tracking-widest text-yellow-600 uppercase"></span>
          <h2 className="my-3 text-3xl font-bold capitalize md:text-4xl xl:text-5xl">
          Amazing Deals & Discounts!
          </h2>
          <p className="text-lg leading-loose">
          Experience hassle-free shopping with our dedicated team always ready to assist you.
          </p>
          {/* <Link href="/contact">
          <button className="px-8 py-3 mt-5 text-sm font-semibold text-white border-2 border-transparent w-fit md:text-base hover:border-2 md:px-10 bg-rose-700 hover:border-rose-700 hover:bg-yellow-600 hover:shadow-yellow-600 hover:shadow-2xl rounded-xl">
            Contact Us
          </button>
          </Link> */}
        </div>

        <div className="relative flex-1 w-full">
          <div className="before:-z-50 before:bg-none md:before:absolute md:before:-bottom-24 md:before:-right-16 md:before:h-full md:before:w-full md:before:bg-[url('/videobg.png')] md:before:bg-contain md:before:bg-right-bottom md:before:bg-no-repeat lg:before:-bottom-20 lg:before:-right-12 xl:before:-right-5">
            <Image
              src={
                "https://images.pexels.com/photos/5632373/pexels-photo-5632373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={300}
              height={300}
              alt="e-commerce shopping"
              className="w-full rounded-lg object-cover md:w-[90%] xl:w-4/5"
            />

            {/* <Image
              src={
                "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={300}
              height={300}
              alt="core features"
              className="w-full rounded-lg object-cover md:w-[90%] xl:w-4/5"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import Link from "next/link";

export const Banner = () => {

	const style = {
		backgroundImage: `url(/banner02.jpg)`,
	};

	const scrollToProducts = () => {
		const products = document.getElementById('products');
		if (products) {
			window.scrollTo({ top: products.offsetTop - 150, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 500, behavior: 'smooth' });
		}
	};
	return (
    <>
      <section
        style={style}
        className="relative bg-center bg-no-repeat bg-cover"
      >
        <div className="absolute inset-0 bg-white/75 dark:bg-gray-500/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/45 sm:to-white/15 dark:sm:from-gray-700/95 dark:sm:to-gray-700/25 rtl:sm:bg-gradient-to-l"></div>

        <div className="relative px-4 py-32 mx-auto lg:container sm:px-6 lg:flex lg:h-2/2 lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold dark:text-white sm:text-5xl">
            Shop quality,
              <strong className="block font-extrabold text-rose-700">
                {" "}
                at the best prices{" "}
              </strong>
            </h1>

            <p className="max-w-lg mt-4 dark:text-gray-300 sm:text-xl/relaxed">
            Experience the convenience of shopping directly from official brand stores. Enjoy the best prices and assured product quality.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-center">
              <Link href="/products?category=electronics">
                <button
                  // onClick={scrollToProducts}
                  className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



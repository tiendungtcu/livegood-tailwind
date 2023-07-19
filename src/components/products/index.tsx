import Image from 'next/image';
import { PlayCircleIcon, ShoppingCartIcon } from '@heroicons/react/20/solid';
//import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export const Products: React.FC = () => {
  return (
    <>
      <section className="bg-[url('/all-products-banner.jpg')] min-h-[460px] bg-cover bg-[22%]">
        <div className="flex md:flex-row mx-auto px-4">
          <h1 className="w-full text-left md:ml-[50%] md:basis-1/2 pt-8">
            <span className="heading-minimal">Are you Ready to</span>
            <br />
            <span className="text-primary-0 text-7xl font-bold">Experience</span>
            <br />
            <span>The Difference?</span>
          </h1>
        </div>
      </section>
      <section className="lg:bg-[url('/product-ingredients-world-map.jpg')] bg-right-top bg-no-repeat min-h-[460px] border-b border-solid border-b-[#c5d3e3]">
        <div className="lg:flex lg:flex-row mx-auto container mb-8">
          <div className="w-full text-left lg:mr-[50%] lg:basis-1/2">
            <h2>
              <span>Life Changing Products</span>
              <br />
              <span>Unmatched Quality</span>
            </h2>
            <p>
              There are good products, there are great products, and there are{' '}
              <span className="text-secondary-0">Live</span>
              <strong>
                G<span className="text-primary-0">oo</span>d
              </strong>{' '}
              products.
            </p>
            <br />
            <p>
              With a commitment to staying on the cutting edge of science and nutrition technology,
              we pride ourselves on creating only the highest quality products of their kind
              available anywhere in the world.
            </p>
            <p>
              From the purest natural ingredients harvested from some of the most pristine locations
              on the planet, to our world-class manufacturing facilities to ensure top-notch
              consistent quality, to unique and powerful formulations that are unmatched anywhere,
              we pride ourselves not only on creating products that are good for your body, but on
              creating products that <span className="text-primary-0">GET RESULTS!</span>
            </p>
          </div>
          <div className="bg-[url('/product-ingredients-world-map.jpg')] bg-center bg-no-repeat min-h-[460px] lg:hidden"></div>
        </div>
      </section>
      <section className="bg-[url('/our-mission-supplementation-bkgd.png')] bg-center-top bg-no-repeat min-h-[160px]">
        <div className="flex flex-row flex-wrap container px-4 mx-auto">
          <div className="w-full text-left lg:basis-1/2 xl:basis-1/3 pt-8 min-h-[200px] px-4">
            <div className="border border-solid border-primary-0 p-4">
              <h3 className="container text-center">Bio-Active Complete Multi-Vitamin For Men</h3>
              <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                  <ul>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      24 Vitamins and Minerals
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Immune and Cardiovascular Support
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Promotes Healthy Aging
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <div className="text-center w-full">
                    <Image
                      src="/images/pngs/multi-vitamin-men_front.png"
                      className="mx-auto"
                      alt="product"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row flex-nowrap justify-center mt-4">
                <a
                  href="/productDetail"
                  className="basis-1/2 text-center border rounded border-black py-3.5 mx-1.5 font-bold text-lg"
                >
                  <span className="mr-2">
                    <PlayCircleIcon className="w-6 h-6 text-secondary-0 inline" />
                  </span>
                  <span className="font-secondFont">LEARN MORE</span>
                </a>
                <button className="basis-1/2 text-center border rounded border-primary-0 py-3.5 mx-1.5 bg-primary-0 font-bold text-lg">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6 inline text-white" />
                  </span>
                  <span className="text-white font-secondFont">ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full text-left lg:basis-1/2 xl:basis-1/3 pt-8 min-h-[200px] px-4">
            <div className="border border-solid border-primary-0 p-4">
              <h3 className="container text-center">Bio-Active Complete Multi-Vitamin For Men</h3>
              <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                  <ul>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      24 Vitamins and Minerals
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Immune and Cardiovascular Support
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Promotes Healthy Aging
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <div className="text-center w-full">
                    <Image
                      src="/images/pngs/multi-vitamin-men_front.png"
                      className="mx-auto"
                      alt="product"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex flex-row flex-nowrap md:justify-center mt-4">
                <a
                  href="/productDetail"
                  className="md:basis-1/2 w-full text-center border rounded border-black py-3.5 mx-1 my-3 font-bold text-lg block"
                >
                  <span className="mr-2">
                    <PlayCircleIcon className="w-6 h-6 text-secondary-0 inline" />
                  </span>
                  <span className="font-secondFont">LEARN MORE</span>
                </a>
                <button className="md:basis-1/2 w-full text-center border rounded border-primary-0 py-3.5 mx-1 my-3 bg-primary-0 font-bold text-lg block">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6 inline text-white" />
                  </span>
                  <span className="text-white font-secondFont">ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full text-left lg:basis-1/2 xl:basis-1/3 pt-8 min-h-[200px] px-4">
            <div className="border border-solid border-primary-0 p-4">
              <h3 className="container text-center">Bio-Active Complete Multi-Vitamin For Men</h3>
              <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                  <ul>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      24 Vitamins and Minerals
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Immune and Cardiovascular Support
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Promotes Healthy Aging
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <div className="text-center w-full">
                    <Image
                      src="/images/pngs/multi-vitamin-men_front.png"
                      className="mx-auto"
                      alt="product"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex flex-row flex-nowrap md:justify-center mt-4">
                <a
                  href="/productDetail"
                  className="md:basis-1/2 w-full text-center border rounded border-black py-3.5 mx-1 my-3 font-bold text-lg block"
                >
                  <span className="mr-2">
                    <PlayCircleIcon className="w-6 h-6 text-secondary-0 inline" />
                  </span>
                  <span className="font-secondFont">LEARN MORE</span>
                </a>
                <button className="md:basis-1/2 w-full text-center border rounded border-primary-0 py-3.5 mx-1 my-3 bg-primary-0 font-bold text-lg block">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6 inline text-white" />
                  </span>
                  <span className="text-white font-secondFont">ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full text-left lg:basis-1/2 xl:basis-1/3 pt-8 min-h-[200px] px-4">
            <div className="border border-solid border-primary-0 p-4">
              <h3 className="container text-center">Bio-Active Complete Multi-Vitamin For Men</h3>
              <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                  <ul>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      24 Vitamins and Minerals
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Immune and Cardiovascular Support
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Promotes Healthy Aging
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <div className="text-center w-full">
                    <Image
                      src="/images/pngs/multi-vitamin-men_front.png"
                      className="mx-auto"
                      alt="product"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex flex-row flex-nowrap md:justify-center mt-4">
                <a
                  href="/productDetail"
                  className="md:basis-1/2 w-full text-center border rounded border-black py-3.5 mx-1 my-3 font-bold text-lg block"
                >
                  <span className="mr-2">
                    <PlayCircleIcon className="w-6 h-6 text-secondary-0 inline" />
                  </span>
                  <span className="font-secondFont">LEARN MORE</span>
                </a>
                <button className="md:basis-1/2 w-full text-center border rounded border-primary-0 py-3.5 mx-1 my-3 bg-primary-0 font-bold text-lg block">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6 inline text-white" />
                  </span>
                  <span className="text-white font-secondFont">ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full text-left lg:basis-1/2 xl:basis-1/3 pt-8 min-h-[200px] px-4">
            <div className="border border-solid border-primary-0 p-4">
              <h3 className="container text-center">Bio-Active Complete Multi-Vitamin For Men</h3>
              <div className="flex flex-row flex-wrap">
                <div className="basis-1/2">
                  <ul>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      24 Vitamins and Minerals
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Immune and Cardiovascular Support
                    </li>
                    <li className="relative pl-8 before:content-check before:absolute before:left-0">
                      Promotes Healthy Aging
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <div className="text-center w-full">
                    <Image
                      src="/images/pngs/multi-vitamin-men_front.png"
                      className="mx-auto"
                      alt="product"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex flex-row flex-nowrap md:justify-center mt-4">
                <a
                  href="/productDetail"
                  className="md:basis-1/2 w-full text-center border rounded border-black py-3.5 mx-1 my-3 font-bold text-lg block"
                >
                  <span className="mr-2">
                    <PlayCircleIcon className="w-6 h-6 text-secondary-0 inline" />
                  </span>
                  <span className="font-secondFont">LEARN MORE</span>
                </a>
                <button className="md:basis-1/2 w-full text-center border rounded border-primary-0 py-3.5 mx-1 my-3 bg-primary-0 font-bold text-lg block">
                  <span className="mr-2">
                    <ShoppingCartIcon className="w-6 h-6 inline text-white" />
                  </span>
                  <span className="text-white font-secondFont">ORDER NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

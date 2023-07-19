import { Carousel } from '@components';
import Image from 'next/image';
export const Home: React.FC = () => {
  const images = [
    '/images/pngs/highest-quality-banner_1.jpg',
    '/images/pngs/highest-quality-banner_2.jpg',
    '/images/pngs/highest-quality-banner_4.jpg',
    '/images/pngs/highest-quality-banner_5.jpg',
  ];
  return (
    <>
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            // width={1700} height={680}
            <div className="relative flex-[0_0_100%] " key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} className="w-full h-auto" alt="alt" width={1920} height={768} />
            </div>
          );
        })}
      </Carousel>
      <section className="px-12 mx-auto md:max-w-[720px] lg:max-w-[1170px] text-[20px]/[30px] text-[#212529] text-center">
        With a commitment to helping people, <strong>LiveGood</strong> brings you the most advanced
        nutritional supplements on the market, made with only the purest, highest quality,
        results-driven ingredients on the planet, without the expensive pricing mark-ups of other
        companies.
      </section>
      {/* grid row */}
      <section className="mx-auto mt-8 grid grid-cols-12 text-center md:max-w-[720px] lg:max-w-[1170px] justify-self-center md:justify-center">
        {/* grid column */}
        <a className="col-span-12 items-center md:text-left lg:col-span-4 md:grid md:grid-cols-6 md:justify-self-center">
          <div className="col-span-3 font-secondFont text-[22px]/[34px]">
            <div className="text-[#000c28]">Are YOU one of</div>
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">92% of</div>
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">Americans</div>
            <div className="font-secondFont">who are Vitamin</div>
          </div>
          <div className="col-span-3 mb-4 md:-ml-6 ">
            <Image
              src="/images/pngs/home-featurette-image_1.png"
              className="w-auto mx-auto h-[12rem]"
              alt="alt"
              width={300}
              height={290}
            />
          </div>
        </a>
        <a className="col-span-12 items-center md:text-left lg:col-span-4 md:grid md:grid-cols-6 md:justify-self-center">
          <div className="col-span-3 font-secondFont text-[22px]/[34px]">
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">Highest</div>
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">Quality</div>
            <div>Ingredients on</div>
            <div>the Planet!</div>
          </div>
          <div className="col-span-3 mb-4 md:-ml-6 ">
            <Image
              src="/images/pngs/home-featurette-image_2.png"
              className="w-auto mx-auto h-[12rem]"
              alt="alt"
              width={300}
              height={290}
            />
          </div>
        </a>
        <a className="col-span-12 items-center md:text-left lg:col-span-4 md:grid md:grid-cols-6 md:justify-self-center">
          <div className="col-span-3 font-secondFont text-[22px]/[34px]">
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">Best</div>
            <div className="font-bold text-[#f15a24] text-[30px]/[30px]">Products</div>
            <div>Less than HALF</div>
            <div>the Price!</div>
            <strong>How does it work?</strong>
          </div>
          <div className="col-span-3 mb-4 md:-ml-6 ">
            <Image
              src="/images/pngs/home-featurette-image_3.png"
              className="w-auto mx-auto h-[12rem]"
              alt="alt"
              width={300}
              height={290}
            />
          </div>
        </a>
      </section>
    </>
  );
};

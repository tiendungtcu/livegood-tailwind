import React from 'react';
import { Layout } from '@components';
import Image from 'next/image';

const MissionPage: React.FC = () => {
  return (
    <Layout>
      <section className="bg-[url('/images/pngs/our-mission-banner.jpg')] min-h-[400px] bg-cover bg-[22%]">
        <div className="mx-auto px-4">
          <h1 className="w-full text-left md:ml-[20%] pt-8 font-bold text-7xl">
            Our <span className="text-primary-0">Mission</span>
          </h1>
        </div>
      </section>
      <section className="container text-center px-4">
        <h2>Our Mission is Simple</h2>
        <p className="text-4xl">
          To Help People <span className="text-primary-0">Get Healthy</span>, And{' '}
          <span className="text-primary-0">Stay Healthy</span> Without Having To Spend A Fortune To
          Do It.
        </p>
      </section>
      <section className="flex flex-row mx-auto my-4">
        <div className="ml-[33%] basis-1/3 lg:ml-[40%] lg:basis-1/5 h-1 bg-secondary-0 mx-3"></div>
      </section>
      <section className="container text-center my-4 text-[20px]/[30px] mx-auto text-primary-10">
        With over <span className="text-primary-0">92% of Americans</span> deficient in one or more
        vitamins or minerals, most people are not getting everything their body needs from food. The
        longer your body goes without the nutrients it needs to stay healthy, you don't digest food
        properly, your organs fail to function at peak levels and your immune system breaks down.
        All of which can be avoided through proper supplementation.
      </section>
      <section className="bg-[url('/our-mission-supplementation-bkgd.png')] bg-center-top bg-no-repeat min-h-[160px]">
        <div className="flex flex-row flex-wrap container px-4 mx-auto">
          <div className="basis-full lg:basis-1/2 px-2 pt-44">
            <h2>
              <span className="text-primary-0">Supplementation</span> Is Not Only Important, It Is
              Literally Vital To <span className="text-primary-0">Your Health</span>
            </h2>
            <div className="h-1 w-40 bg-secondary-0 my-6"></div>
            <p>
              With the combination of our food not giving our bodies what they need, and people not
              getting enough fresh air and exercise on a daily basis, this country is becoming more
              unhealthy than it’s ever been. What’s worse is that when people get sick, they turn to
              drugs to treat their symptoms, instead of supplements to prevent the issue from
              happening in the first place. This has become an endless cycle for so many people, and
              it’s getting worse and worse.
            </p>
          </div>
          <div className="basis-full lg:basis-1/2 px-10 pt-8 self-center">
            <Image
              src="/images/pngs/our-mission-supplementation.jpg"
              className="mx-auto"
              alt="product"
              width="660"
              height="660"
            />
          </div>
        </div>
      </section>
      <section className="container my-6">
        <div className="rounded-[64px] border-secondary-10 border-4 px-10 relative text-center mb-24 py-4">
          <h1>It's Time To Make A Change.</h1>
          <div className="flex flex-row mx-auto my-4">
            <div className="ml-[33%] basis-1/3 lg:ml-[40%] lg:basis-1/5 h-1 bg-secondary-0 mx-3"></div>
          </div>
          <p className="mb-24">
            At <span className="text-secondary-0">Live</span>G
            <span className="text-primary-0">oo</span>d, not only has our industry-leading team of
            natural health experts created the most complete, functional, and essential vitamins,
            supplements, and skin care products available anywhere using only the highest quality
            ingredients on the planet, but because we don’t sell them through stores or affiliates,
            we make them available to you at a fraction of the cost of other brands!
          </p>
          <div>
            
          </div>
          <div className="absolute px-4 py-6 border-primary-0 border-2 left-0 bottom-0 right-0 rounded-md uppercase w-fit block -my-16 mx-auto text-[36px]/[72px] bg-primary-0 text-white font-secondFont font-bold">
            Are You Ready!
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionPage;

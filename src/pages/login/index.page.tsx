import React, { useState } from 'react';
import { Layout } from '@components';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/20/solid';
const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Layout>
      <section className="bg-[url('/images/pngs/loginBanner.jpg')] min-h-[480px] bg-cover bg-[22%] max-w-7xl mx-auto">
        <div className="mx-auto px-4">
          <h1 className="w-full text-left md:ml-[20%] pt-8 font-bold text-7xl">
            Member <span className="text-primary-0">Login</span>
          </h1>
        </div>
      </section>
      <section className="container px-24 pb-48">
        <div className="w-full max-w-sm mx-auto">
          <div className="max-w-sm mx-auto my-8">
            {/* <label htmlFor="username" className="block text-sm font-medium leading-6">
              Email address
            </label> */}
            <div className="mt-1">
              <input
                id="username"
                placeholder="Enter your username *"
                name="username"
                type="username"
                autoComplete="username"
                className="block w-full px-4 rounded-md border-0 py-2.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="max-w-sm mx-auto my-8">
            {/* <label htmlFor="password" className="block text-sm font-medium leading-6">
              Password
            </label> */}
            <div className="mt-1 relative">
              <input
                id="password"
                placeholder="Enter Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="inline w-full px-4 rounded-md border-0 py-2.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              ></input>
              <span
                className="absolute right-2 my-3 px-2 hover:cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="w-4 h-4 text-[#999999]" />
                ) : (
                  <EyeSlashIcon className="w-4 h-4 text-[#999999]" />
                )}
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-fit">
              <button className="py-3 px-4 border rounded-sm font-bold ">Login Now</button>
            </div>
            <div className="w-fit">
              <a href="#" className='text-primary-0'>Sign in help</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;

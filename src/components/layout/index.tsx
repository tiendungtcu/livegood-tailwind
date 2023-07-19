import React from 'react';
import { PropsWithChildren } from 'react';

import { Footer, Header } from '@components';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="mx-auto bg-white mt-24">{children}</div>
      <Footer />
    </>
  );
};

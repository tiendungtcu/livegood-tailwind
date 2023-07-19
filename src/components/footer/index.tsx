import Image from 'next/image';
import React from 'react';

const footerLink1 = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Products',
    link: '/products',
  },
  {
    title: 'Our Mission',
    link: '/missions',
  },
  {
    title: 'Our Team',
    link: '/team',
  },
  {
    title: 'Shop',
    link: '/shop',
  },
  {
    title: 'FAQ',
    link: '/faqs',
  },
];

const footerLink2 = [
  {
    title: 'Affiliate Compensation Plan',
    link: '/plan',
  },
  {
    title: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    title: 'Terms and Conditions',
    link: '/terms-connditions',
  },
  {
    title: 'Refund Policy',
    link: '/refund-policy',
  },
  {
    title: 'Certificates Of Analysis',
    link: '/certificates-analysis',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#252324] text-[#bebebe] text-center px-2 py-4">
      <div className="md:flex md:justify-between container mx-auto">
        <div className="text-center md:text-left md:max-w-[800px]">
          <div className="link">
            {footerLink1.map((item, idx) => (
              <a href={item.link} key={`link1-${idx}`}>
                {item.title} {idx < footerLink1.length - 1 && ' | '}
              </a>
            ))}
          </div>
          <div className="link">
            {footerLink2.map((item, idx) => (
              <a href={item.link} key={`link2-${idx}`}>
                {item.title} {idx < footerLink2.length - 1 && ' | '}
              </a>
            ))}
          </div>
          <div className="border border-white">
            *These statements have not been evaluated by the Food and Drug Administration.
            <br />
            <br />
            These products are not intended to diagnose, treat, cure or prevent any disease.
          </div>
          <div>Copyright © 2021 All Rights Reserved</div>
        </div>
        <div>
          <div className="text-center w-full">
            <a href="/" target="_blank" className="block mb-3">
              <Image
                data-test="icon"
                className="mx-auto"
                src="/logo_footer.png"
                alt="footer logo"
                width="140"
                height="28"
              />
            </a>
            <center>
              <ul className="flex justify-center list-none p-0 m-0">
                <li className="mx-1">
                  <Image
                    data-test="icon"
                    src="/images/icons/github-icon.svg"
                    alt="github"
                    width="28"
                    height="29"
                  />
                </li>
                <li className="mx-1">
                  <Image
                    data-test="icon"
                    src="images/icons/twitter-icon.svg"
                    alt="nextjs"
                    width="28"
                    height="28"
                  />
                </li>
                <li className="mx-1">
                  <Image
                    data-test="icon"
                    src="images/icons/youtube-icon.svg"
                    alt="youtube"
                    width="28"
                    height="29"
                  />
                </li>
              </ul>
              1201 Jupiter Park Dr. Unit 5
              <br />
              Jupiter, FL 33458
              <br />
              <br />
              <a href="mailto:support@livegood.com">support@livegood.com</a>
            </center>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';

import { StoreLogo } from '../StoreLogo';

import { ContactInformation } from './ContactInformation';
import { Copyright } from './Copyright';
import { BaseFooterMenu, BrandFooterMenu, CategoryFooterMenu } from './FooterMenus';
import { PaymentMethods } from './PaymentMethods';
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
  return (
    <footer>
      <div className="border-b border-t border-gray-200">
        <div className="mx-6 my-12 grid grid-cols-1 gap-8 md:container sm:mx-10 sm:grid-cols-4 md:mx-auto md:grid-cols-6">
          {/* @ts-expect-error Server Component */}
          <CategoryFooterMenu />
          {/* @ts-expect-error Server Component */}
          <BrandFooterMenu />
          <BaseFooterMenu
            items={[
              { name: 'Contact us', path: '/contact-us' },
              { name: 'About brand', path: '/about' },
              { name: 'Blog', path: '/blog' },
            ]}
            title="About us"
          />
          <BaseFooterMenu
            items={[
              { name: 'Shipping & returns', path: '/shipping-and-returns' },
              { name: 'Privacy policy', path: '/privacy-policy' },
              { name: 'Terms & conditions', path: '/terms-and-conditions' },
              { name: 'FAQ', path: '/faq' },
            ]}
            title="Help"
          />
          <div className="sm:col-span-2 md:order-first">
            <h3 className="mb-4">
              {/* @ts-expect-error Server Component */}
              <StoreLogo />
            </h3>
            {/* @ts-expect-error Server Component */}
            <ContactInformation />
            {/* @ts-expect-error Server Component */}
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="mx-6 my-8 grid grid-cols-1 md:container sm:mx-10 md:mx-auto md:my-6 md:grid-cols-2">
        <PaymentMethods className="md:text-right" />
        {/* @ts-expect-error Server Component */}
        <Copyright className="md:order-first" />
      </div>
    </footer>
  );
};

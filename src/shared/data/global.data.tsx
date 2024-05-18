import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'Kesk tänav 10, Valga',
  callToAction: {
    text: 'Sissepääs Pärna pst kaudu!',
    href: 'https://www.google.com/maps/@57.7783446,26.0349477,3a,75y,262.56h,87.49t/data=!3m6!1e1!3m4!1sHed5AuqcX926_YeAljU4DA!2e0!7i13312!8i6656?entry=ttu',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'Services',
          href: '/services',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Kontaktid',
          href: '/kontaktid',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Teenuse tingimused',
          href: '/teenusetingimused',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Kontaktid',
      href: '/kontaktid',
    },
  ],
  actions: [
    {
      text: 'Download',
      href: 'https://github.com/onwidget/tailnext',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'STR Rent',
  links: [
    {
      label: 'Teenuse tingimused',
      href: '/teenusetingimused',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      Veebiarendus {' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://tellikoduleht.ee">
        {' '}
        Kodulehe Tellimine OÜ
      </a>{' '}
      · Kõik õigused kaitstud.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Teenuse tingimused',
      href: '/teenusetingimused',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Aadress',
      texts: ['Kesk tänav 10, Valga 68201, Eesti'],
    },
    {
      title: 'Telefon',
      texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    },
    {
      title: 'Email',
      texts: ['Office: info@example.com', 'Site: https://example.com'],
    },
  ],
  socials: [
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
      Veebiarendus - {' '}
      <a
        className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
        href="https://tellikoduleht.ee"
      >
        {' '}
        Kodulehe Tellimine OÜ
      </a>{' '}
      · Kõik õigused kaitstud.
    </div>
  ),
};

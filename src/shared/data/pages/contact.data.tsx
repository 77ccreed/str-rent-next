import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Võtke meiega ühendust',
  subtitle: (
    <>
      <span className="hidden md:inline">{`STR Rent - Sinu tööriistade rendipartner Valgas.`}
      </span>{' '}
      {`Aitame ellu viia Sinu projekte, pakkudes kvaliteetseid tööriistu igasugusteks töödeks.`}
    </>
  ),
  tagline: 'Kontaktide leht',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Saada meile sõnum',
    subtitle: (
      <>
        Palume Sul võtta hetk ja täita allolev vorm.{' '}
        <span className="hidden md:inline">{`See aitab meil paremini mõista Sinu vajadusi ja leida sobiv lahendus.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Meie asukoht',
      description: ['Kesk tänav 10, Valga, 68203, Eesti'],
      icon: IconMapPin,
    },
    {
      title: 'Kontaktt',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Tööaeg',
      description: ['Esmaspäev - reede: 07:00 - 17:00', 'Laupäev: 08:00 - 13:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Kirjuta meile oma probleemist',
    inputs: [
      {
        type: 'text',
        label: 'Nimi',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Nimi',
      },
      {
        type: 'email',
        label: 'Email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email',
      },
    ],
    radioBtns: {
      label: 'Vali teema',
      radios: [
        {
          label: 'Tööriistade rent',
        },
        {
          label: 'Küsimused',
        },
        {
          label: 'Tagasiside',
        },
        {
          label: 'Muu',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Sõnum',
      name: 'textarea',
      placeholder: 'Kirjuta siia oma sõnum',
    },
    btn: {
      title: 'Saada sõnum',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Kuidas saame aidata?',
    subtitle: 'Kui Sul on küsimusi, võta meiega ühendust.',
  },
  items: [
    {
      title: 'Külasta meie KKK lehte',
      description: 'Vaata vastuseid enamlevinud küsimustele.',
      icon: IconHelp,
      callToAction: {
        text: 'Külasta KKK lehte',
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      callToAction: {
        text: 'Write to us',
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      callToAction: {
        text: 'Call us',
        href: '/',
      },
    },
  ],
};

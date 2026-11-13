// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Recognition',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/vicenteczar.dev',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vicenteczar/',
  },
];

const resourceLinks = [
  {
    label: 'Transcent Digital',
    url: 'https://transcentacademy.com.br/transcentdigital',
  },
  {
    label: 'SV ÚNICO on G1',
    url: 'https://g1.globo.com/carros/noticia/2026/04/24/supercarro-brasileiro-de-r-15-milhao-ganha-configurador-virtual.ghtml',
  },
  {
    label: 'SV ÚNICO on InfoMoney',
    url: 'https://www.infomoney.com.br/consumo/super-veloce-unico-configurador/',
  },
];

const heroText =
  'Engineering Rigor & Aesthetic Excellence. Architecting high-converting digital products.';

const locationPlace = 'Working across borders';
const locationCountry = 'International Studio';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
};

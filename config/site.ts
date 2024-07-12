export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'd. Dump',
  description:
    'API documentation of DomainDumper for all about domains states.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'API Doc',
      href: '/api-doc',
    },
  ],
  links: {
    twitter: 'https://twitter.com/domaindumper',
    github: 'https://github.com/domaindumper/domain-statistics',
    docs: 'https://statistics.domaindumper.com/api-doc',
  },
};

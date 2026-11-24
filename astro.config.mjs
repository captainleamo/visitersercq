import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Change `site` if you pick a different domain
export default defineConfig({
  site: 'https://visitersercq.com',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'fr', locales: ['fr', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-GB' } } })],
});

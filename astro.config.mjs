import { defineConfig } from 'astro/config';
import i18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    i18next({
      defaultLocale: 'en',
      locales: ['en', 'es'],
    }),
  ],
});

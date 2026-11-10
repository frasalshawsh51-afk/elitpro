import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elitpro.vercel.app',
  output: 'static',
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
});

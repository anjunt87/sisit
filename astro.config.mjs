// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';
// import react from '@astrojs/react';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   },

//   integrations: [react()]
// });


import { defineConfig } from 'astro/config';
import githubPages from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://anjunt87.github.io',
  base: '/sisit/',
  adapter: githubPages(),
});
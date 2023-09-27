import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';
// https://astro.build/config
import solidJs from '@astrojs/solid-js';

// https://astro.build/config


// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), Unocss()], output: "static"
});
import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: { figtree: 'Figtree', inter: 'Inter' },
		}),
		presetIcons(),
	],
})

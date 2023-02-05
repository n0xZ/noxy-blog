import {
	defineConfig,
	presetUno,
	presetWebFonts,
	presetIcons,
	presetTypography,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'google',
			fonts: { figtree: 'Figtree', inter: 'Inter' },
		}),
		presetTypography(),
		presetIcons(),
	],
})

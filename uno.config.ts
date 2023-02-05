import {
	defineConfig,
	presetUno,
	presetWebFonts,
	presetIcons,
	presetTypography,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno({ dark: 'class' }),
		presetWebFonts({
			provider: 'google',
			fonts: {
				sarawabi: [
					{ name: 'Sawarabi Gothic', weights: ['400', '500'] },
					{ name: 'sans-serif', provider: 'none' },
				],
			},
		}),
		presetTypography(),
		presetIcons(),
	],
})

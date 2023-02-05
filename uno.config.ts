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
			fonts: { sarawabi: 'Sawarabi Gothic' },
		}),
		presetTypography(),
		presetIcons(),
	],
})

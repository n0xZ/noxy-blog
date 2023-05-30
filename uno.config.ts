import {
	defineConfig,
	presetUno,
	presetTypography,
	presetWebFonts,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno({ dark: 'class' }),
		presetTypography(),
		presetWebFonts({ provider: 'google', fonts: { rubik: 'Rubik' } }),
	],
})

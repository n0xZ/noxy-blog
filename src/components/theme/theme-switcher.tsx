import { createEffect, createSignal } from 'solid-js'
import { MoonIcon } from '~/components/icon/moon'
import { SunIcon } from '~/components/icon/sun'

type Theme = 'dark' | 'light'

export default function ThemeSwitcher() {
	const storedTheme = localStorage.getItem('theme') as Theme | null
	const actualTheme = storedTheme ? storedTheme : ('light' satisfies Theme)
	const [theme, setTheme] = createSignal<Theme>(actualTheme)

	function toggleTheme() {
		setTheme(theme() === 'dark' ? 'light' : 'dark')
	}

	createEffect(() => {
		const rootEl = document.documentElement
		if (theme() === 'dark') {
			rootEl.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else if (theme() === 'light') {
			rootEl.classList.remove('dark')
			localStorage.removeItem('theme')
		}
	})
	return (
		<button
			title="Toggle dark mode"
			class="flex flex-row items-center justify-center h-8 w-8"
			onClick={toggleTheme}
		>
			<MoonIcon />

			<SunIcon />
		</button>
	)
}

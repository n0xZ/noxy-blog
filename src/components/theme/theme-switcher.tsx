import { createEffect, createSignal, Show } from 'solid-js'

function MoonIcon() {
	return (
		<svg
			fill="currentColor"
			stroke-width="0"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			height="1em"
			width="1em"
			class="h-6 w-6 hover:opacity-60  duration-100 ease-in-out"
		>
			<path d="M32 256C32 132.2 132.3 32 255.8 32c11.36 0 29.7 1.668 40.9 3.746 9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3 9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480 132.1 480 32 379.6 32 256z"></path>
		</svg>
	)
}
function SunIcon() {
	return (
		<svg
			fill="currentColor"
			stroke-width="0"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			height="1em"
			width="1em"
			class="h-6 w-6 hover:opacity-60  duration-100 ease-in-out"
		>
			<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
		</svg>
	)
}
export default function ThemeSwitcher() {
	const defaultTheme = !import.meta.env.SSR
		? typeof localStorage.getItem('theme') !== null
			? localStorage.getItem('theme')
			: 'dark'
		: undefined

	const [theme, setTheme] = createSignal(defaultTheme)

	function toggleTheme() {
		setTheme(theme() === 'dark' ? 'light' : 'dark')
	}
	createEffect(() => {
		const rootEl = document.documentElement
		if (!import.meta.env.SSR) {
			if (theme()) localStorage.setItem('theme', theme() as string)
			if (theme() === 'dark') {
				rootEl.classList.remove('light')
				rootEl.classList.add('dark')
			}
			if (theme() === 'light') {
				rootEl.classList.remove('dark')
				rootEl.classList.add('light')
			}
		}
	})
	return (
		<>
			<button
				title="Toggle dark mode"
				class="    flex flex-row items-center justify-center  "
				onClick={toggleTheme}
			>
				<Show when={theme() === 'light'} fallback={<SunIcon />}>
					<MoonIcon />
				</Show>
			</button>
		</>
	)
}

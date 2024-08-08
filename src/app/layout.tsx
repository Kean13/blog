import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from '@/components/nav/nav-nav'
import CustomLink from '@/components/custom-link'
import { Button } from '@/components/ui/button'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NextMind: Write or edit your posts',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Nav />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

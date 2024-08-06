import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from '@/components/app-nav'
import CustomLink from '@/components/custom-link'
import { Button } from '@/components/ui/button'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NextBlog: Write or edit your posts',
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
					<Nav>
						<CustomLink href='/'>Homepage</CustomLink>
						<CustomLink href='/contact'>Contact</CustomLink>
						<CustomLink href='/about'>About</CustomLink>
						<CustomLink href='/login'>
							<Button>Login</Button>
						</CustomLink>
					</Nav>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

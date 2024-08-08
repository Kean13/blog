import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

import CustomLink from '@/components/custom-link'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export default function Logo() {
	return (
		<CustomLink href='/'>
			<div className='flex flex-col items-center md:items-start'>
				<h1
					className={cn(
						'text-2xl font-semibold text-foreground',
						font.className,
					)}
				>
					nextmind
				</h1>
				<p className='opacity-50 hidden md:block'>— Post your mind</p>
				<p className='opacity-50 md:hidden'>Post your mind</p>
			</div>
		</CustomLink>
	)
}

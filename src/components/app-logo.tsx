import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export default function Logo() {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<h1
				className={cn(
					'text-2xl font-semibold text-foreground',
					font.className,
				)}
			>
				nextblog
			</h1>
			<p className='opacity-50 hidden md:block'>— Post your mind</p>
			<p className='opacity-50 md:hidden'>Post your mind</p>
		</div>
	)
}

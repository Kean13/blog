import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

import AnimatedText from '@/components/header/header-animated-text'

const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
})

export default function Header() {
	return (
		<div
			className={cn(
				'w-full flex items-center justify-center mt-16 mb-16',
				font.className,
			)}
		>
			<AnimatedText />
		</div>
	)
}

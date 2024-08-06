import Link from 'next/link'

interface linkProps {
	href: string
	children: React.ReactNode
}

export default function CustomLink({ href, children }: linkProps) {
	return (
		<Link href={href} className='ease-out duration-300 hover:opacity-80'>
			{children}
		</Link>
	)
}

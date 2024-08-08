import navbarLinks from '@/config/nav-config'

import CustomLink from '@/components/custom-link'

export default function NavLinks() {
	return (
		<div className='hidden md:flex items-center justify-between gap-4'>
			{navbarLinks.map(link => (
				<CustomLink key={link.href} href={link.href}>
					{link.label}
				</CustomLink>
			))}
		</div>
	)
}

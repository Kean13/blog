import React from 'react'

import Logo from '@/components/app-logo'

import NavLinks from '@/components/nav/nav-links'

export default function Nav() {
	return (
		<div>
			<nav className='py-4 px-8 flex items-center justify-center md:justify-between w-full border-b'>
				<Logo />
				<NavLinks />
			</nav>
		</div>
	)
}

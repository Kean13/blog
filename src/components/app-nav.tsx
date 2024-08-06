'use client'

import React from 'react'

import Logo from '@/components/app-logo'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface navigationProps {
	children: React.ReactNode
}

export default function Nav({ children }: navigationProps) {
	return (
		<div>
			<nav className='p-8 flex items-center justify-center md:justify-between w-full border-b'>
				<Logo />
				<div className='hidden md:flex items-center justify-between gap-4'>
					{children}
				</div>
			</nav>
		</div>
	)
}

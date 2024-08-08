import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { Clock8 } from 'lucide-react'
import { Eye } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'
import { Hash } from 'lucide-react'

const formatTagToLink = (link: string) => {
	return link.replace(/ /g, '-').toLowerCase()
}

interface postProps {
	image: StaticImageData
	date: string
	tag: string
	title: string
	description: string
	views: string
	likes: string
}

export default function Post({
	image,
	date,
	tag,
	title,
	description,
	views,
	likes,
}: postProps) {
	return (
		<div className='flex items-center justify-center gap-12'>
			<Image src={image} alt='' width='450' className='rounded-xl' />
			<div className='flex flex-start flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<Badge
						variant='secondary'
						className='py-2 px-4 text-lg gap-2'
					>
						<Clock8 /> {date}
					</Badge>
					<Link href={'/tags/' + formatTagToLink(tag)}>
						<Badge
							variant='secondary'
							className='py-2 px-4 text-lg gap-2'
						>
							<Hash /> {tag}
						</Badge>
					</Link>
				</div>
				<Link href='/' className='hover:opacity-75 transition'>
					<h1 className='text-6xl font-bold'>{title}</h1>
					<p className='text-lg opacity-50'>{description}</p>
				</Link>
				<div className='flex items-center gap-4'>
					<div className='text-lg flex items-center gap-2'>
						<Eye />
						{views}
					</div>
					<Button
						variant='ghost'
						className='text-lg flex items-center gap-2'
					>
						<ThumbsUp />
						{likes}
					</Button>
				</div>
			</div>
		</div>
	)
}

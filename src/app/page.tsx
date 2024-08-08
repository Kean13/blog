import Post from '@/components/app-post'
import Header from '@/components/header/header-header'

import ExampleImage from '@/dev/example.png'

export default function HomePage() {
	return (
		<main className='container'>
			<Header />
			<Post
				image={ExampleImage}
				date='Today at 10:00'
				tag='Most Popular'
				title='Lorem Ipsum'
				description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
				views='1.2K'
				likes='64'
			/>
		</main>
	)
}

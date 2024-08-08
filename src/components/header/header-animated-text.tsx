'use client'

import React, { useState, useEffect, useMemo } from 'react'

export default function AnimatedText() {
	const words = useMemo(() => ['openly.', 'safety.'], [])
	const [currentWordIndex, setCurrentWordIndex] = useState(0)
	const [displayedText, setDisplayedText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)
	const [charIndex, setCharIndex] = useState(0)
	const [typingSpeed, setTypingSpeed] = useState(150)

	useEffect(() => {
		const handleTyping = () => {
			const currentWord = words[currentWordIndex]

			if (isDeleting) {
				if (charIndex > 0) {
					setDisplayedText(currentWord.slice(0, charIndex - 1))
					setCharIndex(charIndex - 1)
					setTypingSpeed(75)
				} else {
					setIsDeleting(false)
					setCurrentWordIndex(prev => (prev + 1) % words.length)
				}
			} else {
				if (charIndex < currentWord.length) {
					setDisplayedText(currentWord.slice(0, charIndex + 1))
					setCharIndex(charIndex + 1)
					setTypingSpeed(150)
				} else {
					setTimeout(() => setIsDeleting(true), 2000)
				}
			}
		}

		const typingTimeout = setTimeout(handleTyping, typingSpeed)
		return () => clearTimeout(typingTimeout)
	}, [
		displayedText,
		isDeleting,
		typingSpeed,
		currentWordIndex,
		charIndex,
		words,
	])

	return (
		<h1 className='text-6xl text-center leading-normal tracking-wider'>
			<span className='font-bold'>Post your mind with nextmind!</span>{' '}
			Share thoughts and express yourself {displayedText}
		</h1>
	)
}

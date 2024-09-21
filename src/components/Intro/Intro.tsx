import React, { useEffect, useRef, useState } from 'react'
import { ContentProps } from '../../content'
import { Circle } from '../Circle/Circle'
import './Intro.scss'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export const Intro = ({
	content,
	currentIndex,
	setCurrentIndex,
}: ContentProps) => {
	const container = useRef<HTMLDivElement>(null)
	const [startYear, setStartYear] = useState(content[currentIndex].startYear)

	useEffect(() => {
		gsap.to('.startYear', {
			textContent: content[currentIndex].startYear,
			duration: 0.5,
			snap: { textContent: 1 },
		})
		gsap.to('.endYear', {
			textContent: content[currentIndex].endYear,
			duration: 0.5,
			snap: { textContent: 1 },
		})
	}, [content[currentIndex].startYear, content[currentIndex].endYear])
	return (
		<div ref={container} className='intro'>
			<span className='year left startYear'>2024</span>
			<span className='year right endYear'>2024</span>
			<div className='background'>
				<Circle
					content={content}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
			<span className='horizontal'></span>
		</div>
	)
}

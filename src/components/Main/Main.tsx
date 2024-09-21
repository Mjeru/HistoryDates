import React, { useMemo, useState } from 'react'
import { data } from '../../content'
import { useResize } from '../../hooks/useResize'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Intro } from '../Intro/Intro'
import { Pagination } from '../Pagination/Pagination'
import './Main.scss'

export function Main() {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const content = useMemo(() => data, [])
	const isMobile = useResize()

	return (
		<div className='main'>
			<Header text='Исторические даты' />
			<Intro
				content={content}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
			/>
			<span className='vertical'></span>
			{!isMobile && (
				<Pagination
					content={content}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
					maxIndex={content.length}
				/>
			)}
			<Footer
				content={content}
				currentIndex={currentIndex}
				setCurrentIndex={setCurrentIndex}
			/>
			{isMobile && (
				<Pagination
					content={content}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
					maxIndex={content.length}
				/>
			)}
		</div>
	)
}

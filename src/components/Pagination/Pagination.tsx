import React from 'react'
import { ContentProps } from '../../content'
import { useResize } from '../../hooks/useResize'
import { Icon } from '../Icon/Icon'
import './Pagination.scss'

interface PaginationProps extends ContentProps {
	maxIndex: number
}

export function Pagination({
	content,
	currentIndex,
	maxIndex,
	setCurrentIndex,
}: PaginationProps) {
	const isMobile = useResize()
	const renderIndex = () => {
		return (
			<span className='pagination-counter'>
				{`${(currentIndex + 1).toString().padStart(2, '0')}/${maxIndex
					.toString()
					.padStart(2, '0')}`}
			</span>
		)
	}
	const clickNext = () => {
		if (currentIndex < maxIndex - 1) {
			setCurrentIndex(currentIndex + 1)
		}
	}
	const clickPrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
		}
	}
	const renderDots = () => {
		return content.map((item, j) => (
			<span
				key={j}
				onClick={() => setCurrentIndex(j)}
				className={`${currentIndex == j ? 'active' : ''} pagination-dot`}
			></span>
		))
	}

	return (
		<div className='pagination'>
			{renderIndex()}
			<div className='buttons-wrapper'>
				{isMobile && <div className='pagination-dots'>{renderDots()}</div>}
				<button
					aria-label='button prev'
					onClick={clickPrev}
					className={`pagination-button prev ${
						currentIndex === 0 ? 'disabled' : ''
					}`}
				>
					<Icon
						name={`${isMobile ? 'arrowMobile' : 'bigArrow'}`}
						color='#42567A'
					/>
				</button>
				<button
					aria-label='button next'
					onClick={clickNext}
					className={`pagination-button next ${
						currentIndex === maxIndex - 1 ? 'disabled' : ''
					}`}
				>
					<Icon
						name={`${isMobile ? 'arrowMobile' : 'bigArrow'}`}
						color='#42567A'
					/>
				</button>
			</div>
		</div>
	)
}

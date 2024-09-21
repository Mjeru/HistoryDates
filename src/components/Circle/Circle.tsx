import React, { Dispatch, SetStateAction } from 'react'
import { ContentData } from '../../content'
import './Circle.scss'

export function Circle({
	content,
	currentIndex,
	setCurrentIndex,
}: {
	content: ContentData
	currentIndex: number
	setCurrentIndex: Dispatch<SetStateAction<number>>
}) {
	const radius = 530 / 2
	const rotateTo = (index: number) => {
		setCurrentIndex(index)
	}

	const renderDots = () => {
		return content.map((item, j) => {
			return (
				<div
					onClick={() => rotateTo(j)}
					key={j}
					className='dot'
					style={{
						left: `calc(50% +  ${
							radius * Math.cos((j * 2 * Math.PI) / content.length)
						}px)`,
						top: `calc(50% +  ${
							radius * Math.sin((j * 2 * Math.PI) / content.length)
						}px)`,
					}}
				>
					<div
						className='button-wrapper'
						style={{
							transform: `rotate(${
								currentIndex * (360 / content.length) + 60
							}deg)`,
						}}
					>
						<span
							className={`dotBackground ${currentIndex === j ? 'active' : ''}`}
						></span>
						<span className={`button ${currentIndex === j ? 'active' : ''}`}>
							{j + 1}
						</span>
						<span
							className={`text ${currentIndex === j ? 'active' : 'hidden'}`}
						>
							{item.title}
						</span>
					</div>
				</div>
			)
		})
	}
	return (
		<div className='circle-wrapper'>
			<div
				className='circle'
				style={{
					transform: `rotate(${currentIndex * -(360 / content.length) - 60}deg`,
				}}
			>
				{renderDots()}
			</div>
		</div>
	)
}

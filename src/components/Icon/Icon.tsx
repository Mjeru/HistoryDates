import React from 'react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: 'arrow' | 'bigArrow' | 'arrowMobile'
	color?: string
}
export function Icon({ name, color = '#3877EE', ...props }: IconProps) {
	const colors = {
		blue: '#3877EE',
	}
	switch (name) {
		case 'arrowMobile':
			return (
				<svg
					width='6'
					height='8'
					viewBox='0 0 6 8'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178'
						stroke='#42567A'
						stroke-width='2'
					/>
				</svg>
			)
		case 'arrow':
			return (
				<svg
					width='8'
					height='12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path d='M1 1L6 6L1 11' stroke={color} strokeWidth='2' />
				</svg>
			)
			break

		case 'bigArrow':
			return (
				<svg
					width='10'
					height='14'
					viewBox='0 0 10 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
				>
					<path
						d='M8.49988 0.750001L2.24988 7L8.49988 13.25'
						stroke='#42567A'
						strokeWidth='2'
					/>
				</svg>
			)
			break
		default:
			return null
	}
}

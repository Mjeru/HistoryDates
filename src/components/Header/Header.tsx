import React from 'react'
import './Header.scss'
interface HeaderProps {
	text: string
}
export function Header({ text }: HeaderProps) {
	return (
		<div className='header-wrapper'>
			<span className='header-line'></span>
			<div className='header'>{text}</div>
		</div>
	)
}

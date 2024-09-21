import { useEffect, useState } from 'react'
export function useResize() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1280)
	const resizeHandler = (event: UIEvent): void => {
		if (window.innerWidth < 1280) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}
	useEffect(() => {
		window.addEventListener('resize', resizeHandler)
		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [window])

	return isMobile
}

import React, { useEffect, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ContentProps, Slides } from '../../content'
import { useResize } from '../../hooks/useResize'
import { Icon } from '../Icon/Icon'
import './Footer.scss'

export const Footer = ({ content, currentIndex }: ContentProps) => {
	const isMobile = useResize()
	const [currentSlides, setCurrentSlides] = useState<Slides>([])
	const [isLoading, setIsLoading] = useState(false)
	const [swiperIndex, setSwiperIndex] = useState(0)
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)
	const slidesPerView: 'auto' | 3 = isMobile ? 'auto' : 3
	const next = () => {
		if (swiperRef) {
			swiperRef.slideNext()
		}
	}
	const prev = () => {
		if (swiperRef) {
			swiperRef.slidePrev()
		}
	}

	useEffect(() => {
		setIsLoading(true)
		const timer1 = setTimeout(() => {
			if (swiperRef) {
				swiperRef.slideTo(0)
			}
		}, 300)
		const timer2 = setTimeout(() => {
			setCurrentSlides(content[currentIndex].slides)
			setIsLoading(false)
		}, 750)
		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [currentIndex])

	useEffect(() => {
		if (swiperRef) {
			swiperRef.slideTo(0)
		}
	}, [isMobile])

	useEffect(() => {
		if (swiperRef !== null) {
			swiperRef.on('resize', () => {
				swiperRef.params.centeredSlides = window.innerWidth < 1280
				swiperRef.update()
			})
		}
	}, [swiperRef])

	const renderSlides = () => {
		return currentSlides.map((slide, i) => {
			return (
				<SwiperSlide key={i}>
					<h2 className='swiper-header'>{slide.year}</h2>
					<div className='swiper-text'>{slide.text}</div>
				</SwiperSlide>
			)
		})
	}

	return (
		<div className={`footer ${isMobile ? 'mobile' : ''}`}>
			<Swiper
				updateOnWindowResize={true}
				direction='horizontal'
				className={`swiper ${isLoading ? 'hidden' : ''}`}
				onSwiper={(swiper: SwiperType) => setSwiperRef(swiper)}
				observer={true}
				observeParents={true}
				spaceBetween={isMobile ? 25 : 80}
				slidesPerView={slidesPerView}
				centeredSlides={true}
				centeredSlidesBounds={true}
				onSlideChange={(swiper: SwiperType) => setSwiperIndex(swiper.realIndex)}
			>
				{renderSlides()}
			</Swiper>

			{!isMobile && swiperIndex > 0 && (
				<button onClick={prev} className='swiper-button prev'>
					<Icon name='arrow' />
				</button>
			)}
			{!isMobile &&
				swiperIndex <
					content[currentIndex].slides.length -
						(typeof slidesPerView === 'number' ? slidesPerView : 0) && (
					<button onClick={next} className='swiper-button next'>
						<Icon name='arrow' />
					</button>
				)}
		</div>
	)
}

import { useRef } from "react";
import SwiperCore from 'swiper';
// import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import muffinPic from './assets/1.jpg';
import muffinPic2 from './assets/2.jpg';
import muffinPic3 from './assets/3.jpg';
import muffinPic4 from './assets/4.jpg';
import muffinPic5 from './assets/5.jpg';
import muffinPic6 from './assets/6.jpg';
import muffinPic7 from './assets/7.jpg';
import muffinPic8 from './assets/8.jpg';

const muffinPics = [
    muffinPic, muffinPic2, muffinPic3, muffinPic4, muffinPic5, muffinPic6, muffinPic7, muffinPic8
]

SwiperCore.use([Autoplay])

export const PhotoSlideShow = () => {
    const swiperRef = useRef<SwiperCore>()

    return (
        <div className="w-72 overflow-hidden rounded-lg">
            <Swiper
                direction="vertical"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true
                }}
                slidesPerView={2}
                spaceBetween={4}
                onSwiper={(Swiper) => {
                    swiperRef.current = Swiper
                }}
            >
                {muffinPics.map((muffinPic, index) => (
                    <SwiperSlide key={index}>
                        <img src={muffinPic} className="object-cover"></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
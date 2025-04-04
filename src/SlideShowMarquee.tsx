import Marquee from "react-fast-marquee";

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

export const SlideShowMarquee = () => {

    return (
        <Marquee
            className=""
            direction={"right"}
            pauseOnClick={true}
        >
            {muffinPics.map((muffinPic, index) => (
                <img key={index} src={muffinPic} className="w-50 h-32 object-cover" />
            ))}
        </Marquee >
    )
}
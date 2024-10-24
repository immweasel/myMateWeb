import Slider from "react-slick";
import { useState } from "react";
import './AdSlider.css'

interface AdSliderInterface {
    images: string[];
}

export default function AdSlider({ images }: AdSliderInterface) {

    const [activeSlide, setActiveSlide] = useState<number>(0);

    let settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        afterChange: (current: number) => {
            setActiveSlide(current);
        }
    };

    return <>
        <Slider {...settings}>
            {images.map((item, index) => <div key={index} className="sliderItem">
                <img src={item} alt="" className="sliderItemImage" />
            </div>)}
        </Slider>
        <p className="sliderCounter">{activeSlide + 1}/{images.length}</p>
    </>
};
import { Fragment } from 'react';
import './NewGallery.css';
import { useEffect, useRef } from 'react';
import image1 from '../Images/b2.jpg';
import image2 from '../Images/b3.jpg'
import image3 from '../Images/b4.jpg'
import image4 from '../Images/g4.jpg'
import image5 from '../Images/b1.jpg'
import image10 from '../Images/g2.jpg'
import image11 from '../Images/g3.jpg'
import image12 from '../Images/girls.jpg'
import image6 from '../Images/black.jpg'
import image7 from '../Images/blue.jpg'
import image8 from '../Images/funky.jpg'
import image9 from '../Images/checked.jpg'

export function NewGallery() {


    const sliderRef = useRef(null);

    useEffect(() => {
        sliderRef.current.classList.add("slider-animation");
    }, []);



    return (
        <Fragment>
            <div className='heading_1'>
                <h1>Upcoming Mixed </h1>
            </div>
            <div className="new_gallery_main">
                <div ref={sliderRef} className="new_gallery_sub_main">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image11} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image10} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image12} alt="" />
                    <img src={image7} alt="" />
                    <img src={image8} alt="" />
                    <img src={image9} alt="" />
                </div>
            </div>
        </Fragment>
    )
}
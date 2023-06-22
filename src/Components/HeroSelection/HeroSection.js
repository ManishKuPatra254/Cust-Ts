import './HeroSection.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import image1 from './Images/big-sale-discounts-products.jpg';
import image5 from './Images/laughing-teenager-holding-head-yellow-background.jpg';
import image3 from './Images/portrait-handsome-confident-stylish-hipster-lambersexual-modelsexy-man-dressed-size-tshirt-jeans-fashion-male-isolated-studio-posing-near-grey-wall.jpg'
import image4 from './Images/portrait-young-girl-wearing-sunglasses-holding-her-backpack.jpg';
import image2 from './Images/attractive-young-smiling-stylish-woman-pink-sweater-feeling-comfortable-casual-style-posing-isolated-winter-fashion-trend.jpg';
import image6 from './Images/happy-man-sweater-looking-away-with-arms-pockets-red-wall.jpg';
import image7 from './Images/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-green-sweater-jeans-fashion-male-posing-studio-near-white-wall.jpg'


import './HeroSection.css';

export function HeroSliderSection() {
    return (
        <>
            <Carousel autoPlay stopOnHover={false} showThumbs={false} infiniteLoop interval={2500}>

                <div>
                    <img src={image1} alt="" />
                </div>

                <div>
                    <img src={image2} alt="" />
                </div>

                <div>
                    <img src={image3} alt="" />
                </div>

                <div>
                    <img src={image4} alt="" />
                </div>

                <div>
                    <img src={image5} alt="" />
                </div>

                <div>
                    <img src={image6} alt="" />
                </div>

                <div>
                    <img src={image7} alt="" />
                </div>

            </Carousel>
        </>
    )
}
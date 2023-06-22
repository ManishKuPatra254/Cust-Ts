import { Fragment, useEffect, useState } from 'react';
import './Couples.css';
import image1 from '../Images/trendy-fashionable-couple-isolated-white-studio-background.jpg'
import image2 from '../Images/trendy-fashionable-couple-posing.jpg';


export function Couples() {

    const [toogleImage, setToogleImage] = useState(true);

    useEffect(() => {
        const toogleImages = setInterval(() => {
            setToogleImage((item) => !item)
        }, 1500)

        return () => clearInterval(toogleImages)
    }, [])


    return (
        <Fragment>
            <div className='container_couples'>
                <h1>Couples Mix Up</h1>
                <div className="couples_mix_main">
                    {toogleImage ? <img src={image1} alt='' className='img1' /> : <img src={image2} alt='' className='img2' />}
                </div>
            </div>
        </Fragment>
    )
}
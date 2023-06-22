import React from 'react'
import { HeroSliderSection } from '../../HeroSelection/HeroSection'
import { UpcomingGalleryNew } from '../../../Gallery/UpcomingGallery'
import { NewGallery } from '../../../NewGallery/NewGallery';
import { Couples } from '../../../Couples/Couples';

export function Home() {
    return (
        <div>
            <HeroSliderSection />
            <UpcomingGalleryNew />
            <NewGallery />
            <Couples />
        </div>
    )
}



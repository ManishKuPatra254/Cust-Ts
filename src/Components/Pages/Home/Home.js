import React from 'react'
import { HeroSliderSection } from '../../HeroSelection/HeroSection'
import { UpcomingGalleryNew } from '../../../Gallery/UpcomingGallery'
import { NewGallery } from '../../../NewGallery/NewGallery';
import { Couples } from '../../../Couples/Couples';
import { AccessoriesHome } from '../../../AccessoriesHome/AccessoriesHome';

export function Home() {
    return (
        <div>
            <HeroSliderSection />
            <UpcomingGalleryNew />
            <NewGallery />
            <Couples />
            <AccessoriesHome />
        </div>
    )
}



import React from 'react';
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import Video from '../../videos/video.mp4'

export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hola, Soy Cristopher Reyes</HeroH1>
                <HeroP>Desarrollador Web</HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

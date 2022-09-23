import { AboutUs } from './aboutUs';
import { Faq } from './faq';
import {Hero} from './hero'
import { HomePorfolio } from './Portfolio';
import { Services } from './services';
import { Team } from './team';
import { Testimonial } from './testimonial';

export const HomeUI = () => {
    return <>
        <Hero />
        <Services/>
        <AboutUs />
        <Team />
        <HomePorfolio />
        <Faq />
        <Testimonial/>
    </>;
};

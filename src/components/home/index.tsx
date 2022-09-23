import { AboutUs } from './aboutUs';
import { Faq } from './faq';
import {Hero} from './hero'
import { HomePorfolio } from './Portfolio';
import { Services } from './services';
import { Team } from './team';

export const HomeUI = () => {
    return <>
        <Hero />
        <Services/>
        <AboutUs />
        <Team />
        <HomePorfolio />
        <Faq/>
    </>;
};

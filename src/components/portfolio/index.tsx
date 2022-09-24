
import { Button } from '../generalComponents';
import { PortfolioHero } from './hero'
import { WorksSection } from './works';

export const PortfolioUI = () => {
  return (
    <>
      <PortfolioHero />
      <WorksSection />
      {/*  */}
      <section className="  py-28 px-10 md:px-12 lg:px-20 ">
        <div className="bg-black rounded min-h-medium w-full flex flex-col items-center py-10 px-10 gap-6 md:flex-row md:justify-between  lg:px-20">
          <div className="flex flex-col gap-6 text-center max-w-xs lg:max-w-md lg:text-left">
            <h5 className="text-white text-xl lg:text-3xl font-bold">
              Do you have a project in mind?
            </h5>
            <p className="text-white text-sm md:text-md font-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet diam
              in est pharetra porttitor libero.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button>Let’s talk</Button>
            <Button>Learn more</Button>
          </div>
        </div>
      </section>
    </>
  );
}

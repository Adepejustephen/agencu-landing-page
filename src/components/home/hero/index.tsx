import { HeroImage } from "../../../assets";
import { Button } from "../../generalComponents";


export const Hero = () => {
  return (
    <section className="w-full min-h-screen px-8 lg:px-20 py-10">
      <div className=" w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-full gap-6">
        
        {/* HERO LEFT */}

        <div className="flex flex-col justify-center gap-8 md:w-6/12 md:justify-start">
          <h2 className="text-black text-3xl md:text-4xl lg:text-6xl font-bold">
            We are the best agency in the world
          </h2>
          <p className="text-black text-sm md:text-base font-normal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Button>Start a Project</Button>
            <Button whiteBg>Learn more</Button>
          </div>
        </div>
        

        {/* HERO RIGHT */}

        <div className="md:w-6/12">
          <img src={HeroImage} alt="hero" className="object-cover w-full" />
        </div>
      </div>
    </section>
  );
}

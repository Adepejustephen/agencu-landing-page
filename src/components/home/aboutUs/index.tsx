import { AboutImage } from "../../../assets";
import { Button } from "../../generalComponents";


export const AboutUs = () => {
  return (
    <section className="w-full min-h-screen px-10 md:px-12 lg:px-20 py-10">
      <div className=" w-full flex flex-col md:flex-row items-center justify-between min-h-full gap-6">
        {/* HERO LEFT */}
        <div className="md:w-6/12">
          <img src={AboutImage} alt="hero" className="object-cover w-full" />
        </div>

        {/* HERO RIGHT */}

        <div className="flex flex-col justify-center text-center gap-8 md:w-6/12 md:justify-start md:text-left ">
          <p className="text-black text-md md:text-xl font-semibold">
            About US
          </p>
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">
            We are a creative agency
          </h2>
          <p className="text-bodyColor text-sm md:text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, luctus
            sapien vulputate urna tempor euismod adipiscing massa. Volutpat nunc
            quis dictum consectetur egestas varius.
            <br></br>
            <br></br>
            Ac sagittis tellus, sodales commodo elit, sociis purus. Egestas
            mauris eget commodo commodo et vel fermentum ultrices.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Button>More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

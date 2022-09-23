import { Button } from "../../generalComponents";


export const Testimonial = () => {
  return (
    <section className="w-full min-h-screen py-28 px-10 md:px-12 lg:px-20">
      <div className="flex flex-col gap-16">
        {/* TITLE TEXT */}

        <div className="flex flex-col gap-8 text-center md:text-left">
          <h4 className="text-black text-3xl md:text-5xl font-bold">
            Customer testimonials
          </h4>
          <p className="text-bodyColor text-sm md:text-md font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* TESTIMONIALS */}

        {/* <div className="flex flex-col gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((item, id) => {
              return (
                <PortfolioCard
                  key={id}
                  alt={item.title}
                  image={item.image}
                  txt={item.txt}
                  title={item.title}
                />
              );
            })}
          </div>
          <Button>See All Portfolio </Button>
        </div> */}

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
          <Button>Let’s talk</Button>
        </div>
      </div>
    </section>
  );
}

import { serviceData } from "./serviceData";

export const Services = () => {
  return (
    <section className="w-full min-h-screen bg-lightBlue py-28 px-10 md:px-12 lg:px-20 ">
      <div className="flex flex-col gap-16 items-center">
        {/* TITLE TEXT */}

        <div className="flex flex-col gap-8 items-center text-center max-w-lg">
          <p className="text-black text-base md:text-xl font-semibold">
            Services
          </p>
          <h4 className="text-black text-3xl md:text-5xl font-bold">
            We Provide
          </h4>
          <p className="text-bodyColor text-sm md:text-md text-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non. Viverra nec eu.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceData.map((item, id) => {
            return (
              <div
                key={id}
                className="bg-white px-12 py-12 flex flex-col gap-4  w-full text-center"
              >
                <img src={item.icon} alt={item.title} className="h-20" />
                <h4 className="text-black text-lg md:text-xl font-bold">
                  {item.title}
                </h4>
                <p className="text-bodyColor text-xs md:text-sm text-normal">
                  {item.txt}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

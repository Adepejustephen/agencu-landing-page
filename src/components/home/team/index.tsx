import React from "react";
import { Dribble, Facebook, Instagram, PinInterest } from "../../../assets";
import { teamData } from "./teamdata";

export const Team = () => {
  return (
    <section className="w-full min-h-screen bg-lightBlue py-28 px-10 md:px-12 lg:px-20 ">
      <div className="flex flex-col gap-16 items-center">
        {/* TITLE TEXT */}

        <div className="flex flex-col gap-8 items-center text-center max-w-lg">
          <p className="text-black text-base md:text-xl font-semibold">
            Meet Our Team
          </p>
          <h4 className="text-black text-3xl md:text-5xl font-bold">
            Our Expert Members
          </h4>
          <p className="text-bodyColor text-sm md:text-md text-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            vivamus pretium maecenas amet.
          </p>
        </div>

        {/* SERVICES GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamData.map((item, id) => {
            return (
              <div key={id} className=" flex flex-col  w-full  relative">
                <img src={item.image} alt={item.name} />

                {/* TEXT OVERLAY */}

                <div className=" p-6 w-full">
                  <div className="w-full flex flex-col bg-white items-center shadow-md px-3 py-5 gap-3 -mt-20 md:-mt-24 md:gap-4 lg:items-start rounded">
                    {/* SOCIAL ICONS */}
                    <div className="flex gap-4">
                      <Facebook />
                      <PinInterest />
                      <Dribble />
                      <Instagram />
                    </div>
                    <strong className="text-black text-lg md:text-xl font-bold">
                      {item.name}
                    </strong>
                    <p className="text-bodyColor text-xs md:text-sm font-normal">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

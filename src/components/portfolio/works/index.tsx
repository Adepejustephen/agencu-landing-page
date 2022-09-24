import React from 'react'
import { portfolioData} from '../../../utils/data';
import { Button, PortfolioCard } from '../../generalComponents';

export const WorksSection = () => {
  return (
    <section className="w-full min-h-screen  py-28 px-10 md:px-12 lg:px-20 ">
      <div className="flex flex-col gap-16 items-center">
        {/* TITLE TEXT */}

        <div className="flex flex-col gap-8 items-center text-center max-w-lg">
          <p className="text-black text-base md:text-xl font-semibold">
            Portfolio
          </p>
          <h4 className="text-black text-3xl md:text-5xl font-bold">
            Our Recent Works
          </h4>
          <p className="text-bodyColor text-sm md:text-md text-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            mi blandit et ac elit eros, viverra. Elementum pellentesque sed
            scelerisque pellentesque auctor accumsan, velit posuere eget.
          </p>
        </div>

        {/* Works */}

        <div className="flex flex-col gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.map((item, id) => {
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
        </div>
      </div>
    </section>
  );
}

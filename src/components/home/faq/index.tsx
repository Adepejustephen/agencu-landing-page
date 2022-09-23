

export const Faq = () => {
  return (
    <section className="w-full min-h-screen  bg-lightBlue py-28 px-10 md:px-12 lg:px-20 ">
      <div className="flex flex-col gap-16 items-center">
        {/* TITLE TEXT */}

        <div className="flex flex-col gap-8 items-center text-center ">
          <p className="text-black text-base md:text-xl font-semibold">FAQ’S</p>
          <h4 className="text-black text-3xl md:text-5xl font-bold">
            Find the answers you need
          </h4>
        
        </div>

        {/* FAQ ACCORDION */}

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
      </div>
    </section>
  );
}

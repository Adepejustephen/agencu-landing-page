
import { useState } from "react";
import { ArrowDown, ArrowUp } from "../../../assets";
import { faqs } from "../../../utils/data";

type stateProps =  null | number;



export const Faq = () => {
  const [selected, setSelected] = useState<stateProps>( null)

  const toggle = (index:number) => {
    if(selected === index) {
      return setSelected(null)

    }
    setSelected(index)
  }
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

        <div className="flex flex-col gap-5 sm:w-400 md:w-576 lg:w-800 xl:w-900">
          {faqs.map((faq, index) => {
            return (
              <div
                className="bg-white p-8 flex flex-col gap-5 rounded"
                key={index}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="text-black font-medium text-sm md:text-base">
                    {faq.title}
                  </p>
                  {selected !== index ? <ArrowDown/> : <ArrowUp/>}
                </div>
                <div className={selected !== index ? "hidden" : "block"}>
                  <span className="font-normal text-xs md:text-sm text-black">
                    {faq.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

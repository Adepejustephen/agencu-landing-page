import {  Dribble, Facebook, Instagram, LocationIcon, Mail, Phone, PinInterest } from "../../assets";
import { Button } from "../generalComponents";


export const ContactUI = () => {
  return (
    <section className="w-full  py-16 md:px-25 lg:px-40">
      <div className="flex flex-col bg-#C2BDBD w-full shadow rounded px-10 py-10 gap-10 md:flex-row md:gap-x-16 lg:gap-28  md:px-20 ">
        <div className="flex flex-col gap-10 md:max-w-sm">
          <h4 className="text-black font-bold text-xl md:text-3xl">
            Now Start Your project
          </h4>
          <p className="text-black font-normal text-center text-xs md:text-sm md:text-left">
            Fill up the from and our Team will get back to you within 24 hours.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 items-center text-black font-normal text-xs md:text-sm">
              <Phone /> +2348149735987
            </li>
            <li className="flex gap-3 items-center text-black font-normal text-xs md:text-sm">
              <Mail /> adepejuifeoluwa97@gmail.com
            </li>
            <li className="flex gap-3 items-center text-black font-normal text-xs md:text-sm">
              <LocationIcon /> Lagos, Nigeria
            </li>
          </ul>
          <div className="flex gap-4 items-center md:mt-24">
            <Facebook />
            <PinInterest />
            <Dribble />
            <Instagram />
          </div>
        </div>
        <form action="" className="flex flex-col gap-8">
          {/* Form Item */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text text-#000000 text-lg font-semibold md:text-xl "
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="form-input border-0 border-b border-black focus:ring-0 focus:border-black p-2 text-black text-xs md:text-sm "
            />
          </div>
          {/* Form Item */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text text-#000000 text-lg font-semibold md:text-xl "
            >
              Email
            </label>
            <input
              type="email"
              placeholder="itagencyc@gmail.com"
              className="form-input border-0 border-b border-black focus:ring-0 focus:border-black p-2 text-black text-xs md:text-sm "
            />
          </div>
          {/* Form RADIO SELECT */}

          <div className="flex flex-col gap-4">
            <h4 className="text text-#000000 text-lg font-semibold md:text-xl ">
              What service do you want?
            </h4>
            <div className="flex  gap-4">
              <div className="flex  gap-3 items-center">
                <input type="radio" className="   checked:bg-blue " />
                <label
                  htmlFor=""
                  className="text text-#000000 text-xs ffont-medium md:text-sm "
                >
                  Webflow
                </label>
              </div>
              <div className="flex  gap-3 items-center">
                <input type="radio" className="   checked:bg-blue " />
                <label
                  htmlFor=""
                  className="text text-#000000 text-xs font-medium md:text-sm "
                >
                  UI/UX Design
                </label>
              </div>
              <div className="flex  gap-3 items-center">
                <input type="radio" className="   checked:bg-blue " />
                <label
                  htmlFor=""
                  className="text text-#000000 text-xs font-medium md:text-sm "
                >
                  SEO
                </label>
              </div>
            </div>
          </div>
          {/* Form Item */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text text-#000000 text-lg font-semibold md:text-xl "
            >
              Message
            </label>
            <input
              type="text"
              placeholder="Write your message"
              className="form-input border-0 border-b border-black focus:ring-0 focus:border-black p-2 text-black text-xs md:text-sm "
            />
          </div>
          <Button>Send message</Button>
        </form>
      </div>
    </section>
  );
}

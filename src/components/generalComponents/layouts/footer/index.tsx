import { Behance, GramFill, Linkedin, Logo, Twitter, Whatsapp, Youtube } from "../../../../assets";
import { Button } from "../../button";


export const Footer = () => {
  return (
    <footer className="bg-footerBg w-full flex gap-10 flex-wrap justify-between py-20  px-10 md:px-12 lg:px-20 lg:gap-32 ">
      {/* LOGO AND SOCIAL ICONS */}
      <div className="flex flex-col gap-8 max-w-xs">
        <div>
          <img src={Logo} alt="Logo" className="object-contain" />
        </div>

        <p className="text-bodyColor text-xs text-center  font-normal md:text-sm md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          nulla massa fringilla.
        </p>
        <div className="flex  items-center md:gap-2">
          <img
            src={Twitter}
            alt="twitter"
            className="w-full  object-contain cursor-pointer"
          />
          <img
            src={GramFill}
            alt="instagram"
            className="w-full  object-contain cursor-pointer"
          />
          <img
            src={Linkedin}
            alt="linkedin"
            className="w-full  object-contain cursor-pointer"
          />
          <img
            src={Youtube}
            alt="Youtube"
            className="w-full  object-contain cursor-pointer"
          />
          <img
            src={Whatsapp}
            alt="Whatsapp"
            className="w-full  object-contain cursor-pointer"
          />
          <img
            src={Behance}
            alt="Behance"
            className="w-full  object-contain cursor-pointer"
          />
        </div>
      </div>
      {/* LINKs */}
      <div className="flex  justify-between gap-20">
        <div className="flex flex-col gap-10">
          <h4 className="text-black text-md md:text-xl font-bold">Menu</h4>
          <ul className="flex flex-col gap-5">
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Home
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              About Us
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Blog
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Blog post
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-10">
          <h4 className="text-black text-md md:text-xl font-bold">
            Utility Pages
          </h4>
          <ul className="flex flex-col gap-5">
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Start Here
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Styleguide
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              Password Protected
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              404 Not Found
            </li>
            <li className="text-bodyColor text-xs cursor-pointer md:text-sm font-normal">
              License
            </li>
          </ul>
        </div>
      </div>
      <form action="" className="flex flex-col gap-10 ">
        <h4 className="text-black text-md md:text-xl font-bold">
          Subscribe to our newsletter
        </h4>
        <input
          type="text"
          className="rounded bg-black px-6 py-5 w-full text-#999999 text-xs font-normal md:text-sm"
          placeholder="Enter your email"
        />
        <Button>Subscribe</Button>
      </form>
    </footer>
  );
}

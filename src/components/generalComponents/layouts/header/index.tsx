import React from 'react'
import { Logo } from '../../../../assets';
import { Button } from '../../button';

export const Header = () => {
  return (
    <header className="w-full border-solid border-b-2 border-headerBorder">
      <div className="  px-5  lg:px-20  flex items-center h-20 justify-between">
        <div>
          <img src={Logo} alt="Logo" className="object-contain" />
        </div>
        <nav className="flex flex-col xl:flex-row lg:justify-between lg:items-center lg:w-6/12">
          <ul className="flex flex-col xl:flex-row lg:justify-between lg:items-center space-x-6">
            <li className=" text-black font-medium text-base">Home</li>
            <li className=" text-black text-base font-medium">Services</li>
            <li className=" text-black text-base font-medium">About Us</li>
            <li className=" text-black text-base font-medium">Portfolio</li>
          </ul>
          <Button headerBtn>
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}

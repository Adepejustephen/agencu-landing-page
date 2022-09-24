import React from 'react'
import { Logo } from '../../../../assets';
import { Button } from '../../button';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';



export const Header = () => {
  return (
    <header className="w-full border-solid border-b-2 border-headerBorder">
      <div className="  px-10 md:px-12 lg:px-20  flex items-center h-20 justify-between">
        <div>
          <img src={Logo} alt="Logo" className="object-contain" />
        </div>
        <nav className="flex flex-col xl:flex-row lg:justify-between lg:items-center lg:w-6/12">
          <ul className="flex flex-col xl:flex-row lg:justify-between lg:items-center space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-base text-blue"
                    : "text-black font-medium text-base"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="services"
                activeClass="font-medium text-base text-blue"
                className="text-black font-medium text-base cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="font-medium text-base text-blue"
                className="text-black font-medium text-base cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium text-base text-blue"
                    : "text-black font-medium text-base"
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
          <Button linkbtn headerBtn>Contact</Button>
        </nav>
      </div>
    </header>
  );
}

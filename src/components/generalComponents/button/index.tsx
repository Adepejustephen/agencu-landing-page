import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

type ButtonProp = {
  children: React.ReactNode;
  whiteBg?: boolean;
  nobg?: boolean;
  headerBtn?: boolean;
  linkbtn?: boolean;
  link?: React.LinkHTMLAttributes<HTMLLinkElement>;
  variants?:any 
};

export const Button: React.FC<ButtonProp> = ({
  children,
  whiteBg,
  headerBtn,
  nobg,
  linkbtn,
  link,
  variants,
}) => {
  return (
    <>
      {linkbtn ? (
        <motion.button
          variants={variants}
          className={
            whiteBg
              ? "text-blue font-medium text-sm md:text-base bg-white rounded h-14 px-8 border-solid border border-blue cursor-pointer"
              : headerBtn
              ? "text-white text-sm font-medium md:text-base bg-blue rounded h-10 px-10 cursor-pointer"
              : nobg
              ? "border-solid border-b-2 border-blue text-sm font-medium md:text-base flex gap-3 text-black items-center py-3 cursor-pointer max-w-max"
              : "text-white text-sm font-medium md:text-base bg-blue rounded h-14 px-10 cursor-pointer"
          }
        >
          <Link to="/contact">{children}</Link>
        </motion.button>
      ) : (
        <motion.button
          variants={variants}
          className={
            whiteBg
              ? "text-blue font-medium text-sm md:text-base bg-white rounded h-14 px-8 border-solid border border-blue cursor-pointer"
              : headerBtn
              ? "text-white text-sm font-medium md:text-base bg-blue rounded h-10 px-10 cursor-pointer"
              : nobg
              ? "border-solid border-b-2 border-blue text-sm font-medium md:text-base flex gap-3 text-black items-center py-3 cursor-pointer min-w-max"
              : "text-white text-sm font-medium md:text-base bg-blue rounded h-14 px-10 cursor-pointer max-w-max"
          }
        >
          {children}
        </motion.button>
      )}
    </>
  );
};

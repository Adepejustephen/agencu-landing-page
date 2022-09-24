import { Link } from "react-router-dom";

type ButtonProp = {
  children: React.ReactNode;
  whiteBg?: boolean;
  nobg?: boolean;
  headerBtn?: boolean;
  linkbtn?: boolean;
  link?: React.LinkHTMLAttributes<HTMLLinkElement>;
};

export const Button: React.FC<ButtonProp> = ({ children, whiteBg, headerBtn, nobg, linkbtn, link }) => {
  return (
    <>
      {linkbtn ? (
        <button
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
        </button>
      ) : (
        <button
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
        </button>
      )}
    </>
  );
};

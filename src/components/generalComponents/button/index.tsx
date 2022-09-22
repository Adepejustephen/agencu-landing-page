type ButtonProp = {
  children: React.ReactNode;
  whiteBg?: boolean;
  noBg?: boolean;
  headerBtn?: boolean;
  variants?: any;
};

export const Button: React.FC<ButtonProp> = ({ children, whiteBg, headerBtn }) => {
  return (
    <button
      className={
        whiteBg
          ? "text-blue font-medium text-sm md:text-base bg-white rounded h-14 px-8 border-solid border-2 border-blue"
          : headerBtn
          ? "text-white text-sm font-medium md:text-base bg-blue rounded h-10 px-10"
          : "text-white text-sm font-medium md:text-base bg-blue rounded h-14 px-10"
      }
    >
      {children}
    </button>
  );
};

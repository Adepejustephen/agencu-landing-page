import { ArrowRight } from "../../../assets";
import { Button } from "../button";

interface CardProps {
    image: string;
    txt: string;
    title: string;
    alt: string;
}

export const PortfolioCard:React.FC<CardProps> = ({image, title, txt, alt}) => {
    return (
      <div className="py-5 px-5 shadow-md flex flex-col gap-5 rounded">
        <img src={image} alt={alt} />
        <h4 className="text-black text-lg md:text-xl font-bold">{title}</h4>
        <p className="text-bodyColor text-xs md:text-sm font-normal">{txt}</p>
        <Button nobg>Read more <ArrowRight/></Button>
      </div>
    );
}

export interface TestimonialProp {
  quote: string;
  name: string;
  role: string;
    image: string;
    alt?: string;
};

export interface FaqProps {
  title: string;
  text: string;
}

export interface PortfolioProps {
  title: string;
  txt: string;
  image: string;
}

export interface TeamProp  {
  name: string;
  position: string;
  image: string;
};

export interface ServiceProp  {
  title: string;
  txt: string;
  icon?: string;
};
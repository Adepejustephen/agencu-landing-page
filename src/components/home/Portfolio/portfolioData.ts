import { WorkImg1, WorkImg2, WorkImg3 } from "../../../assets";

type PortfolioProps = {
    title: string;
    txt: string;
    image: string;
}

export const works: PortfolioProps[] = [
  {
    image: WorkImg1,
    title: "Real estate websites",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: WorkImg2,
    title: "Real estate websites",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: WorkImg3,
    title: "Real estate websites",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
];
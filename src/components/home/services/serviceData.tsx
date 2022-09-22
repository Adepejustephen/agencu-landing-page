import { Graphic, Programming, Seo, UiUx } from "../../../assets";


type ServiceProp = {
  title: string;
  txt: string;
  icon?: string;
};

export const serviceData: ServiceProp[] = [
  {
    title: "Web Design",
    icon: Programming,
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "UI/UX Design",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: UiUx
  },
  {
    title: "Graphics design",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Graphic ,
  },
  {
    title: "SEO Marketing",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Seo ,
  },
];
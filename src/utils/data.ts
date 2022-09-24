import {
  CodyFisher,
  Jerome,
  Robert,
  WorkImg1,
  WorkImg2,
  WorkImg3,
  Cooper,
  Hawkings,
  Simons,
  Waston,
  Graphic,
  Programming,
  Seo,
  UiUx,
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
} from "../assets";
import { FaqProps, PortfolioProps, ServiceProp, TeamProp, TestimonialProp } from "./model";

export const testimonials: TestimonialProp[] = [
  {
    name: "Jerome Bell",
    image: Jerome,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    role: "Marketing Coordinator",
  },
  {
    name: "Cody Fisher",
    image: CodyFisher,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    role: "President of Sales",
  },
  {
    name: "Robert Fox",
    image: Robert,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    role: "Web Designer",
  },
];
export const faqs: FaqProps[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae. Lobortis imperdiet ornare eleifend nisl ut auctor. Ornare etiam neque elementum mattis ultrices.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae. Lobortis imperdiet ornare eleifend nisl ut auctor. Ornare etiam neque elementum mattis ultrices.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae. Lobortis imperdiet ornare eleifend nisl ut auctor. Ornare etiam neque elementum mattis ultrices.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae. Lobortis imperdiet ornare eleifend nisl ut auctor. Ornare etiam neque elementum mattis ultrices.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae. Lobortis imperdiet ornare eleifend nisl ut auctor. Ornare etiam neque elementum mattis ultrices.",
  },
];

export const portfolioData: PortfolioProps[] = [
  {
    image: Portfolio1,
    title: "Medical Website",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: Portfolio2,
    title: "Cryptocurrency Website",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: Portfolio3,
    title: "Bitcoin investment Web ",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: Portfolio4,
    title: "Body builder Web",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
  {
    image: Portfolio5,
    title: "Dental Website ",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum, ",
  },
];

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

export const teamData: TeamProp[] = [
  {
    name: "Jane Cooper",
    position: "Developer",
    image: Cooper,
  },
  {
    name: "Brooklyn Simmons",
    position: "Designer",
    image: Simons,
  },
  {
    name: "Guy Hawkins",
    position: "Marketer",
    image: Hawkings,
  },
  {
    name: "Kristin Watson",
    position: "Photographer",
    image: Waston,
  },
];

export const serviceData: ServiceProp[] = [
  {
    title: "Web Design",
    icon: Programming,
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "UI/UX Design",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: UiUx,
  },
  {
    title: "Graphics design",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Graphic,
  },
  {
    title: "SEO Marketing",
    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: Seo,
  },
];
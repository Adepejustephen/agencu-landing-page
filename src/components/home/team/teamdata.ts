import { Cooper, Hawkings, Simons, Waston } from "../../../assets";

type TeamProp = {
  name: string;
  position: string;
  image: string;
};

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

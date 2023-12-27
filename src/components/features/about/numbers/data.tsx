import { TbAirConditioning } from "react-icons/tb";
import { GiSmallFire } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
type NumberData = {
  number: number;
  insideIcon: JSX.Element;
  content: string;
};

export const numbersData: NumberData[] = [
  {
    number: 1500,
    insideIcon: (
      <TbAirConditioning className="lg:w-16 lg:h-16 w-10 h-10 text-sawers-blue" />
    ),
    content: "zamontowanych klimatyzacji",
  },
  {
    number: 400,
    insideIcon: (
      <GiSmallFire className="lg:w-16 lg:h-16 w-10 h-10  text-sawers-blue" />
    ),
    content: "zamontowanych pomp ciepła",
  },
  {
    number: 50,
    insideIcon: (
      <FaSolarPanel className="lg:w-16 lg:h-16  w-10 h-10 text-sawers-blue" />
    ),
    content: "instalacji fotowoltaicznych",
  },
  {
    number: 200,
    insideIcon: (
      <IoPeople className="lg:w-16 lg:h-16  w-10 h-10 text-sawers-blue" />
    ),
    content: "zadowolonych klientów rocznie",
  },
];

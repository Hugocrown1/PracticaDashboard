import {
  IconArmchair2,
  IconBarbell,
  IconInfoHexagon,
} from "@tabler/icons-react";
import Link from "next/link";

import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["700"] });

const menuRoutes = [
  {
    route: "/",
    name: "INICIO",
    icon: <IconArmchair2 size={21} />,
  },
  {
    route: "/about",
    name: "ACERCA DE",
    icon: <IconInfoHexagon size={21} />,
  },
  {
    route: "/densidad",
    name: "COMPOSICIÓN CORPORAL",
    icon: <IconBarbell />,
  },
];

function Menu() {
  return (
    <div className="text-[#fff] w-1/4 lg:w-fit h-screen  bg-[#000814] text-left p-3 flex flex-col gap-y-1">
      <h1
        className={`mb-2 text-xl font-semibold text-center ${lato.className}`}
      >
        Menú
      </h1>

      <ul>
        {menuRoutes.map((menu, index) => (
          <li>
            <Link
              href={menu.route}
              className="flex flex-row gap-x-2 my-1 p-2 w-full items-center rounded-md hover:bg-[#cecece46]"
              key={index}
            >
              {menu.icon}{" "}
              <span className={` lg:whitespace-nowrap ${lato.className}`}>
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;

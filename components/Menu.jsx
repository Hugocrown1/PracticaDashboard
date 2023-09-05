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
    ruta: "/",
    nombre: "INICIO",
    icono: <IconArmchair2 size={21} />,
  },
  {
    ruta: "/about",
    nombre: "ACERCA DE",
    icono: <IconInfoHexagon size={21} />,
  },
  {
    ruta: "/densidad",
    nombre: "COMPOSICIÓN CORPORAL",
    icono: <IconBarbell />,
  },
];

function Menu() {
  return (
    <div className="text-[#fff] w-fit h-screen  bg-[#000814] text-left p-3 flex flex-col gap-y-1">
      <h1
        className={`mb-2 text-xl font-semibold text-center ${lato.className}`}
      >
        Menú
      </h1>

      <ul>
        {menuRoutes.map((menu, index) => (
          <Link href={menu.ruta}>
            <li
              className="flex flex-row gap-x-2 my-1 p-2 w-full items-center rounded-md hover:bg-[#cecece46]"
              key={index}
            >
              {menu.icono}{" "}
              <span className={`whitespace-nowrap ${lato.className}`}>
                {menu.nombre}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Menu;

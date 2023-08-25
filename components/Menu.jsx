import { IconArmchair2, IconInfoHexagon } from "@tabler/icons-react"
import Link from "next/link"

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio',
        icono: <IconArmchair2 color="#00b4d8"/>
    },
    {
        ruta: '/about',
        nombre: 'Acerca de',
        icono: <IconInfoHexagon color="#00b4d8" />

    }
]


function Menu()  {
  return (
    <div className="text-[#fff] w-1/6 h-screen bg-[#03045e] text-left p-3 flex flex-col gap-y-1">
        <h1 className="mb-2">MENÚ</h1>

        <ul >
        { menuRoutes.map( (menu, index) =>
         <Link href={menu.ruta}>
             <li className="flex flex-row gap-x-2 my-1 p-2 rounded-md hover:bg-[#cecece46]" key={index}>
                {menu.icono} {menu.nombre}
                     </li>
         </Link> ) }

        </ul>
        

        
        </div>
  )
}
export default Menu

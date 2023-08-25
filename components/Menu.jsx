import Link from "next/link"

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio'
    },
    {
        ruta: '/about',
        nombre: 'Acerca de'

    }
]


function Menu()  {
  return (
    <div className="text-[#fff] w-1/6 h-screen bg-[#03045e] text-left p-3 flex flex-col gap-y-1">
        <h1 className="mb-2">MENÚ</h1>

        <ul>
        { menuRoutes.map( (menu, index) =>
         <li key={index}>
            <Link className="hover:underline" href={menu.ruta}>{menu.nombre}</Link>
        </li> ) }

        </ul>
        

        
        </div>
  )
}
export default Menu

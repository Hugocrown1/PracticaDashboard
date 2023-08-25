import Link from "next/link"

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'INICIO'
    },
    {
        ruta: '/about',
        nombre: 'ACERCA DE'

    }
]


function Menu()  {
  return (
    <div className="w-40 h-screen bg-[#6B9080] text-left px-2 flex flex-col gap-y-1">
        <h1 className="mb-2">Menú</h1>
        { menuRoutes.map( (menu, index) => <Link className="hover:underline" key={index} href={menu.ruta}>{menu.nombre}</Link> ) }

        
        </div>
  )
}
export default Menu


import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

function Home() {
  return (
    <div className="bg-[#F6FFF8] h-screen w-full">
      <h1 className={`text-center text-black ${lato.className}`}>Hola tilin</h1>
      
      
    </div>
  )
}

export default Home

import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400'] })

function Home() {
  return (
    <div>
      <h1 className={`text-center text-black ${lato.className}`}>Hola tilin</h1>
      
      
    </div>
  )
}

export default Home
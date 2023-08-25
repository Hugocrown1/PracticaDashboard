
import Menu from '@/components/Menu'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Practica Dashboard',
  description: 'Desarrollo Web II',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row'>
          <Menu/>

          <main className='w-screen h-screen bg-[#f8f7ff] p-4'>
            {children}
          </main>

        </div>
        </body>
    </html>
  )
}

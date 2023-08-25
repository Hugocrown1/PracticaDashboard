
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandTwitterFilled } from '@tabler/icons-react'
import { Bebas_Neue, Lato } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] })

const lato = Lato({ subsets: ['latin'], weight: ['700'] })

const latoLight = Lato({ subsets: ['latin'], weight: ['400'] })



const About = () => {
    return (

        <div className="text-center items-center grid grid-cols-2 justify-center h-screen text-white">

            {/* Aca va toda la info */}
            <div className='text-left gap-y-4 bg-[#000814] flex flex-col h-full w-full px-4  justify-center items-center'>
                
                    <div>
                        <h1 className={`text-8xl ${bebasNeue.className}`}>Acerca de mi</h1>
                        <p className={`text-xl font-semibold ${lato.className}`}>Hola, mi nombre es <span className='text-[#00b4d8]'>Hugo Corona</span> y soy un desarrollador web originario de <span className='text-[#00b4d8]'>Ensenada, Baja California</span> </p>
                        <br />
                        <p className={`${latoLight.className} text-base`}>Cuento con experiencia en el desarrollo de aplicaciones y soluciones tecnológicas. Enfocado tanto el desarrollo frontend como backend, con competencias en lenguajes como JavaScript y Java.
                         Comprometido con la mejora continua y la adaptación a nuevas tecnologías.
                         Listo para contribuir y resolver desafíos en entornos tecnológicos diversos.</p>
                         <br />
                         <span className='text-slate-300 italic'>Contacto:</span>
                        
                         <div className='my-4 flex flex-row items-center justify-center gap-x-14'>
                            <a className='contact-anchor' href="https://github.com/Hugocrown1">
                                <IconBrandGithubFilled size={40}/>
                            </a>
                            <a className='contact-anchor' href="https://www.linkedin.com/in/hugo-corona-62589327a/">
                                <IconBrandLinkedin size={40}/>
                            </a>
                            <a className='contact-anchor' href="https://twitter.com/HugoCrown_">
                                <IconBrandTwitterFilled size={40}/>
                            </a>
                        
                        
                         </div>
                    </div>
                
            </div>
            
            
            
                <div className='bg-[#fff] h-full flex items-center justify-center'>

                    <div className='p-4 rounded-full bg-[#00b4d8] shadow-lg animate-float'>
                        <div className="mx-auto bg-cover bg-center bg-no-repeat  bg-[url(https://images.mubicdn.net/images/cast_member/47647/cache-3429-1478101707/image-w856.jpg)]  w-96 h-96 rounded-full text-white"></div>
                    </div>
                    
                </div>
            
            
        </div>
    )
}

export default About
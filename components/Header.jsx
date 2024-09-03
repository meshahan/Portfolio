import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'



const Header = () => {
  return (

    <header className='py-8 xl:py-12  text-white bg-pink-50/20'> 
      <div className='container mx-auto flex justify-between items-center'>
      {/*logo*/}
        <Link href={"/"}>
        <h1>
          Hard Target<span className=' text-cyan-500'>.</span>
          </h1>
        </Link>

        {/* Desktop Nav & hire me Button*/}
        <div className='hidden xl:flex items-center gap-8'><Nav/>
        <Link href='/Contact'>
        <Button>Call me</Button>
        </Link> </div>
      
      {/* mobile nav */}
      <div className='xl:hidden'> Mobile Nav</div>
      </div>
   </header>
  )
}

export default Header

"use client"
import { border } from "@chakra-ui/react"
import { colors } from "@mui/material"
import { cyan, lightGreen } from "@mui/material/colors"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inter } from 'next/font/google';

const links = [
    {
        name:'home',
        path:"/"
    },
    {
        name:'services',
        path:"/services"
    },
    {
        name:'resume',
        path:"/resume"
    }, 
    {
        name:'work',
        path:"/work"
    },
    {
        name:'contact',
        path:"/contact"
    },
]


const Nav = () => {
    const pathName = usePathname()
   
  return (
    <nav className="flex gap-8"> 
    {links.map((link,index)=>{

        return(
            <Link href={link.path} key={index} className={`${
                link.path === pathName && "text-colors-lightGreen border-b-2 border-accent"
            } capitalize font-medium hover:text-cyan-800 transition-all `}>{link.name}</Link>
        )
    })} 
    </nav>
     
    
  )
}

export default Nav

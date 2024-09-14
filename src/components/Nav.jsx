"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Nav = () => {
  const pathName = usePathname()
  
  const links = [
    {name:"Home",url:'/'},
    {name:"Services",url:'/services'},
    {name:"Resume",url:'/resume'},
    {name:"Work",url:'/work'},
    {name:"Contact",url:'/contact'},
  ]
    return (
        <nav className="nav">
          <ul className="flex gap-8 items-center">
            {links.map((link,index)=><li  key={index}><Link className={`${link.url===pathName ? 'text-accent-default border-b-2 border-accent-default': ''} capitalize font-medium hover:text-accent-hover transition-all`} href={link.url}>{link.name}</Link></li>)}
          </ul>
        </nav>
    );
};

export default Nav;
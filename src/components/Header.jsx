import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href='/'>
                    <h1 className="xl:text-4xl text-3xl font-semibold">
                        Abdullah<span className="text-accent-default">.</span>
                    </h1>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    
                <Nav></Nav>
                
                <Link href='/contact'>
                    <Button className="bg-accent-default hover:bg-accent-hover rounded-xl">Hire me</Button>
                </Link>
                </div>
                <nav className="flex lg:hidden">mobile nav</nav>
            </div>
        </header>
    );
};

export default Header;
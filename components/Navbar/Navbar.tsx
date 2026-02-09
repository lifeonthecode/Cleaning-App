'use client'

import { logo } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { useState } from "react";


const Navbar = () => {

    const [isOpen, setOpen] = useState<boolean>(false);

    const navLinks = [
        { label: 'home', link: '#home' },
        { label: 'about us', link: '#about' },
        { label: 'service', link: '#service' },
        { label: 'blog', link: '#blog' },
        { label: 'contact', link: '#contact' },
    ];


    return (
        <div className='w-full h-24.5 flex items-center justify-center bg-white px-4 sticky top-0 left-0 z-50'>
            <div className="max-w-292.5 w-full mx-auto">
                <div className="flex items-center justify-between">
                    {/* LOGO WRAPPER */}
                    <div className="w-51 h-12 5">
                        <Link href={'/'}><Image src={logo} width={204} height={50} alt='Logo' /></Link>
                    </div>

                    {/* NAV  */}
                    <DesktopNav navLinks={navLinks} />

                    {/* NAVBAR RIGHT WRAPPER  */}
                    <div className="flex items-center">
                        <button className="hidden lg:block py-3 px-8 bg-[#36b864] rounded-md text-lg text-white font-medium capitalize cursor-pointer">get a quote</button>


                        <button onClick={() => setOpen(!isOpen)} className="lg:hidden flex items-center justify-center z-50"><Menu color="black" size={'2rem'} /></button>
                    </div>

                </div>
            </div>


            {/* MOBILE NAV  */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-dvh py-10 px-4 md:px-10 bg-white transform transition-all duration-500 z-40 ${isOpen ? 'translate-y-0': '-translate-y-full'}`}>
                <MobileNav navLinks={navLinks} />
            </div>
        </div>
    );
};

export default Navbar;
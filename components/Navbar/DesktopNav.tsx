'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
    label: string,
    link: string,
}

interface NavProps {
    navLinks: NavLink[],
}

const DesktopNav = ({ navLinks }: NavProps) => {
    const [active, setActive] = useState<string>(navLinks[0].link);

    useEffect(() => {
        const handleScroll = () => {
            navLinks.forEach((item) => {
                const section = document.querySelector(item.link) as HTMLElement;
                if (!section) return;

                const rect = section.getBoundingClientRect();


                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActive((prev) => {
                        if (prev !== item.link) return item.link;
                        return prev;
                    });
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    // ACTIVE HANDLE CLICK 
    const handleClick = (link: string) => {
        setActive(link);
    }

    return (
        <nav className="hidden lg:flex items-center gap-7">
            {
                navLinks?.map((item, index) => (
                    <Link
                        href={item?.link}
                        onClick={() => handleClick(item.link)}
                        key={index}
                        className={`text-lg transition-colors font-vietnam  capitalize ${active === item.link ? 'text-[#36b864] font-medium' : 'text-[#4d4d4d] font-normal'}`}
                    >{item?.label}</Link>
                ))
            }
        </nav>
    );
};

export default DesktopNav;
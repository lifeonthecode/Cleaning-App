import { footerLogo } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

interface Menu {
    title: string,
    link?: string,
}
interface Props {
    title: string,
    menus: Menu[],

}

const footerMenus: Props[] = [
    {
        title: 'Company',
        menus: [
            {
                title: 'About',
                link: '#about'
            },
            {
                title: 'Services',
                link: '#services'
            },
            {
                title: 'Our Team',
                link: '#our_team'
            },
        ]
    },
    {
        title: 'Know More',
        menus: [
            {
                title: 'Support',
            },
            {
                title: 'Privacy Policy',
            },
            {
                title: 'Term & Conditions',
            },
        ]
    },
]

const Footer = () => {
    return (
        <div className="w-full md:pt-25 pt-12.5 px-4 xl:px-0 bg-[#111d15]">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="pb-16">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-5">
                            <Link href={'/'}>
                                <Image src={footerLogo} width={203} height={50} alt="Footer Logo" />
                            </Link>
                            <p className="text-base text-white font-normal leading-[160%] mt-6">Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.</p>
                        </div>

                        <div className="col-span-12 md:col-span-7">
                            <div className="flex sm:items-center flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap justify-between xl:gap-0 gap-8">
                                {/* FOOTER MENUS  */}
                                {
                                    footerMenus?.map((menu, index) => (
                                        <div key={index}>
                                            <h4 className="text-xl text-white font-bold capitalize mb-8">{menu?.title}</h4>
                                            <ul className="flex flex-col gap-5">
                                                {
                                                    menu?.menus?.map((item, index) => (
                                                        <li key={index}><Link href={item?.link ? item?.link : "#"} className="text-base text-white font-medium capitalize">{item?.title}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }


                                <div className="max-w-72.75 w-full">
                                    <h4 className="text-xl text-white font-bold capitalize mb-8">Newsletter</h4>
                                    <form className="w-full flex flex-col gap-6">
                                        <input type="email" name="email" id="email" className="w-full h-10.75 rounded-md outline-0 pl-2.5 py-2 border border-[#808080] text-base text-[#9e9e9e] font-normal" placeholder="Email Goes here" />
                                        <button className="max-w-23.75 w-full h-10.75 bg-[#36b864] rounded-md outline-none cursor-pointer text-white text-base font-medium">send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-t-[#d9d9d9] pt-6 pb-5 flex items-center justify-center">
                    <p className="text-base text-white font-normal">{new Date().getFullYear()} "Procleaning" All Rights Received</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
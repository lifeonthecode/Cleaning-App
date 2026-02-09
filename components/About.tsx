import { uiImages } from "@/constants/images";
import { Check } from "lucide-react";
import Image from "next/image";



const aboutInfo: string[] = [
    'Vetted professionals',
    'Affordable Prices',
    'Next day availability',
    'Best Quality',
    'Standard cleaning tasks',
    'Affordable Prices',
]

const About = () => {
    return (
        <div className="w-full flex justify-center bg-white px-4 xl:px-0 pt-0 pb-10 md:pt-18.75 md:pb-18.75">
            <div className="max-w-392.5 w-full mx-auto">
                <div className="w-full flex flex-col-reverse md:flex-row xl:items-center justify-between gap-10">
                    {/* LEFT SIDE WRAPPER  */}
                    <div className="md:max-w-133.5 w-full min-h-105.5 h-full relative flex flex-col md:flex-row gap-8 md:gap-0">
                        <div className="md:max-w-91.5 w-full h-94.5 border-t-10 border-l-10 border-t-[#36b864] border-l-[#36b864] rounded-[20px]">
                            <Image src={uiImages.ourCompany1} className="w-full h-full rounded-[20px] object-cover object-center" width={365} height={394} alt="Our Company 1" />
                        </div>
                        <div className="hidden md:block absolute right-0 -bottom-10 w-57.75  h-66.5 border-10 border-white rounded-[20px] overflow-hidden">
                            <Image src={uiImages.ourCompany2} className="rounded-[20px] w-full h-full object-cover transform md:scale-125" width={230} height={265} alt="Affordable Image 2" />
                        </div>
                    </div>

                    {/* RIGHT SIDE WRAPPER  */}
                    <div className="max-w-131.5 w-full">
                        <h3 className="text-3xl md:text-[44px] text-[#111d15] font-semibold mb-4 leading-[120%]">Welcome To Our Pro-cleaning Company!</h3>
                        <p className="text-base text-[#666666] font-normal mb-8 leading-[150%]">We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses. Satisfaction guaranteed!'</p>
                        <div className="flex flex-wrap gap-5 w-full">
                            {
                                aboutInfo?.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between gap-10">
                                        <button className="flex items-center gap-2 p-2.5 bg-[#f5f4f4] rounded-sm text-base text-[#111d15] font-semibold capitalize">
                                            <span className="w-4 h-4 rounded-full text-sm text-white bg-[#36b864] flex items-center justify-center">
                                                <Check size={'0.8rem'} />
                                            </span> {item}</button>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex items-center gap-6 mt-10">
                            <button className="py-4 px-8 bg-[#36b864] rounded-md text-white text-base font-semibold capitalize cursor-pointer">Book Now</button>

                            <button className="py-4 px-8 rounded-md border border-[#666666] text-base text-[#111d15] font-semibold capitalize cursor-pointer">Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
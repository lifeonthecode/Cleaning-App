import { uiImages } from "@/constants/images";
import Image from "next/image";

const Affordable = () => {
    return (
        <div className="w-full flex items-center justify-center bg-white py-10 md:py-18.75 px-4 xl:px-0">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-10">
                    {/* LEFT SIDE WRAPPER  */}
                    <div className="md:max-w-131.75 w-full">
                        <h5 className="text-base text-[#111d15] font-normal capitalize leading-[120%] mb-3">Affordable cleaning solutions</h5>
                        <h3 className="text-3xl  md:text-[44px] text-[#111d15] font-semibold font-outfit capitalize mb-6 leading-[120%]">High-Quality and Friendly services at Fair Prices</h3>
                        <p className="text-xl text-[#666666] font-normal mb-8">We provide comprehensive cleaning services tailored to your needs. From residential cleaning services.</p>

                        <button className="px-9 py-4 bg-[#36b864] text-base text-white font-medium rounded-md cursor-pointer">Get a quote</button>
                    </div>


                    {/* RIGHT SIDE WRAPPER  */}
                    <div className="md:max-w-119.5 w-full min-h-105.5 h-full relative flex flex-col md:flex-row md:justify-end gap-8 md:gap-0">
                        <div className="md:max-w-94.5 w-full h-94.5 border-t-10 border-r-10 border-t-[#36b864] border-r-[#36b864] rounded-[20px]">
                            <Image src={uiImages.affordable1} className="w-full h-full object-cover rounded-[20px]" width={378} height={379} alt="Affordable Image 1" />
                        </div>

                        <div className="hidden md:block absolute left-0 -bottom-10 w-57.75  h-66.5 border-10 border-white rounded-[20px] overflow-hidden">
                            <Image src={uiImages.affordable2} className="rounded-[20px] w-full h-full object-cover transform md:scale-125" width={231} height={265} alt="Affordable Image 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affordable;
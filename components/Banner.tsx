

const Banner = () => {
    return (
        <div id="home" className="w-full min-h-146.25 h-full flex items-center px-4 xl:px-0 justify-center bg-(image:--bg-banner) bg-cover bg-center bg-no-repeat lg:py-26 ">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="w-full flex flex-col max-w-157.5">
                    <h5 className="text-xl text-[#111d15] font-normal leading-[120%] mb-3">Quality cleaning at a fair price</h5>
                    <h3 className="text-3xl md:text-[52px] text-[#111d15] font-bold capitalize mb-6 leading-[114%]">Specialized, efficient, and thorough cleaning services</h3>
                    <p className="text-lg text-[#666666] font-normal leading-7.5 mb-10 max-w-135.75 w-full">We provide performing cleaning tasks using the least amount of time, energy, and money</p>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button className="py-4 px-8 bg-[#36b864] rounded-md text-white text-base font-semibold capitalize cursor-pointer">get start now</button>
                        <button className="py-4 px-8 rounded-md border border-[#666666] text-base text-[#111d15] font-semibold capitalize cursor-pointer">view all services</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
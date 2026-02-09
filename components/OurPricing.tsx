'use client'
import { useState } from "react";

interface PriceItem {
    package: string,
    price: number,
    packageInfo: string[],
    status: string,
}

const prices: PriceItem[] = [
    {
        package: 'Basic package',
        price: 59,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'monthly'
    },
    {
        package: 'enterprise package',
        price: 69,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'monthly'
    },
    {
        package: 'premium package',
        price: 99,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'monthly'
    },


    // YEARLY 
    
    {
        package: 'Basic package',
        price: 99,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'yearly'
    },
    {
        package: 'enterprise package',
        price: 169,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'yearly'
    },
    {
        package: 'premium package',
        price: 199,
        packageInfo: [
            'All services in the Basic Plan',
            'Detail dusting',
            'Wiping down of kitchen appt',
            'Cleaning inside the microwave',
            'Changing bed linens',
            'Spot cleaning walls and colors',
        ],
        status: 'yearly'
    },


    
]

const OurPricing = () => {
    const [activePrices, setPrices] = useState<string>('monthly');

    const filterPricing = prices.filter((item) => item.status === activePrices);

    return (
        <div className="w-full min-h-260.25 h-full bg-white relative before:content-[''] before:absolute before:top-0 before:left-0 before:bg-[url('/images/bg-plan.png')] before:w-full before:h-[66.6%] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[66.6%] after:bg-[#36b864] after:opacity-93 px-4 xl:px-0 md:pt-18.75 md:pb-23.25 pb-10 pt-10">
            <div className="relative z-40">

                <div className="max-w-292.5 w-full mx-auto">

                    {/* SECTION HEADING  */}
                    <div className="pb-6 flex flex-col items-center mx-auto max-w-137.75 w-full text-center gap-4">
                        <h5 className="text-xl text-white font-medium capitalize leading-[120%]">our pricing</h5>
                        <h2 className="text-3xl md:text-[44px] text-white font-medium leading-[120%]">Choose From Our Lowest Plans and Prices</h2>
                    </div>

                    {/* PRICING WRAPPER */}
                    <div className="w-full">
                        <div className="w-full flex items-center justify-center mb-10">
                            <div className="flex items-center justify-center gap-4 bg-[#f4f5f8] p-2 rounded-[200px]">

                                <button
                                    onClick={() => setPrices('monthly')}
                                    className={`py-2 px-6  rounded-[200px] shadow-md shadow-[#000000] cursor-pointer text-xl font-medium capitalize transition-colors duration-75 ${activePrices === 'monthly' ? 'bg-[#36b864] text-white' : 'bg-white text-[#111d15]'}`}>monthly</button>

                                <button
                                    onClick={() => setPrices('yearly')}
                                    className={`py-2 px-6  rounded-[200px] shadow-md shadow-[#000000] cursor-pointer text-xl font-medium capitalize transition-colors duration-75 ${activePrices === 'yearly' ? 'bg-[#36b864] text-white' : 'bg-white text-[#111d15]'}`}>yearly</button>
                            </div>

                        </div>

                        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
                            {
                                filterPricing?.map((item, index) => (
                                    <div key={index} className={`md:max-w-92.5 w-full min-h-151.25 h-full bg-white rounded-[20px] py-7 px-4 lg:px-9 transition-all duration-75 hover:shadow shadow md:shadow-none ${index == 1 && 'shadow'}`}>
                                        <h4 className="text-lg md:text-xl text-[#111d15] font-medium uppercase mb-6 text-center">{item?.package}</h4>
                                        <button className="px-6 lg:px-10 py-5 w-full bg-[#36b864] rounded-xl text-white text-xl xl:text-3xl font-bold cursor-pointer mb-9"><span className="text-base">$</span>{item?.price}.00/ <span className="text-base capitalize">{item?.status}</span></button>
                                        {/* LIST WRAPPER  */}
                                        <ul className="flex flex-col mb-9">
                                            {
                                                item?.packageInfo?.map((info, index) => (
                                                    <li key={index} className="text-base text-[#666666] font-normal leading-[300%]">{info}</li>
                                                ))
                                            }
                                        </ul>

                                        {/* BOOK BUTTON  */}
                                        <button className={`w-full py-5 rounded-md text-base  font-normal capitalize cursor-pointer ${index === 1 ? 'bg-[#36b864] text-white border-0' : 'bg-transparent text-[#111d15] border border-[#666666]'}`}>book now</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurPricing;
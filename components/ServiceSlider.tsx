'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import { icons } from '@/constants/images';
import { ArrowLeft, ArrowUp } from 'lucide-react';

interface SlideItem {
    image: string,
    title: string,
    description: string,
}

interface Props {
    slides: SlideItem[]
}

const ServiceSlider: React.FC<Props> = ({ slides }) => {

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <div className='w-full relative'>


            <button
                className='absolute top-1/2 hidden md:left-0 xl:-left-14 transform translate-y-1/2 w-13 h-13 rounded-full bg-[#36b864] z-30 md:flex items-center justify-center cursor-pointer'
                ref={prevRef}
            >
                <ArrowLeft />
            </button>
            <button
                className='absolute top-1/2 hidden md:right-5 xl:-right-14 transform translate-y-1/2 w-13 h-13 rounded-full bg-[#36b864] z-30 md:flex items-center justify-center cursor-pointer'
                ref={nextRef}
            >
                <Image src={icons.arrowRight} width={23} height={23} alt='arrow-right' />
            </button>


            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onBeforeInit={(swiper) => {
                    if (typeof swiper.params.navigation !== "boolean") {
                        swiper.params.navigation!.prevEl = prevRef.current;
                        swiper.params.navigation!.nextEl = nextRef.current;
                    }
                }}

                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}

                className="service-swiper"
            >

                {
                    slides?.map((item, index) => {
                        const isMiddle = index % 3 === 1;
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col gap-4'>
                                    <div className='md:max-w-92.5 w-full min-h-65.5 h-full'>
                                        <Image src={item?.image} width={370} height={262} className='w-full h-full object-cover rounded-4xl' alt={item?.title} />
                                    </div>
                                    <h3 className='text-2xl text-[#111d15] font-semibold capitalize'>{item?.title}</h3>
                                    <p className='text-base text-[#666666] font-normal'>{item?.description}</p>
                                    <button className={`px-5 py-3 rounded-md border border-[#666666] text-[#111d15] text-base font-normal capitalize flex items-center justify-between  max-w-37.5 w-full cursor-pointer ${isMiddle && 'bg-[#36b864] border-0 text-white'}`}>book now <ArrowUp /></button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default ServiceSlider;
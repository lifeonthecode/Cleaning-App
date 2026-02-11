'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { icons, uiImages } from '@/constants/images';

interface Slide {
    image: string,
    name: string,
    status: string,
    rating: number,
    description: string,
}

const slides: Slide[] = [
    {
        image: uiImages.feedback,
        name: 'Robert Fox',
        status: 'Business Man',
        rating: 5,
        description: 'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service'
    },
    {
        image: uiImages.feedback,
        name: 'Robert Fox',
        status: 'Business Man',
        rating: 5,
        description: 'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service'
    },
    {
        image: uiImages.feedback,
        name: 'Robert Fox',
        status: 'Business Man',
        rating: 5,
        description: 'Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service'
    },
]

const Feedback = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <div className="w-full px-4 xl:px-4 md:pt-18.5  pb-10 md:pb-18.5 flex items-center justify-center bg-white">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6 xl:gap-10">
                    {/* LEFT SIDE WRAPPER  */}
                    <div className="max-w-125 w-full">
                        <h2 className="text-3xl lg:text-[44px] text-[#111d15] font-semibold capitalize mb-6">Feedback About Their Experience With Us</h2>
                        <p className="text-base text-[#666666] font-normal mb-9">Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their lives and homes.</p>

                        {/* BUTTONS  */}
                        <div className='flex items-center gap-3'>
                            <button
                                className='w-14 h-14 rounded-lg bg-[#36b864] z-30 flex items-center justify-center cursor-pointer'
                                ref={prevRef}
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                className='w-14 h-14 rounded-lg  z-30 flex items-center justify-center cursor-pointer border transition-all duration-75 border-[#36b864] hover:bg-[#36b864] hover:text-white text-[#36b864] '
                                ref={nextRef}
                            >
                                <ArrowRight/>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE WRAPPER  */}
                    <div className=' md:max-w-125 lg:max-w-150 w-full'>
                        <Swiper

                            slidesPerView={1}
                            spaceBetween={24}

                            loop
                            speed={800}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}

                            modules={[Autoplay, Pagination, Navigation]}

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
                            className='swiper feedback-slider'
                        >
                            {
                                slides?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full sm:h-71 border-t-10 border-r-10 border-t-[#36b864] border-r-[#36b864] rounded-[20px] flex flex-col sm:flex-row item-center gap-6 p-5'>
                                            <div className='md:w-42.5 h-61 '>
                                                <Image src={item?.image} className='w-full h-full rounded-lg object-cover md:object-containt' width={170} height={244} alt={item?.name} />
                                            </div>
                                            <div className='md:max-w-91.5 w-full'>
                                                <div className="relative">
                                                    <h4 className='text-xl text-[#111d15] font-medium capitalize mb-3'>{item?.name}</h4>
                                                    <h6 className='text-base text-[#666666] font-normal capitalize mb-3'>{item?.status}</h6>

                                                    <button className='absolute right-0 bottom-0 w-17.5 h-17.5 bg-[#36b864] rounded-md hidden sm:flex items-center justify-center'><Image  src={icons.comma} width={60} height={60} alt="Comma" /></button>
                                                </div>
                                                {/* RATING  */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    {
                                                        [...Array(item?.rating)]?.map((_, index) => (
                                                            <span key={index}><Star color='#ff9800' size={'1rem'} /></span>
                                                        ))
                                                    }
                                                </div>
                                                <p className="text-base text-[#666666] font-normal">{item?.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
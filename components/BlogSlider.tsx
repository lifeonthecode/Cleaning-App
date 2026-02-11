'use client'
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

interface SlideItem {
    image: string,
    title: string,
    description: string,
    published: string,
}

interface Props {
    slides: SlideItem[],
}

const BlogSlider: React.FC<Props> = ({ slides }) => {
    return (
        <div>
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

                modules={[Pagination, Autoplay]}

                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    540: { slidesPerView: 1 },
                }}
                className='swiper blog-slider'
            >
                {
                    slides?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='shadow-md w-full rounded-[20px]'>
                                <div className="w-full h-75">
                                    <Image src={item?.image} className='w-full h-full object-bottom object-cover rounded-t-[20px]' width={370} height={300} alt={item?.title} />
                                </div>
                                <div className='py-6 px-5 flex flex-col text-center'>
                                    <h5 className="text-sm text-[#666666] font-normal uppercase mb-3">{item?.published}</h5>
                                    <h1 className='text-xl text-[#111d15] font-semibold capitalize mb-4'>{item?.title}</h1>
                                    <p className='text-base text-[#666666] font-light leading-[150%] mb-4'>{
                                        item?.description.slice(0, 70)
                                    }

                                    {
                                        item?.description.length > 70 && '...'
                                    }

                                    </p>

                                    <button className={`text-base cursor-pointer font-medium capitalize ${index % 2 === 0 ? 'bg-[#36b864] py-5 rounded-2xl text-white' : 'text-[#666666] underline'}`}>read more</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    );
};

export default BlogSlider;
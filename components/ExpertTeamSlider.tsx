'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Star} from 'lucide-react';
import Link from 'next/link';


interface SocialIcon {
    icon: React.ReactNode,
}

interface SlideItem {
    image: string,
    name: string,
    description: string,
    rating: number,
    social_icons: SocialIcon[],
}

interface Props {
    slides: SlideItem[],
}


const ExpertTeamSlider: React.FC<Props> = ({ slides }) => {
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
                pagination={{
                    type: 'progressbar',
                }}

                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    540: { slidesPerView: 1 },
                }}
                className='swiper expert-team-slider'
            >
                {
                    slides?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='shadow-md w-full rounded-[20px]'>
                                <div className="w-full h-75 overflow-hidden">
                                    <Image src={item?.image} className='w-full h-full object-bottom object-contain transform scale-110' width={370} height={300} alt={item?.name} />
                                </div>
                                <div className='py-6 px-5 flex flex-col gap-4'>
                                    <h1 className='text-2xl text-[#111d15] font-semibold capitalize'>{item?.name}</h1>
                                    {/* RATING  */}
                                    <div className="flex items-center gap-1.5">
                                        {
                                            [...Array(item?.rating)]?.map((_, index) => (
                                                <span key={index}><Star color='#ff9800' size={'1rem'} /></span>
                                            ))
                                        }
                                    </div>
                                    <p className='text-base text-[#666666] font-normal leading-[150%]'>{item?.description}</p>
                                    {/* SOCIAL ICON  */}
                                    <div className="flex items-center gap-4">
                                        {
                                            item?.social_icons?.map((social, index) => (
                                                <Link href="#" key={index} className='w-10 h-10 flex items-center justify-center transition-all duration-75 hover:bg-[#36b864] hover:text-white text-black text-xl rounded-full'>{social?.icon}</Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    );
};

export default ExpertTeamSlider;
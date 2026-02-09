import { uiImages } from "@/constants/images";
import ServiceSlider from "./ServiceSlider";
import SectionHeading from "./SectionHeading";


const slides = [
    {
        image: uiImages.services1,
        title: 'Office Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
    {
        image: uiImages.services2,
        title: 'Spring Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
    {
        image: uiImages.services3,
        title: 'House Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
    {
        image: uiImages.services1,
        title: 'Office Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
    {
        image: uiImages.services2,
        title: 'Spring Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
    {
        image: uiImages.services3,
        title: 'House Cleaning',
        description: "While we cna customize your cleaning plan to suit your needs, mos clients schedule regular cleaning services:"
    },
]


const Service = () => {
    return (
        <div id="service" className="w-full flex items-center justify-center px-4 xl:px-0 pt-10 md:pt-37.5 pb-0 md:pb-18.75 bg-white">
            <div className="max-w-292.5 w-full mx-auto">

                {/* SECTION HEADING  */}
                <div className="pb-10">
                    <SectionHeading
                        title="We Always Provide The Best Service"
                        subtitle="Services"
                        description="While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:"
                    />
                </div>

                {/* SERVICE SLIDER COMPONENT  */}
                <div>
                    <ServiceSlider slides={slides} />
                </div>
            </div>
        </div>
    );
};

export default Service;
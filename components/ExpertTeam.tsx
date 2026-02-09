import { uiImages } from "@/constants/images";
import SectionHeading from "./SectionHeading";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ExpertTeamSlider from "./ExpertTeamSlider";


const slides = [
    {
        image: uiImages.expertTeam1,
        name: 'Erick Reynolds',
        rating: 4,
        description: 'He is expert cleaning staff member Who provides thorough cleaning with precision.',
        social_icons: [
            {
                icon: <Facebook />
            },
            {
                icon: <Twitter />
            },
            {
                icon: <Instagram />
            },
            {
                icon: <Linkedin />
            },
        ]
    },
    {
        image: uiImages.expertTeam2,
        name: 'Erick Reynolds',
        rating: 5,
        description: 'He is expert cleaning staff member Who provides thorough cleaning with precision.',
        social_icons: [
            {
                icon: <Facebook  />
            },
            {
                icon: <Twitter />
            },
            {
                icon: <Instagram />
            },
            {
                icon: <Linkedin />
            },
        ]
    },
    {
        image: uiImages.expertTeam4,
        name: 'Erick Reynolds',
        rating: 5,
        description: 'He is expert cleaning staff member Who provides thorough cleaning with precision.',
        social_icons: [
            {
                icon: <Facebook />
            },
            {
                icon: <Twitter />
            },
            {
                icon: <Instagram />
            },
            {
                icon: <Linkedin />
            },
        ]
    },
    {
        image: uiImages.expertTeam1,
        name: 'Erick Reynolds',
        rating: 5,
        description: 'He is expert cleaning staff member Who provides thorough cleaning with precision.',
        social_icons: [
            {
                icon: <Facebook />,
                // you can provide social link 
            },
            {
                icon: <Twitter />
                // you can provide social link 
            },
            {
                icon: <Instagram />
                // you can provide social link 
            },
            {
                icon: <Linkedin />
                // you can provide social link 
            },
        ]
    },
]

const ExpertTeam = () => {
    return (
        <div className="w-full flex items-center justify-center bg-white px-4 xl:px-0 py-10 md:py-18.75">
            <div className="max-w-292.5 w-full mx-auto">
                {/* SECTION HEADING  */}
                <div className="pb-10 w-full">
                    <SectionHeading
                        titleWidth={'max-w-[610px] w-full'}
                        title="effective Cleaning Requires and Expert Cleaning Team"
                        subtitle="Expert Team"
                        description="We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space."
                    />
                </div>



                {/* EXPERT TEAM SLIDES  */}
                <div>
                    <ExpertTeamSlider slides={slides} />
                </div>
            </div>
        </div>
    );
};

export default ExpertTeam;
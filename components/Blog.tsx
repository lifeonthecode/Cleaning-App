import { uiImages } from "@/constants/images";
import BlogSlider from "./BlogSlider";
import SectionHeading from "./SectionHeading";

const slides = [
    {
        image: uiImages.blog1,
        title: 'Eco-Friendly Cleaning: How We Keep Your Home Green',
        published: 'John helton Jan, 2026',
        description: 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products',
    },
    {
        image: uiImages.blog2,
        title: 'How to Maintain a Clean Home Between Professional Visits',
        published: 'John helton Jan, 2026',
        description: 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips',
    },
    {
        image: uiImages.blog3,
        title: 'The Benefits of Regular Professional Cleaning',
        published: 'John helton Jan, 2026',
        description: 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air',
    },
    {
        image: uiImages.blog1,
        title: 'Eco-Friendly Cleaning: How We Keep Your Home Green',
        published: 'John helton Jan, 2026',
        description: 'Learn about our commitment to eco-friendly practices. We share the eco-conscious products',
    },
    {
        image: uiImages.blog2,
        title: 'How to Maintain a Clean Home Between Professional Visits',
        published: 'John helton Jan, 2026',
        description: 'Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips',
    },
    {
        image: uiImages.blog3,
        title: 'The Benefits of Regular Professional Cleaning',
        published: 'John helton Jan, 2026',
        description: 'Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air',
    }
]

const Blog = () => {
    return (
        <div id="blog" className="w-full px-4 xl:px-0 md:pt-18.5 md:pb-18.5 pt-0 bg-white max-h-224.75 h-full">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="pb-10 mb-10 border-b-4 border-b-[#36b864] w-full">
                    <SectionHeading
                        titleWidth={'max-w-[570px] w-full'}
                        title="Stay Updated wit Our Tips & Service News!"
                        subtitle="Our Blog"
                        description="We have professional expert cleaning staff ensuring top-notch cleanliness and hygiene for your space."
                    />
                </div>

                {/* BLOG SLIDER  */}
                <div>
                    <BlogSlider slides={slides} />
                </div>

            </div>
        </div>
    );
};

export default Blog;
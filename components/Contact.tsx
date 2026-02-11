'use client'
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "react-toastify";

interface Props {
    contact_name: string,
    contact: string,
    icon: React.ReactNode,
}

const contactInfos: Props[] = [
    {
        contact_name: 'Call us',
        contact: "+(08) 255 201 888",
        icon: <Phone />
    },
    {
        contact_name: 'Email Now',
        contact: "hollo@procleaning.com",
        icon: <Mail />
    },
    {
        contact_name: 'Address',
        contact: "7510, Brand Tower, New York, USA",
        icon: <MapPin />
    },
];




const Contact = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            const access_token = process.env.NEXT_PUBLIC_ACCESS_KEY;
            const web3FormsUrl = process.env.NEXT_PUBLIC_WEB3FORMS_URL!;
            const response = await axios.post(web3FormsUrl, {
                access_key: access_token,
                ...data,
            });
            if (response.data.success) {
                toast.success('Form submitted successfully!');
                // FORM CLEAR 
                form.reset();
            }else {
                toast.error(response.data.message || "Submission failed!")
            }
        } catch (er: any) {
            const errorMessage = er.response?.data?.message || "Something went wrong";
            toast.error('Submission Error:', errorMessage);
        }
    }

    return (
        <div id="contact" className="w-full bg-white flex items-center justify-center px-4 xl-px-0 pt-10 pb-10 md:pt-18.5 md:pb-18.5">
            <div className="max-w-292.5 w-full mx-auto">
                <div className="flex flex-col md:flex-row  justify-between gap-8">
                    {/* LEFT SIDE WRAPPER  */}
                    <div className="flex flex-col justify-end max-w-150 w-full">
                        <h1 className="text-3xl md:text-[40px] font-medium capitalize text-[#111d15] mb-10">Find us</h1>
                        <div className="flex flex-col gap-8">
                            {
                                contactInfos?.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-center bg-[#fbfbfb] p-5 rounded-xl border border-[#f3f3f3]">
                                        <button className="w-13.5 h-13.5 rounded-full bg-[#36b864] flex items-center justify-center text-2xl text-white" >{item?.icon}</button>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-xl text-[#111d15] font-semibold capitalize">{item?.contact_name}</h4>
                                            <span className="text-base text-[#666666] font-normal">{item?.contact}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* RIGHT SIDE WRAPPER  */}
                    <div className="max-w-125 w-full">
                        <div className="mb-10">
                            <h5 className="text-base text-[#111d15] font-normal capitalize mb-2">contact info</h5>
                            <h3 className="text-4xl text-[#111d15] font-semibold leading-[120%] capitalize mb-3">Keep In Touch</h3>
                            <p className="text-base text-[#666666] font-normal">We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner</p>
                        </div>

                        {/* FORM CONTAINER  */}
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">

                            <input type="text" name="name" id="name" className="w-full h-14 bg-white border border-[#f3f3f3] rounded-sm pl-5 outline-0 text-base text-[#111d15] font-normal" placeholder="Name" />
                            
                            <input type="email" name="email" id="email" className="w-full h-14 bg-white border border-[#f3f3f3] rounded-sm pl-5 outline-0 text-base text-[#111d15] font-normal" placeholder="Email" />
                            <textarea name="message" id="message" className="w-full h-25 bg-white border border-[#f3f3f3] rounded-sm pt-4 pl-5 outline-0 text-base text-[#111d15] font-normal" placeholder="Message"></textarea>
                            <button type="submit" className="max-w-38.75 w-full h-10.5 bg-[#36b864] rounded-md py-3 px-6 text-white text-base font-outfit font-medium capitalize cursor-pointer">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
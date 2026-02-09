
interface Props {
    title: string,
    subtitle: string,
    description: string,
    titleWidth?: string,
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, description, titleWidth }) => {
    return (
        <div className="w-full flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8">
            <div className={`${titleWidth ? titleWidth : 'max-w-134'}`}>

                {title && <h2 className="w-full text-3xl md:text-[44px] text-[#111d15] font-semibold capitalize text-center md:text-left">{title}</h2>}
            </div>

            {
                (subtitle && description) &&
                <div className="max-w-108.25 w-full flex items-center md:items-start flex-col gap-3">
                    <h5 className="text-xl text-[#111d15] font-semibold capitalize">{subtitle}</h5>
                    <p className="text-base text-[#666666] font-normal leading-[150%]">{description}</p>
                </div>
            }
        </div>
    );
};

export default SectionHeading;
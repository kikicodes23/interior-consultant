import { FaLongArrowAltRight } from "react-icons/fa";
import interiorDesign from "@/public/img/interiorDesign.png";
import profilePicture from "@/public/img/profilePicture.png";

export function Body() {
    return (
        <article className="px-3 py-[18px] sm:px-[77px] sm:py-14 md:py-[149px] flex flex-col md:flex-row md:justify-between md:items-center w-full">
            <section className="flex flex-col gap-[25px] md:w-1/3">
                <h1 className="font-lora text-4xl xl:text-5xl font-medium xl:w-[365px]">Modern interior</h1>
                <p className="text-sm xl:text-2xl font-normal w-[250px] xl:w-[380px]">A full-Service residential & commercial interior design and staging company offering professional organizing & <br/> eco-services. 
                </p>

                <button className="flex items-center gap-3 group">
                    <p className="text-sm md:text-lg font-bold">Read more</p>
                    <FaLongArrowAltRight className="group-hover:animate-spin group-hover:animate-once"/>
                </button>
                
            </section>

            <section className="pt-8">
                <div className="relative">

                    <div className="max-w-[737px] object-cover">
                        <img src={interiorDesign.src} alt="interior design" className="h-full w-full object-cover"/>
                    </div>

                    <div className="w-[300px] h-[138px] md:w-[410px] md:h-[189px] px-[19px] drop-shadow-2xl bg-[#181719]
                    absolute -bottom-[82px] right-[32px]">
                        
                        <div className="flex items-center gap-[14px] h-1/2">
                            <img src={profilePicture.src} alt="profile picture" className="rounded-full w-[37px] h-[37px]"/>
                            <div className="flex flex-col">
                                <p className="text-xs font-medium">Aliza Webber</p>
                                <p className="text-[10px] font-medium text-[#828282]">Interior Designer</p>
                            </div>
                        </div>
                        
                        <div className="h-1/2">
                            <p className="font-lora text-lg font-bold w-[210px]">Designed in 2020 by Aliza Webber</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}
'use client'

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { PartcilesComponent } from "@/components/particles";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  return (
    <main>
      <PartcilesComponent />
      <div className="text-white">
        <section>
          <div className="flex flex-wrap items-center max-w-7xl mx-auto px-8 lg:px-24 md:px-16 pt-16 pb-8 lg:pt-36">
            <div className="flex flex-wrap justify-center py-8 w-full md:w-1/3 md:pr-16 relative">
              <div className="relative h-96 w-72">
                <div className="bg-[#054A45] p-4 h-full rounded-xl relative"></div> 
                <div className="border border-white h-full rounded-xl absolute inset-0 rotate-12"></div>
                <Image
                  src={'/img/foto_diri.png'}
                  width={300}
                  height={300}
                  className="absolute top-0 left-0 w-full h-96" alt={"foto diri"}/> 
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap flex-col gap-6 mb-8">
                <h4 className="text-[#054A45] font-bold text-2xl">Hi, I&apos;m Shyra Athaya</h4>
                <h1 className="font-bold text-3xl md:text-4xl">UI/UX Designer</h1>
                <p className="text-justify">Highly motivated Software Engineering student with a strong foundation in user research and analyzing systems. I have experience in UI/UX designer and project management. Additionally, I possess strong communication, negotiation, teamwork skills, with a flexible mindset to adapt to any working environment, and also has experience in organizations.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/shyrath3104/" target="_blank">
                  <FaLinkedin className="text-4xl"/>
                </a>
                <a href="https://github.com/J0key" target="_blank">
                  <FaGithub className="text-4xl"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-8 lg:px-24 md:px-16 py-16 lg:py-24">
            <div className="flex flex-wrap justify-between w-full mb-2 md:mb-6">
              <h1 className="font-bold text-3xl md:text-4xl">Experiences</h1>
              <Link href={'/experience'} className="bg-[#054A45] rounded-full p-2 hover:bg-[#04423D]"><IoIosArrowForward className="text-xl md:text-2xl font-bold" /></Link>
            </div>
            <p className="mb-12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, doloremque.</p>
            <div data-aos="fade-up-right" data-aos-duration='800' className="flex flex-wrap flex-col gap-2 md:gap-4 mb-8 md:mb-6">
              <h4 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#054A45] to-white w-fit bg-clip-text text-transparent">UI/UX Designer</h4>            
              <h2 className="font-bold text-md md:text-xl">December 2024 - December 2026</h2>
              <div className="p-8 border border-[#054A45] bg-[#1e1e1e] max-w-lg rounded-lg hover:-translate-y-1 transition shadow-md shadow-slate-800 hover:shadow-xl hover:shadow-slate-800">
                <p className="text-justify">Highly motivated Software Engineering student with a strong foundation in user research and analyzing systems. I have</p>
              </div>
            </div>
            <div data-aos="fade-up-left" data-aos-duration='800' className="flex flex-wrap flex-col gap-2 md:gap-4 items-end mb-8 md:mb-6">
              <h4 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#054A45] to-white w-fit bg-clip-text text-transparent">UI/UX Designer</h4>            
              <h2 className="font-bold text-md md:text-xl">December 2024 - December 2026</h2>
              <div className="p-8 border border-[#054A45] bg-[#1e1e1e] max-w-lg rounded-lg hover:-translate-y-1 transition shadow-md shadow-slate-800 hover:shadow-xl hover:shadow-slate-800">
                <p className="text-justify">Highly motivated Software Engineering student with a strong foundation in user research and analyzing systems. I have</p>
              </div>
            </div>
            <div data-aos="fade-up-right" data-aos-duration='800' className="flex flex-wrap flex-col gap-2 md:gap-4">
              <h4 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-[#054A45] to-white w-fit bg-clip-text text-transparent">UI/UX Designer</h4>            
              <h2 className="font-bold text-md md:text-xl">December 2024 - December 2026</h2>
              <div className="p-8 border border-[#054A45] bg-[#1e1e1e] max-w-lg rounded-lg hover:-translate-y-1 transition shadow-md shadow-slate-800 hover:shadow-xl hover:shadow-slate-800">
                <p className="text-justify">Highly motivated Software Engineering student with a strong foundation in user research and analyzing systems. I have</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

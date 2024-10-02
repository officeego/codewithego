import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lgl:flex-row lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Garden House - (2017 - 2018)"
            result="Australia"
            des="Built a beautiful and scalable SPA using Material-UI, Nextjs and React.js, intergreted support system, identify minimal viable product features."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Royal Motion - (2019 - 2019)"
            result="MALAYSIA"
            des="I specialize in crafting dynamic and visually appealing websites tailored to meet the unique needs of my clients, ensuring a seamless and engaging online presence."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Lemon Fruits - (2021 - 2022)"
            result="GREECE"
            des="Intergreting support system, understanding of existing architecture and works on minor bugs, use of API Request between the client and the server!"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Designer"
            subTitle="Rainbow Gym Center (2021 - 2022)"
            result="DHAKA"
            des="Oversaw design errors and upgrades development, enable testing methods of prototypes to be used in development. Built modern website with the ReactJS!"
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Matrix (2021 - 2022)"
            result="CANADA"
            des="Ensured the uninterrupted flow of business-critical operations. On-time error analysis reduced downtime by 15% and costs of warranty by up to 25%!!"
          />
          <ResumeCard
            title="Project Coordinator"
            subTitle="Glocal (2018 - 2019)"
            result="TURKEY"
            des="Managing leading team of intense coordination with manfacturing plant in my local erea, Built a mock customer service web app for a Scholar project!!!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

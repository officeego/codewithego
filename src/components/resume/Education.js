import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold text-violet-950">📖 Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer - Law"
            subTitle="University of B'da (2016 - 2019)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Frontend Development Certificate"
            subTitle="Altcademy - Udemy (2018 - 2019)"
            result="4.75/5"
            des="Comprehensive training in frontend development, equipping learners with the skills and knowledge needed to excel in creating interactive and user-friendly web interfaces..."
          />
          <ResumeCard
            title="Full-stack Development Certificate"
            subTitle="Nucamp (2020 - 2021)"
            result="5.00/5"
            des="Results-driven professional with comprehensive education in MERN (MongoDB, Express.js, React.js, Node.js) stack development..."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">👏 Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="Agilent - (2021 - Present)"
            result="Santa Clara"
            des="Working on a team responsible for developing new features, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Strix Digital - (2020 - 2021)"
            result="MALAYSIA"
            des=" Worked on a team responsible for developing E-commerce  app, including implementing new features such as product recommendations and user reviews!"
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Eagle Tavern - (2020 - 2021)"
            result="Greece"
            des="Worked on a team responsible for developing a new Web App features that allowed users to create and share short-form video content, including designing and implementing a new user interface!"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-col lgl:flex-row lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2020</p>
          <h2 className="text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Development Certificate"
            subTitle="Altcademy - Udemy"
            result="Success"
            des="Comprehensive training in frontend development, equipping learners with the skills and knowledge needed to excel in creating interactive and user-friendly web interfaces."
          />
          <ResumeCard
            title="Full-stack Development Certificate"
            subTitle="Nucamp"
            result="Success"
            des="Results-driven professional with comprehensive education in MERN (MongoDB, Express.js, React.js, Node.js) stack development!"
          />
          <ResumeCard
            title="Software Development Certificate"
            subTitle="Thinkful"
            result="Success"
            des="Remote web development program, focused on learning HTML, CSS, Javascript, SQL, and associated frameworks (such as Node.js, React, jQuery, and PostgreSQL)!"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer."
            subTitle="NKL - Coorperation - (2020 - 2021)"
            result="Success"
            des="Built a beautiful and scalable SPA using Material-UI, Nextjs and React.js, intergreted support system, identify minimal viable product features..."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Eagle - Tavern"
            result="Success"
            des="Worked on a team responsible for developing E-commerce  app, including implementing new features such as product recommendations and user reviews..."
          />
          <ResumeCard
            title="React Developer"
            subTitle="Strix - Digital"
            result="Success"
            des="Consulted with Product Manager to identify minimal viable product and decomposed feature set into small scoped user stories..."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;

import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
import Projects from "@/components/projectstwo/Projects";

const Drone = dynamic(() => import("@/components/models/Drone"), {
  // const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
       <div className="text-red-300 text-4xl font-bold text-center p-4">Recent works</div>
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-5 h-screen">
        <RenderModel>
          {/* <Staff /> */}
          <Drone />
        </RenderModel>
      </div>
         {/* // */}
      <div><Projects/></div>

    </>
  );
}

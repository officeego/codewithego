import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
// import Camera from "@/components/models/Camera";
import Typewritter from "@/components/Typewritter";

import dynamic from "next/dynamic";
// import Webvideo from "@/components/Webvideo";
const Drone = dynamic(() => import("@/components/models/Drone"), {
  // const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
        <Typewritter/>
        
      <div className="w-full h-screen">
      {/* <Webvideo/> */}
      {/* <video src={require('../../public/webtry.mp4')}  autoPlay muted loop/> */}
        <Navigation />
        <RenderModel>
          {/* <Wizard /> */}
          {/* <Camera /> */}
          <Drone />
          {/* <Camera1/> */}
        </RenderModel>
      </div>
    </main>
  );
}

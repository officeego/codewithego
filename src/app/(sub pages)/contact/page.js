import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { Github, PhoneCall, MailSearch } from "lucide-react";
import Planet_Earth from "@/components/models/Planet_Earth";
import RenderModel from "@/components/RenderModel";
// import dynamic from "next/dynamic";
// const Earth_Animation = dynamic(() => import("@/components/models/Earth_Animation"), {
//   ssr: false,
// });
import Earth_Animation from "@/components/models/Earth_Animation";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          
          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
          <div></div>
          <div className="flex flex-col lgl:flex-row lgl:gap-10">
          <div className="flex flex-row gap-2 p-2">
            <p className="text-lime-600"><PhoneCall /></p>
            <p className="text-red-300">671-14-36-10</p>
          </div>
          <div className="flex flex-row gap-2 p-2">
            <p className="from-stone-300"><MailSearch /></p>
            <p className="text-amber-200">codewithego@mail.com</p>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-5 h-screen">
        {/* <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-5 h-screen">         */}
        <RenderModel>
          <Earth_Animation/>
          {/* <Planet_Earth/> */}
        </RenderModel>
        </div>
        <Form />
      </article>
    </>
  );
}

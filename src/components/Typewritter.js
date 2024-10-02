"use client";
import Typewriter from 'typewriter-effect';


const Typwritter = () => {
    return(
        <>
        {/* <div> */}
        <h1 className=' rounded-md	font-semibold fixed opacity-50 text-decoration-thickness: 1px m-1 p-1 text-red-200 font-serif'>i'm Ego Blasius </h1>
        <h1 className=' flex justify-center items-center opacity-50 hover:opacity-100  font-bold text-yellow-300 fixed m-3 p-3	'>
       
        <Typewriter
          options={{
          strings: [
            'Professional Coder',
            'Web Programmer',
            'App Developer',
            'Web Developer', 
            'Full-stack Developer',
            'MERN-Stack Developer',
            'UX/UI Designer',
            'Motion Designer'
        ],
          autoStart: true,
          loop: true,
         }}
       />
        </h1>
    {/* </div> */}
    </>
    )
}

export default Typwritter;
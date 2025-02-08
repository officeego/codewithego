"use client";
import React, { useState } from 'react'
import Image from "next/image";
import {ArrowRight, ArrowLeft  } from "lucide-react";
import image from '../../assets/images/testmonial/testimonialOne.png'
import image1 from '../../assets/images/testmonial/testimonialTwo.png'
import image2 from '../../assets/images/testmonial/testimonialThree.png'
import image3 from '../../assets/images/testmonial/testimonialFour.png'
import image4 from '../../assets/images/testmonial/testimonialFive.png'
import image5 from '../../assets/images/testmonial/testimonialSix.png'
import image6 from '../../assets/images/testmonial/testimonialSeven.png'
import image7 from '../../assets/images/testmonial/testimonialEight.png'
// import image8 from '../../assets/images/testmonial/testimonialNine.png'
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
   const Testimonials_data = [
    {
        img: image,
        content_text: '“I would recommend Ego to other small businesses looking to have a website that not only looks good, it actually works in terms of converting sales. “I needed a new website that was mobile responsive, that i could easily update, and that didn’t cost an arm and a leg.“. I was grateful, he did just fine…',
        testimonial_name: 'Jennifer Mask',
        text_block: 'P/Manager Dreamwood',
        rating_name: '⭐⭐⭐⭐⭐'
    },
    {
        img: image1,
        content_text: '“I particularly liked that Ego took the time to explain all of the options to me in in my website in a way that I could understand. He also included many little touches that other web designers charged extra for, such as a favicon, a branded 404-error page, and built-in security to help keep my site safe from hackers...',
        testimonial_name: 'Mask Jennifer',
        text_block: 'Project Manager',
        rating_name: '⭐⭐⭐⭐'
    },
    {
        img: image2,
        content_text: 'I was worried about choosing a Developer as i had been burned by web developers in the past who charged huge fees to create a site that constantly broke, was slow to load and was hard to maintain.“ I found Ego, he was brilliant. He was not only reasonably priced, but he also met every deadline, and my site is fast to load and looks great on all devices...',
        testimonial_name: 'John Mask',
        text_block: 'Manager Microsoft',
        rating_name: '⭐⭐⭐⭐⭐'
    },
    {
      img: image3,
      content_text: 'Thank you for the fantastic job you have been doing for our company lately. Your hard work and dedication has really helped us out during a difficult time in ...',
      testimonial_name: 'REX Stephen',
      text_block: 'Wooden Furniture',
      rating_name: '⭐⭐⭐⭐⭐'
  },
  {
    img: image4,
    content_text: 'For good work and efforts · I am proud of you that you overcame challenges and completed this task. I am not even surprised anymore ...',
    testimonial_name: 'Janny',
    text_block: 'Beauty Care',
    rating_name: '⭐⭐⭐⭐'
},
{
  img: image5,
  content_text: 'Thank you for having a positive attitude and a great work ethic! This is what makes a good coworker! The way you have put all ...',
  testimonial_name: 'Marie',
  text_block: 'Royal Beauty',
  rating_name: '⭐⭐⭐⭐⭐'
},
{
  img: image6,
  content_text: 'Reliability is hard to come by. Thank you for being someone we can always count on! I,m so grateful for all of your hard work. The entire team thanks you for ...',
  testimonial_name: 'Goerge Len',
  text_block: 'Design world',
  rating_name: '⭐⭐⭐⭐'
},
{
  img: image7,
  content_text: 'For your hard work and dedication · Thank you for all of your assistance. We would not have finished the job on time if it had not been for your ... ',
  testimonial_name: 'Mark Cruel',
  text_block: 'Metrix National',
  rating_name: '⭐⭐⭐⭐⭐'
},
// {
//   img: image8,
//   content_text: 'I appreciate a job well completed! Honestly, I am grateful for how industrious, tolerant, and genuine you are in regard to your duties! Job Well ...',
//   testimonial_name: 'Vilan Loph',
//   text_block: 'NLX Limited'
// }

   ]

   const [current, setCurrent] = useState(0);
   const length = Testimonials_data.length;

   const previous = () => {
      setCurrent(current === 0 ? length - 1 : current - 1 );
   }

   const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1 );
 }

  return (
    <motion.section 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className='flex h-[60vh] p-4 justify-center'>
    <div>
      {
        Testimonials_data.map((item, index) => index === current && <div key={index}>
            <div className='pb-[40px] flex gap-4'>
              {/* <Image
              className='text-xs'
                   src='https://www.iconsdb.com/icons/preview/maroon/heart-xxl.png'
                   alt=''
                //    width={128} height={128}
                   width={90} height={90}
                /> */}
                <h2 className='text-green-200 text-sm font-bold text-center italic font-serif'>{item.content_text}</h2>
            </div>
            {/* <div className='flex justify-between items-end'> */}
            <div className='flex justify-center items-end'>
                
            <div className='flex gap-4 items-center'>
               <div>
                {/* <img src={item.img} alt='' /> */}       
                <Image
                className='border-2 border-pink-600 rounded-full p-1'
                   src={item.img}
                   alt=''
                />
               </div>               
              <div>
                <h6 className='text-white text-xs font-serif'>{item.testimonial_name}</h6>
                <span className='text-orange-400 hover:text-lime-200 text-xs md:text-base'>{item.text_block}</span>
                <span className='flex text-xs md:text-sm'>{item.rating_name}</span>
            </div>
           
            </div>
             <div className='flex gap-2 justify-center'>
                <div onClick={previous} className='bg-gray-800 p-3 m-1 hover:bg-pink-500 ease-in duration-300 cursor-pointer'>
                 <ArrowLeft  />
               </div>
               <div onClick={next} className='bg-gray-800 p-3 m-1 hover:bg-pink-500 ease-in duration-300 cursor-pointer'>
                 <ArrowRight />
               </div>
            </div>    
            </div>
        
        </div> )
      }
    </div>
    </motion.section>
  )
}

export default Testimonials

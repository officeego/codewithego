import React from 'react'

const Title = ({title, des, links}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl  font-bold capitalize text-red-300">{des}</h1>
      <h1 className="">{links}</h1>
    </div>
  );
}

export default Title
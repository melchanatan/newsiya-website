import React from "react";
import Marquee from "react-fast-marquee";


const ReviewsSlider = ({reviews}) => {
  return (
    <>
        <Marquee gradient={false} speed={50} className="flex items-center justify-start w-full mb-4">
            {reviews.slice(0, Math.floor((reviews.length-1)/2)).map((review, index) => (
                <ReviewsCard key={index} info={review}/>
            ))}
        </Marquee>
        <Marquee gradient={false} direction={"right"} speed={50} className="flex items-center justify-start w-full">
            {reviews.slice(Math.floor((reviews.length-1)/2), reviews.length).map((review, index) => (
                <ReviewsCard key={index} info={review}/>
            ))}
        </Marquee>
    </>
  );
};

export default ReviewsSlider;

const ReviewsCard = ({ info }) => {
  return (
    <div className=" border-primary-darken border-2 w-[5wv] px-4 py-2 rounded-[24px] [10px] flex flex-col gap-2 min-w-[300px] flex-wrap mr-6">
      <h4 className="text-xl mb-1">{info.username}</h4>
      <p>{info.content} </p>
      <p className="text-[#8C8C8C]">เมื่อวันที่ {info.date}</p>
    </div>
  );
};

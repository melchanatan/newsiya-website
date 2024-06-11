import React from "react";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    username: "pengwang s.7",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s.6",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s5",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s.4",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s.3",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s.2",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
  {
    username: "pengwang s.1",
    content: "ไอซียู อ่อนด้อยเอเซีย นิวหมั่นโถว แอปเปิ้ล เคลื่อนย้าย",
    date: "25 พ.ย. 2024",
  },
];
const ReviewsSlider = () => {
  return (
    <>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex items-center justify-start w-full mb-4"
      >
        {reviews
          .slice(0, Math.floor((reviews.length - 1) / 2))
          .map((review, index) => (
            <ReviewsCard key={"review-card-1-" + index} info={review} />
          ))}
      </Marquee>
      <Marquee
        gradient={false}
        direction={"right"}
        speed={50}
        pauseOnHover={true}
        className="flex items-center justify-start w-full"
      >
        {reviews
          .slice(Math.floor((reviews.length - 1) / 2), reviews.length)
          .map((review, index) => (
            <ReviewsCard key={"review-card-2-" + index} info={review} />
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

import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "@/assets/arrow.svg";
import cardPic from "@/assets/laptop.jpeg";
import cardPic1 from "@/assets/category-card-1.png";
import moment from 'moment/moment';


import Card from "./UI/Card";

const CardsCollection = ({ title }: any) => {
  const [bidTime, setBidTime] = useState(86400)
  const [days, setDays] = useState<number | string>("0");
  const [hours, setHours] = useState<number | string>("0");
  const [minutes, setMinutes] = useState<number | string>("0");
  const [seconds, setSeconds] = useState<number | string>("0");

  useEffect(() => {
    const diffTime = bidTime;
    let duration = moment.duration(diffTime * 1000, "milliseconds");
    const interval = 1000;

    const timerID = setInterval(() => {
      if (duration.asMilliseconds() <= 0) {
        setDays("0");
        setHours("0");
        setMinutes("0");
        setSeconds("0");
      } else {
        duration = moment.duration(duration.asMilliseconds() - interval, "milliseconds");

        setDays(duration.days());
        setHours(duration.hours());
        setMinutes(duration.minutes());
        setSeconds(duration.seconds());
      }
    }, interval);

    return () => clearInterval(timerID);
  }, [bidTime]);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto my-">
          <div className="flex relative">
            <div className="text-black text-lg sm:text-[22px] font-extrabold ml-1 mt-12">
              {title}
            </div>
            <div className="text-black text-lg sm:text-2xl font-extrabold flex justify-center mb-8 mt-12 float-right absolute right-0 cursor-pointer">
              <div className="text-black flex items-center text-lg">View More</div>
              <Image
                className="w-[18px] sm:w-[24px] ml-1 mr-2"
                src={arrow}
                alt="Card Image"
              />
            </div>
          </div>
          <div className=" flex flex-wrap  ">
            <>

              <Card cardImage={cardPic}
                scrapTitle={"IPhone 15 Pro Max 256GB"} days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds} />
              <Card cardImage={cardPic}
                scrapTitle={"Dell Latitude 5480 Dual Core"}  days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}/>
              <Card cardImage={cardPic1}
                scrapTitle={"Toyota Hilux 2018"}  days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}/>
              <Card cardImage={cardPic}
                scrapTitle={"Samsun Galaxy S22 Ultra"}  days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}/>

            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsCollection;

import { useState } from "react";
import { Dishes } from "./Dishes";

import dishesData from './data';

export const LatestArticles = () => {
    
    const [currentSlider, setCurrentSlider] = useState(0);
    const current = dishesData.filter((ele) => ele.id < 4);
    const [currentP, setCurrentP] = useState(current);
   const clickRight=()=>{
        setCurrentSlider(1);
        const Newcurrent = dishesData.filter((ele) => ele.id > 3);
        setCurrentP(Newcurrent);
   }
   const clickLeft = ()=>{
     setCurrentSlider(0);
     setCurrentP(current);
   }
  return (
    <div className="latestArticles">
      <div className="lContent">
        <p className="lTitle">Latest Articles</p>
        <Dishes data={currentP} />
      </div>
      <div className="controller">
        <img
          className="leftArrow"
          onClick={clickLeft}
          style={{ cursor: 'pointer' }}
          src={
            !currentSlider 
              ? './assets/blocked-left.png'
              : './assets/left.png'
          }
          alt="left"
        />
        <p className="sliderPosition">{currentSlider + 1}/2</p>
        <img
          className="rightArrow"
          onClick={clickRight}
          style={{ cursor: 'pointer' }}
          src={
            !currentSlider ? './assets/right.png' : './assets/blocked-right.png'
          }
          alt="right"
        />
      </div>
    </div>
  );
}
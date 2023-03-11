import React from 'react'
import { IData } from '../../Models/DataModel';

interface ThirteenClockProps {
    hide14: boolean;
    langData: IData[];
    activeIndex: number;
    hours: number;
    minutes: number;
    seconds: number;
    onClickBack: () => void
  }

const ThirteenClock = ({ hide14, langData, activeIndex, hours, minutes, seconds, onClickBack }: ThirteenClockProps) => {
  return (
    <div className={hide14 ? "headerMiddle" : "headerMiddleHide"}>
        <div className="row2 clocktime">
          <p>{hours} :</p>
          <p>{minutes} :</p>
          <p>{seconds}</p>
        </div>
        <button onClick={onClickBack} className="button timebutton">
          {langData[activeIndex].guideButtonTwo}
        </button>
        <a href="" className="recomend-two">
          {langData[activeIndex].recom}
        </a>
      </div>
  )
}

export default ThirteenClock
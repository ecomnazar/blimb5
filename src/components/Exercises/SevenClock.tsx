import React from "react";
import { IData } from "../../Models/DataModel";

interface SevenClockProps {
  hide8: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const SevenClock = ({
  hide8,
  langData,
  activeIndex,
  count,
}: SevenClockProps) => {
  return (
    <div className={hide8 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="box5"></div>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].clock}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait6}</p>
      </div>
    </div>
  );
};

export default SevenClock;

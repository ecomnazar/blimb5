import React from "react";
import { IData } from "../../Models/DataModel";

interface SecondUpDownProps {
  hide3: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const SecondUpDown = ({
  hide3,
  langData,
  activeIndex,
  count,
}: SecondUpDownProps) => {
  return (
    <div className={hide3 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].upDown}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait1}</p>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default SecondUpDown;

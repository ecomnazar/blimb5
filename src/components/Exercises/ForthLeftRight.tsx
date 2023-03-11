import React from "react";
import { IData } from "../../Models/DataModel";

interface ForthLeftRightProps {
  hide5: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const ForthLeftRight = ({
  hide5,
  langData,
  activeIndex,
  count,
}: ForthLeftRightProps) => {
  return (
    <div className={hide5 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="box2"></div>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].leftRight}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait3}</p>
      </div>
    </div>
  );
};

export default ForthLeftRight;

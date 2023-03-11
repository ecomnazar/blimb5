import React from "react";
import { IData } from "../../Models/DataModel";

interface FifthDiagonalProps {
  hide6: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const FifthDiagonal = ({
  hide6,
  langData,
  activeIndex,
  count,
}: FifthDiagonalProps) => {
  return (
    <div className={hide6 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="box3"></div>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].diagonal}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait4}</p>
      </div>
    </div>
  );
};

export default FifthDiagonal;

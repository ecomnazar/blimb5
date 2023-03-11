import React from "react";
import { IData } from "../../Models/DataModel";

interface FirstRelaxProps {
  hide2: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const FirstRelax = ({
  hide2,
  langData,
  activeIndex,
  count,
}: FirstRelaxProps) => {
  
  return (
    <div className={hide2 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="box4"></div>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].relax}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait}</p>
      </div>
    </div>
  );
};

export default FirstRelax;

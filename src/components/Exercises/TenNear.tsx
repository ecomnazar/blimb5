import React from "react";
import { IData } from "../../Models/DataModel";

interface TenNearProps {
  hide11: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const TenNear = ({ hide11, langData, activeIndex, count }: TenNearProps) => {
  return (
    <div className={hide11 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].near}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait9}</p>
      </div>
    </div>
  );
};

export default TenNear;

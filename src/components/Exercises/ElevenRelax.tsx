import React from "react";
import { IData } from "../../Models/DataModel";

interface ElevenRelaxProps {
  hide12: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const ElevenRelax = ({
  hide12,
  langData,
  activeIndex,
  count,
}: ElevenRelaxProps) => {
  return (
    <div className={hide12 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].relax2}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait10}</p>
      </div>
    </div>
  );
};

export default ElevenRelax;

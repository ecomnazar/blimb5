import React from "react";
import { IData } from "../../Models/DataModel";

interface EightSpyralProps {
  hide9: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const EightSpyral = ({
  hide9,
  langData,
  activeIndex,
  count,
}: EightSpyralProps) => {
  return (
    <div className={hide9 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="box6"></div>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].spyral}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait7}</p>
      </div>
    </div>
  );
};

export default EightSpyral;

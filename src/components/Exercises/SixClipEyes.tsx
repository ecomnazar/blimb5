import React from "react";
import { IData } from "../../Models/DataModel";

interface SixClipEyesProps {
  hide7: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const SixClipEyes = ({
  hide7,
  langData,
  activeIndex,
  count,
}: SixClipEyesProps) => {
  return (
    <div className={hide7 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].eyes2}</h2>
        <p className="count">{count}</p>
        <p className="wait">{langData[activeIndex].wait5}</p>
      </div>
    </div>
  );
};

export default SixClipEyes;

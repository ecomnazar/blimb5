import React from "react";
import { IData } from "../../Models/DataModel";

interface ThirdClipEyesProps {
  hide4: boolean;
  langData: IData[];
  activeIndex: number;
  count: number;
}

const ThirdClipEyes = ({
  hide4,
  langData,
  activeIndex,
  count,
}: ThirdClipEyesProps) => {
  return (
    <div className={hide4 ? "headerMiddle" : "headerMiddleHide"}>
          <div className="mini">
            <h2 className="relax">{langData[activeIndex].eyes}</h2>
            <p className="count">{count}</p>
            <p className="wait">{langData[activeIndex].wait2}</p>
          </div>
        </div>
  );
};

export default ThirdClipEyes;

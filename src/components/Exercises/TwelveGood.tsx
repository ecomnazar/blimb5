import React from "react";
import { IData } from "../../Models/DataModel";

interface TwelveGoodProps {
  hide13: boolean;
  langData: IData[];
  activeIndex: number;
}

const TwelveGood = ({ hide13, langData, activeIndex }: TwelveGoodProps) => {
  return (
    <div className={hide13 ? "headerMiddle" : "headerMiddleHide"}>
      <div className="mini">
        <h2 className="relax">{langData[activeIndex].good}</h2>
      </div>
    </div>
  );
};

export default TwelveGood;

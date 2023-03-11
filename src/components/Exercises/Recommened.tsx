import React from "react";
import { IData } from "../../Models/DataModel";

interface RecommenedProps {
    hide1: boolean;
    langData: IData[];
    activeIndex: number;
    onClickStart2: () => void,
    audiotype: number,
  }


const Recommened = ({hide1, langData, activeIndex, onClickStart2, audiotype}: RecommenedProps) => {


  
  return (
    <>
      <div className={hide1 ? "headerMiddle" : "headerMiddleHide"}>
        <div className="mini mini2">
          <h2>{langData[activeIndex].guide}</h2>
          <p>{langData[activeIndex].guideTitle}</p>
          <p>{langData[activeIndex].guideTitle1}</p>
          <p>{langData[activeIndex].guideTitle2}</p>
          <p>{langData[activeIndex].guideTitle3}</p>
          <p>{langData[activeIndex].guideTitle4}</p>
          <div className="checkButton row2">
            <div className="row2">
              <input className="check" type="checkbox" />
              <p>{langData[activeIndex].guideCheck}</p>
            </div>
            <button onClick={onClickStart2} className="button">
              {langData[activeIndex].guideButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommened;

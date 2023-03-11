import React from 'react'
import { IData } from '../../Models/DataModel';

interface NineEyesProps {
    hide10: boolean;
    langData: IData[];
    activeIndex: number;
    count: number;
  }
  

const NineEyes = ({
    hide10,
    langData,
    activeIndex,
    count,
  }: NineEyesProps) => {
  return (
    <div className={hide10 ? "headerMiddle" : "headerMiddleHide"}>
          <div className="mini">
            <h2 className="relax">{langData[activeIndex].eyes3}</h2>
            <p className="count">{count}</p>
            <p className="wait">{langData[activeIndex].wait8}</p>
          </div>
        </div>
  )
}

export default NineEyes
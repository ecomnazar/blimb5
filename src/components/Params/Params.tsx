import React from "react";
import styles from "./Params.module.scss";
import "./Params.scss";

interface ParamsProps {
  volume: number;
  setHideVolume: React.Dispatch<React.SetStateAction<boolean>>;
  onClickIndex1: () => void;
  onClickIndex2: () => void;
  onClickIndex3: () => void;
  onClickLanguage: () => void;
  activeIndex: number;
  hide: boolean;
  rangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickBack: () => void;
  hideVolume: boolean;
  songIndex: number | undefined;
  songList: string[];
}

const Params = ({
  volume,
  setHideVolume,
  onClickIndex1,
  onClickIndex2,
  onClickIndex3,
  onClickLanguage,
  activeIndex,
  hide,
  rangeChange,
  onClickBack,
  hideVolume,
  songIndex,
  songList,
}: ParamsProps) => {
  const [selectedBell, setSelectedBell] = React.useState(0);
  const [visibleIcons, setVisibleIcons] = React.useState(false);
  const languages = ["RU", "EN", "UA"];

  let a = "volume1";

  React.useEffect(() => {
    if (volume < 30 && volume > 10) {
      a = "volume4";
    }
    if (volume < 10) {
      a = "volume4";
    }
    if (volume < 60 && volume > 30) {
      a = "volume2";
    }
    if (volume < 100 && volume > 60) {
      a = "volume3";
    }
  }, [volume]);

  const onClickFirstBell = () => {
    setSelectedBell(0);
    onClickIndex1();
  };
  const onClickSecondBell = () => {
    setSelectedBell(1);
    onClickIndex2();
  };
  const onClickThirdBell = () => {
    setSelectedBell(2);
    onClickIndex3();
  };

  const onCapture = () => {
    let audio = new Audio(songList[selectedBell]);
    audio.volume = volume / 100;
    audio.play();
  };



  let eyeclass = 'eye'
  let minieyeclass = 'minie'

  if(hide == true){
      eyeclass += ' active'
      minieyeclass += ' active'
  }
  if(hide == false){
    eyeclass = 'eye'
    eyeclass += ' disabled'
    minieyeclass = 'minie'
    minieyeclass += ' disabled'
}



  return (
    <>
      <div className={eyeclass}></div>
      <div className={styles.root}>
        {/* MINI EYE */}
        <div className={minieyeclass} onClick={onClickBack}></div>
        <div className={styles.row}>
          <div className={styles.lang}>
            <h2 className={styles.langh2} onClick={onClickLanguage}>
              {languages[activeIndex]}
            </h2>
          </div>

          <div className={styles.bellgroup}>
            <div className="bell">
              {selectedBell === 0 && (
                <div
                  onClick={() => setVisibleIcons((prev) => !prev)}
                  className={styles.bell1}
                ></div>
              )}
              {selectedBell === 1 && (
                <div
                  onClick={() => setVisibleIcons((prev) => !prev)}
                  className={styles.bell2}
                ></div>
              )}
              {selectedBell === 2 && (
                <div
                  onClick={() => setVisibleIcons((prev) => !prev)}
                  className={styles.bell3}
                ></div>
              )}
            </div>
            <div
              className={visibleIcons ? styles.bellVisible : styles.bellHidden}
            >
              <div onClick={onClickFirstBell} className={styles.bell1}></div>
              <div onClick={onClickSecondBell} className={styles.bell2}></div>
              <div onClick={onClickThirdBell} className={styles.bell3}></div>
            </div>
          </div>

          <div>
            {volume < 30 && (
              <div
                onClick={() => setHideVolume((prev) => !prev)}
                className={styles.volume3}
              ></div>
            )}
            {volume <= 60 && volume >= 30 ? (
              <div
                onClick={() => setHideVolume((prev) => !prev)}
                className={styles.volume2}
              ></div>
            ) : (
              ""
            )}
            {volume <= 100 && volume >= 61 ? (
              <div
                onClick={() => setHideVolume((prev) => !prev)}
                className={styles.volume1}
              ></div>
            ) : (
              ""
            )}
            <div className={styles.inpPosition}>
              {/* <input onClickCapture={onCapture} className={hideVolume ? styles.inp : styles.inpHide} onChange={(e) => rangeChange(e)} value={volume} type="range"  min='0' max='99' /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Params;

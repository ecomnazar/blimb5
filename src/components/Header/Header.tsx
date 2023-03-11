import React, { Dispatch, SetStateAction } from "react";
import { IData } from "../../Models/DataModel";
import { AppContext } from "../App/App";
import song from "../../../public/music.wav";
import song2 from "../../../public/music2.mp3";
import { Howl } from "howler";
import Slider from "../Slider/Slider";
import Params from "../Params/Params";
import FirstRelax from "../Exercises/FirstRelax";
import SecondUpDown from "../Exercises/SecondUpDown";
import ThirdClipEyes from "../Exercises/ThirdClipEyes";
import ForthLeftRight from "../Exercises/ForthLeftRight";
import FifthDiagonal from "../Exercises/FifthDiagonal";
import SixClipEyes from "../Exercises/SixClipEyes";
import SevenClock from "../Exercises/SevenClock";
import EightSpyral from "../Exercises/EightSpyral";
import NineEyes from "../Exercises/NineEyes";
import TenNear from "../Exercises/TenNear";
import ElevenRelax from "../Exercises/ElevenRelax";
import TwelveGood from "../Exercises/TwelveGood";
import ThirteenClock from "../Exercises/ThirteenClock";
import Recommened from "../Exercises/Recommened";
interface HeaderProps {
  langData: IData[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const Header = ({
  langData,
  activeIndex,
  setActiveIndex,
}: HeaderProps) => {
  const [hideVolume, setHideVolume] = React.useState(false);
  const [volume, setVolume] = React.useState<number>(99);
  const songList = [song, song2];
  const ringIcon = ["images/bell.png", "images/bell2.png", "3"];
  const [songIndex, setSongIndex] = React.useState<number>(0);
  const [ringHide, setRingHide] = React.useState(false);
  const [audiotype, setAudioType] = React.useState<number>(0);

  let audio = new Audio(songList[audiotype]);


  //BIRNJI BELL ICON
  const onClickIndex1 = () => {
    setSongIndex(0);
    setRingHide(false);
  let audio = new Audio(songList[0]);
    audio.play()
    audio.volume = volume / 100
    setAudioType(0);
  };


  //IKINJI BELL ICON
  const onClickIndex2 = () => {
    setSongIndex(1);
    setRingHide(false);
    setAudioType(1);
  let audio = new Audio(songList[1]);
    audio.play()
    audio.volume = volume / 100

  };

  const onClickIndex3 = () => {
    audio.play()
    audio.volume = 0
  };

  const languages = ["Ru", "En", "Ua"];
  const [hide, setHide] = React.useState(false);
  const [hide1, setHide1] = React.useState(false);
  const [hide2, setHide2] = React.useState(false);
  const [hide3, setHide3] = React.useState(false);
  const [hide4, setHide4] = React.useState(false);
  const [hide5, setHide5] = React.useState(false);
  const [hide6, setHide6] = React.useState(false);
  const [hide7, setHide7] = React.useState(false);
  const [hide8, setHide8] = React.useState(false);
  const [hide9, setHide9] = React.useState(false);
  const [hide10, setHide10] = React.useState(false);
  const [hide11, setHide11] = React.useState(false);
  const [hide12, setHide12] = React.useState(false);
  const [hide13, setHide13] = React.useState(false);
  const [hide14, setHide14] = React.useState(false);
  const [count, setCount] = React.useState(20);

  //IN SONKY TIMER
  let [seconds, setSeconds] = React.useState(0);
  let [minutes, setMinutes] = React.useState(0);
  let [hours, setHours] = React.useState(0);
  //IN SONKY TIMER

  const selectAudio = () => {
    let audio = new Audio(songList[audiotype]);
    audio.play();
  };

  //IN BIRINJI START
  const onClickStart = () => {
    setHide(true);
    setHide1(true);
    selectAudio();
  };


    if(count == 19){
      let audio = new Audio(songList[audiotype]);
      audio.play();
      audio.volume = volume / 100
    }

  //IKINJI PAGE START
  const onClickStart2 = () => {
    setHide1(false);
    setHide14(false);
    setHide2(true);
    setCount(15);
    setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    let first = setInterval(show1, 15000);
    let second = setInterval(show2, 35000);
    let third = setInterval(show3, 55000);
    let forth = setInterval(show4, 75000);
    let fifth = setInterval(show5, 95000);
    let six = setInterval(show6, 115000);
    let seven = setInterval(show7, 135000);
    let eight = setInterval(show8, 155000);
    let nine = setInterval(show9, 175000);
    let ten = setInterval(show10, 195000);
    let eleven = setInterval(show11, 215000);
    let twelve = setInterval(show12, 225000);

    function show1() {
      setHide2(false);
      setHide3(true);
      console.log("First Page");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(first);
      }
      if (count === 0) {
        clearInterval(first);
      }
    }
    function show2() {
      setHide3(false);
      setHide4(true);
      console.log("Second Page");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(second);
      }
      if (count === 0) {
        clearInterval(second);
      }
    }
    function show3() {
      setHide4(false);
      setHide5(true);
      console.log("3");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(third);
      }
      if (count === 0) {
        clearInterval(third);
      }
    }
    function show4() {
      setHide5(false);
      setHide6(true);
      console.log("4");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(forth);
      }
      if (count === 0) {
        clearInterval(forth);
      }
    }
    function show5() {
      setHide6(false);
      setHide7(true);
      console.log("5");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(fifth);
      }
      if (count === 0) {
        clearInterval(fifth);
      }
    }
    function show6() {
      setHide7(false);
      setHide8(true);
      console.log("6");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(six);
      }
      if (count === 0) {
        clearInterval(six);
      }
    }
    function show7() {
      setHide8(false);
      setHide9(true);
      console.log("7");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(seven);
      }
      if (count === 0) {
        clearInterval(seven);
      }
    }
    function show8() {
      setHide9(false);
      setHide10(true);
      console.log("8");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(eight);
      }
      if (count === 0) {
        clearInterval(eight);
      }
    }
    function show9() {
      setHide10(false);
      setHide11(true);
      console.log("9");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(nine);
      }
      if (count === 0) {
        clearInterval(nine);
      }
    }
    function show10() {
      setHide11(false);
      setHide12(true);
      console.log("10");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(ten);
      }
      if (count === 0) {
        clearInterval(ten);
      }
    }
    function show11() {
      setHide12(false);
      setHide13(true);
      console.log("11");
      setCount(20);
      setCount((prev) => prev - 1);
      if (count === 20) {
        clearInterval(eleven);
      }
      if (count === 0) {
        clearInterval(eleven);
      }
    }
    function show12() {
      setHide13(false);
      setHide14(true);
      console.log("12");
      setCount(20);
      setInterval(() => {
        setSeconds((seconds += 1));
        if (seconds === 60) {
          setSeconds((seconds = 0));
          setMinutes((minutes += 1));
          clearInterval(twelve);
        }
        if (minutes === 60) {
          setHours((hours += 1));
        }
      }, 1000);
    }
  };

  //DIL UYGETMEK
  const onClickLanguage = () => {
    switch (activeIndex) {
      case 0:
        setActiveIndex(activeIndex + 1);
        break;
      case 1:
        setActiveIndex(activeIndex + 1);
        break;
      case 2:
        setActiveIndex(activeIndex - 2);
        break;

      default:
        break;
    }
  };

  //CEP YOKARYDA GOZE BASANDA RESFRESH PAGE
  const onClickBack = () => {
    window.location.reload();
  };

  //VOLUME UYTGANDE
  const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.valueAsNumber);
    console.log(volume);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="row">
          <div>
            <div className={hideVolume ? "showVolume" : "hideVolume"}></div>
          </div>
        </div>
        <div className={hide ? "headerMiddle2Hide" : "headerMiddle2"}>
          <div className="startdiv">
            <button className="button" onClick={onClickStart}>
              {langData[activeIndex].guideButtonTwo}
            </button>
            <a href="">{langData[activeIndex].recom}</a>
          </div>
        </div>
        {/*  */}

        <Params
          volume={volume}
          setHideVolume={setHideVolume}
          onClickIndex1={onClickIndex1}
          onClickIndex2={onClickIndex2}
          onClickIndex3={onClickIndex3}
          onClickLanguage={onClickLanguage}
          activeIndex={activeIndex}
          hide={hide}
          rangeChange={rangeChange}
          onClickBack={onClickBack}
          hideVolume={hideVolume}
          songIndex={songIndex}
          songList={songList}
        />

        <Recommened
          hide1={hide1}
          langData={langData}
          activeIndex={activeIndex}
          onClickStart2={onClickStart2}
          audiotype={audiotype}
        />

        <FirstRelax
          hide2={hide2}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <SecondUpDown
          hide3={hide3}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <ThirdClipEyes
          hide4={hide4}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <ForthLeftRight
          hide5={hide5}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <FifthDiagonal
          hide6={hide6}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <SixClipEyes
          hide7={hide7}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <SevenClock
          hide8={hide8}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <EightSpyral
          hide9={hide9}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <NineEyes
          hide10={hide10}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <TenNear
          hide11={hide11}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <ElevenRelax
          hide12={hide12}
          langData={langData}
          activeIndex={activeIndex}
          count={count}
        />
        <TwelveGood
          hide13={hide13}
          langData={langData}
          activeIndex={activeIndex}
        />
        <ThirteenClock
          hide14={hide14}
          langData={langData}
          activeIndex={activeIndex}
          hours={hours}
          seconds={seconds}
          minutes={minutes}
          onClickBack={onClickBack}
        />
      </div>
    </div>
  );
};

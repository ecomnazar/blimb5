import React from 'react'
import './Volume.scss'

interface VolumeParams{
  volume: number,
  songList: string[],
  audiotype: number,
  setVolume: React.Dispatch<React.SetStateAction<number>>,
  hideVolume: boolean
}

const Volume = ({ volume, songList, audiotype, setVolume, hideVolume }: VolumeParams) => {

  const [activeDataVolume, setActiveDataVolume] = React.useState(10)

  let audio = new Audio(songList[audiotype]);

  const onCapture = () => {
  }

  const onClick10 = () => {
    setActiveDataVolume(10)
    setVolume(100)
    audio.play();
      audio.volume = 1
  }
  const onClick9 = () => {
    setActiveDataVolume(9)
    setVolume(90)
    audio.play();
      audio.volume = 0.9
  }
  const onClick8 = () => {
    setActiveDataVolume(8)
    setVolume(80)
    audio.play();
      audio.volume = 0.8
  }
  const onClick7 = () => {
    setActiveDataVolume(7)
    setVolume(70)
    audio.play();
      audio.volume = 0.7
  }
  const onClick6 = () => {
    setActiveDataVolume(6)
    setVolume(60)
    audio.play();
      audio.volume = 0.6
  }
  const onClick5 = () => {
    setActiveDataVolume(5)
    setVolume(50)
    audio.play();
      audio.volume = 0.5
  }
  const onClick4 = () => {
    setActiveDataVolume(4)
    setVolume(40)
    audio.play();
      audio.volume = 0.4
  }
  const onClick3 = () => {
    setActiveDataVolume(3)
    setVolume(30)
    audio.play();
      audio.volume = 0.3
  }
  const onClick2 = () => {
    setActiveDataVolume(2)
    setVolume(20)
    audio.play();
      audio.volume = 0.2
  }
  const onClick1 = () => {
    setActiveDataVolume(1)
    setVolume(10)
    audio.play();
      audio.volume = 0
  }
  


  return (
    <div className='rootVolume'>
      <div className={hideVolume ? 'volumeLine' : 'volumeLineHide'}>
        <div onClickCapture={onCapture} onClick={onClick10} className={activeDataVolume == 10 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='1'></div>
        <div onClickCapture={onCapture} onClick={onClick9} className={activeDataVolume == 9 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.9'></div>
        <div onClickCapture={onCapture} onClick={onClick8} className={activeDataVolume == 8 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.8'></div>
        <div onClickCapture={onCapture} onClick={onClick7} className={activeDataVolume == 7 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.7'></div>
        <div onClickCapture={onCapture} onClick={onClick6} className={activeDataVolume == 6 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.6'></div>
        <div onClickCapture={onCapture} onClick={onClick5} className={activeDataVolume == 5 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.5'></div>
        <div onClickCapture={onCapture} onClick={onClick4} className={activeDataVolume == 4 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.4'></div>
        <div onClickCapture={onCapture} onClick={onClick3} className={activeDataVolume == 3 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.3'></div>
        <div onClickCapture={onCapture} onClick={onClick2} className={activeDataVolume == 2 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.2'></div>
        <div onClickCapture={onCapture} onClick={onClick1} className={activeDataVolume == 1 ? 'dataVolume dataVolumeActive' : 'dataVolume'} data-volume='0.1'></div>
        <div className='before' style={{height: `${activeDataVolume + '0'}%`}}></div>
        <div className='after'></div>
      </div>
    </div>
  )
}

export default Volume
import React from "react"
import './record.css'
const Record = () => {
  const audioURL =
    "https://assets.codepen.io/911157/Carly_Simon_Youre_So_Vain.mp3"

  let isAudioPlaying = false

  var audio = new Audio(audioURL)

  function pause() {
    audio.pause()
  }
  function play() {
    setTimeout(function () {
      audio.play()
    }, 2500)
  }
  return (
    <div class="entry threes" id="vinyl-record" onMouseOver={play} onMouseOut={pause}>
      <div></div>
    </div>
  )
}

export default Record

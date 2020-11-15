import React, { useState } from "react"
import "./record.css"
import { css } from "@emotion/react"
import useSound from "use-sound"

const Record = ({ album }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [play, { stop, isPlaying }] = useSound(album.album_sample, { interrupt: true})

  return (
    <div
      css={css`
        display: block;
      `}
      className="entry threes"
      id="vinyl-record"
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
    >
      <div
        isHovering={isHovering}
        css={css`
          &:after {
            background-image: url("${album.album_cover_img}");
          }
        `}
      ></div>
    </div>
  )
}

export default Record

import React, { useEffect, useState } from "react"
import "./record.css"
import { css } from "@emotion/react"
import useSound from "use-sound"

const Record = ({ album }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [play, { stop }] = useSound(album.album_sample)
  useEffect(() => {
    isSelected ? play() : stop()
    return () => {
      stop()
    }
  }, [isSelected])
  return (
    <div
      css={css`
        display: block;
      `}
      className="entry threes"
      id="vinyl-record"
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
    >
      <div
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

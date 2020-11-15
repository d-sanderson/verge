import React, { useState, useEffect } from "react"
import "./record.css"
import { css } from "@emotion/react"
import useSound from "use-sound"

const Record = ({ album }) => {
  const OPEN = "190px"
  const CLOSED = "10px"
  const [isOpen, setIsOpen] = useState(CLOSED)
  const [play, { stop, isPlaying }] = useSound(album.album_sample, {
    interrupt: false,
  })
  useEffect(() => {
    if (!isPlaying) {
      setIsOpen(CLOSED)
    }
  }, [isPlaying])

  const DEFAULT_ALBUM_COVER = `background-image: linear-gradient(
    -45deg,
    #be0974 20px,
    #da6a57 20px,
    #da6a57 40px,
    #eebc31 40px,
    #eebc31 60px,
    #92a25b 60px,
    #92a25b 80px,
    #46a7c0 80px,
    #46a7c0 100px,
    transparent 100px
  );`
  return (
    <div
      css={css`
        cursor: ${isPlaying ? "pointer" : "grab"};
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        text-align: center;
        min-height: 400px;
        position: relative;
      `}
      className="entry threes"
      id="vinyl-record"
      onClick={_ => {
        isOpen === CLOSED ? setIsOpen(OPEN) : setIsOpen(CLOSED)
        isPlaying ? stop() : setTimeout(play, 2500)
      }}
    >
      <div
        css={css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: rotate(90deg);
          width: 160px;
          height: 160px;
          margin-left: -80px;
          margin-top: -40px;
          background: linear-gradient(
              50deg,
              rgba(255, 255, 255, 0) 40%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0) 60%
            ),
            linear-gradient(
              -50deg,
              rgba(255, 255, 255, 0) 40%,
              rgba(255, 255, 255, 0.15) 50%,
              rgba(255, 255, 255, 0) 60%
            ),
            repeating-radial-gradient(
              circle,
              #333 0,
              #333 2px,
              #444 2px,
              #444 4px
            );
          border-radius: 50%;
          -webkit-box-shadow: -3px -3px 2px rgba(0, 0, 0, 0.2);
          box-shadow: -3px -3px 2px rgba(0, 0, 0, 0.2);
          &:before {
              ${isPlaying && "animation: spin linear 1s infinite;"}
              display: block;
              content: "";
              position: absolute;
              width: 45px;
              height: 45px;
              margin-left: -22.5px;
              margin-top: -22.5px;
              top: 50%;
              left: 50%;
              background-color: #f5f5dc;
              background-image: radial-gradient(
                  circle,
                  #333 5px,
                  transparent 5px
                ),
                -webkit-gradient(linear, left top, left bottom, color-stop(35%, #d2b48c), color-stop(35%, transparent));
              background-image: radial-gradient(
                  circle,
                  #333 5px,
                  transparent 5px
                ),
                linear-gradient(to bottom, #d2b48c 35%, transparent 35%);
              border-radius: 50%;
              -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.3);
              box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.3);
            }
          }
          &:after {
            display: block;
            content: "";
            position: absolute;
            width: 160px;
            height: 160px;
            margin-left: -8px;
            top: ${isOpen};
            transition: top 2s ease-in-out 0s;
            background-color: #f7f7f7;
            border-radius: 4px;
            background-size: cover;
            transform: rotate(-90deg);
            border: 8px solid #f7f7f7;
            -webkit-box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1),
              0 -12px 0 -3px white, -4px -4px 2px rgba(0, 0, 0, 0.1);
            box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.1), 0 -12px 0 -3px white,
              -4px -4px 2px rgba(0, 0, 0, 0.1);
              ${
                album.album_cover_img
                  ? `background-image: url("${album.album_cover_img}");`
                  : DEFAULT_ALBUM_COVER
              }
          }

        `}
      ></div>
    </div>
  )
}

export default Record

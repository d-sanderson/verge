import React, { useState, useEffect } from "react"
import Record from "../components/Record"
import Layout from "../components/layout"
import { useAlbums } from "../hooks/useAlbums"
import { css } from "@emotion/react"
const IndexPage = () => {

  const data = useAlbums()
  const albums = data?.allFile?.nodes
  const albumCovers = albums.map((el, i) => {
    const album = el.childMarkdownRemark.frontmatter
    return <Record key={el.id} album={album} />
  })

  return (
    <>
      <h1>RECORD COLLECTION</h1>
      <div
        css={css`
          display: flex;
          width: 80vw;
          justify-content: space-around;
        `}
      >
        {albumCovers}
      </div>
    </>
  )
}

export default IndexPage

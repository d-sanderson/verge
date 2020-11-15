import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useAlbums = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "albums" } }) {
          nodes {
            id
            childMarkdownRemark {
              frontmatter {
                album_name
                artist_name
                title
                album_cover_img
                album_sample
              }
          }
        }
      }
    }
  `)
  return data;
}

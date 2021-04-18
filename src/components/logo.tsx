import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Logo = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: datoCmsAsset(path: {eq: "/46565/1618613538-logo-perifacode.png"}) {
        fluid {
          src
        }
      }
    }
  `)

  return !data?.placeholderImage ? (
    <div>Imagem não encontrada</div>
  ) : (
    <Img alt={alt} fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}



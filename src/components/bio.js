/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import "./bio.css";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/prego.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            twitter
          }
          campeao {
            nome
            mes
            foto
          }
        }
      }
    }
  `)

  const { author, description, campeao } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        Nós da <strong>{author}</strong> apresentamos o Troféu Preguinho<br /><br />
        {description}. <br /><br />

        Conheça o atual campeão do troféu preguinho:
          <table>
          <tbody>
            <tr>
              <td>{campeao.mes}</td>
            </tr>
            <tr>
              <td><img src={campeao.foto} style={{
                width: '150px',
                height: '150px'
              }} alt={'Campeão'}></img></td>
            </tr>
            <tr>
              <td>{campeao.nome}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bio

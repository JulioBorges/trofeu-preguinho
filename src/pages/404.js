import React from "react"
import { graphql, withPrefix } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Página não encontrada" />
        <h1>Página não encontrada</h1>
        <div>
          <img src={withPrefix('Martelando.gif')} alt={'Campeão'}>
          </img>
        </div>
        <p>Esse preguinho foi top mesmo hein !!!. Infelizmente esta página não foi encontrada</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

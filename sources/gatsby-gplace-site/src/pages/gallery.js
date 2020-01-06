import React from "react"
import BaseLayout from "../components/BaseLayout"
import { StaticQuery, graphql } from "gatsby";
import ModelsGallery from "../components/ModelsGallery";
import Helmet from "react-helmet";

const QUERY = graphql`
  query GalleryQuery {
    CrafterCMS {
      component_guitarmodel {
        items {
          objectId
          body_html
          body_html_raw
          file__name
          internal__name
          localId
          mainImage_s
          manufacturer_s
          modelName_s
        }
        total
      }
    }
  }
`;

export default () => (
  <BaseLayout>
    <Helmet>
      <title>GPlace - Gallery</title>
      <meta name="description" content="Site dedicated to guitars" />
    </Helmet>
    <h1>Gallery</h1>
    <StaticQuery
      query={QUERY}
      render={({ CrafterCMS }) => (
        <ModelsGallery items={CrafterCMS.component_guitarmodel.items} />
      )}
    />
  </BaseLayout>
)

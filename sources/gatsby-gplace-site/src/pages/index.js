import React from "react"
import Carousel from "../components/Carousel"
import FeaturedSection from "../components/FeaturedSection"
import { StaticQuery, graphql } from "gatsby"
import BaseLayout from "../components/BaseLayout"
import Helmet from "react-helmet"

const QUERY = graphql`
  query CarouselQuery {
    CrafterCMS {
      component_carouselitem {
        total
        items {
          objectId
          title_s
          subtitle_s
          mainImage_s
        }
      }
      component_featuredsection {
        total
        items {
          objectId
          title_s
          featuredItems_o {
            item {
              title_s
              caption_s
              featuredImage_s
              buttonLink_s
              buttonLabel_s
            }
          }
        }
      }
    }
  }
`;

export default () => (
  <BaseLayout>
    <Helmet>
      <title>GPlace</title>
      <meta name="description" content="Site dedicated to guitars" />
    </Helmet>
    <StaticQuery
      query={QUERY}
      render={({ CrafterCMS }) => (
        <>
          <Carousel items={CrafterCMS.component_carouselitem.items} fade />
          <FeaturedSection
            data={CrafterCMS.component_featuredsection.items[0]}
          />
        </>
      )}
    />
  </BaseLayout>
)

import React from "react"
import Carousel from "../components/Carousel";
import { StaticQuery, graphql } from "gatsby";

const CAROUSEL_QUERY = graphql`
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
  }
}
`;

export default () => (
  <div>
    <StaticQuery query={CAROUSEL_QUERY} render={
      (data) => <Carousel items={data.CrafterCMS.component_carouselitem.items} fade />
    } />
  </div>
);

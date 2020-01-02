import React from 'react';
import { useFetchCarousel } from 'app/graphql/carousel-query';
import Carousel from 'app/components/Carousel';
import configuration from 'app/configuration';
import { useFetchFeaturedSection } from 'app/graphql/featured-section-query';
import FeaturedSection from '../components/FeaturedSection';


const Home = () => {
  const { baseCrafterURL } = configuration;
  const { data: carouselData } = useFetchCarousel();
  const { data: featureSectionData } = useFetchFeaturedSection();
  return (
    <div>
      <Carousel items={carouselData.items} baseImagesURL={baseCrafterURL} fade />
      {featureSectionData.item
        && <FeaturedSection data={featureSectionData.item} baseImagesURL={baseCrafterURL} />}
    </div>
  );
};

Home.propTypes = {

};

export default Home;

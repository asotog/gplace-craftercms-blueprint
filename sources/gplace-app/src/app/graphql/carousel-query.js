/* eslint-disable camelcase */
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

// eslint-disable-next-line import/prefer-default-export
export const CAROUSEL_QUERY = gql`
  {
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
`;

export const useFetchCarousel = () => {
  const { loading, error, data } = useQuery(CAROUSEL_QUERY);
  return {
    loading,
    error,
    data: {
      ...data && {
        ...data.component_carouselitem,
        items: data.component_carouselitem.items,
      },
    },
  };
};

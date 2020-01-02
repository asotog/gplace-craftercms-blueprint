import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const FEATURED_SECTION_QUERY = gql`
  {
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
`;

export const useFetchFeaturedSection = () => {
  const { loading, error, data } = useQuery(FEATURED_SECTION_QUERY);
  return {
    loading,
    error,
    data: {
      ...data && {
        item: data.component_featuredsection.items.length
          && data.component_featuredsection.items[0],
      },
    },
  };
};

import React from 'react'
import BaseLayout from '../components/BaseLayout';
import { Link, graphql } from "gatsby";
import Helmet from 'react-helmet';

const GuitarModel = ({ data }) => {
  const { CrafterCMS: { component_guitarmodel: { items: [ model ] } } } = data;
  return (
    <BaseLayout>
      <Helmet>
        <title>GPlace - {model.modelName_s}</title>
        <meta name="description" content={`Specifications for ${model.modelName_s}, ${model.manufacturer_s}}`}/>
      </Helmet>
      <Link to="/gallery">Return</Link>
      <h1>{model.modelName_s}</h1>
      <h5>{model.manufacturer_s}</h5>
      <div>{model.body_html}</div>
    </BaseLayout>
  )
};

export const query = graphql`
  query($objectId: String!) {
    CrafterCMS {
      component_guitarmodel {
        items {
          body_html
          modelName_s,
          manufacturer_s,
          objectId(filter: {equals: $objectId})
        }
      }
    }
  }
`

export default GuitarModel;

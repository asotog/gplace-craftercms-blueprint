import React from 'react'
import BaseLayout from '../components/BaseLayout';
import { Link } from "gatsby";
import Helmet from 'react-helmet';

const GuitarModel = ({ pageContext: { model }}) => {
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

export default GuitarModel;

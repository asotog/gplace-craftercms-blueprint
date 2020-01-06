import React from 'react'
import BaseLayout from '../components/BaseLayout';
import { Link } from "gatsby";

const GuitarModel = ({ pageContext: { model }}) => {
  return (
    <BaseLayout>
      <Link to="/gallery">Return</Link>
      <h1>{model.modelName_s}</h1>
      <h5>{model.manufacturer_s}</h5>
      <div>{model.body_html}</div>
    </BaseLayout>
  )
};

export default GuitarModel;

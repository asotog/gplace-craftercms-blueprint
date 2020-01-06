import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";

const ModelsGallery = ({ items }) => (
  <div className="row text-center text-lg-left">
    {items.map(({ objectId, mainImage_s }) => (
      <div key={objectId} className="col-lg-3 col-md-4 col-6">
        <Link to={`/model/${objectId}`} className="d-block mb-4 h-100">
          <img
            className="img-fluid img-thumbnail"
            src={mainImage_s}
            alt=""
          />
        </Link>
      </div>
    ))}
    
  </div>
);

ModelsGallery.propTypes = {
  items: PropTypes.instanceOf(Array),
}

ModelsGallery.defaultProps = {
  items: [],
}

export default ModelsGallery

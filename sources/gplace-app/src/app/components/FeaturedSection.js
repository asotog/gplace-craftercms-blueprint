/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const FeaturedSection = ({ data: { title_s, featuredItems_o }, baseImagesURL }) => (
  <>
    <div className="container py-5">
      <h2 className="text-center">{title_s}</h2>
      <div className="row py-2">
        {featuredItems_o.item && featuredItems_o.item.map((featuredItem, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center">
              <img
                className="card-img-top d-block w-100"
                src={`${baseImagesURL}${featuredItem.featuredImage_s}`}
                alt={title_s}
              />
              <div className="card-body">
                <h5 className="card-title">{featuredItem.title_s}</h5>
                <p className="card-text">{featuredItem.caption_s}</p>
                <a href={featuredItem.buttonLink_s} className="btn btn-primary">{featuredItem.buttonLabel_s}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

FeaturedSection.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  baseImagesURL: PropTypes.string,
};

FeaturedSection.defaultProps = {
  baseImagesURL: '',
};

export default FeaturedSection;

/* eslint-disable camelcase */
import React from "react"
import PropTypes from "prop-types"
import BootstrapCarousel from "react-bootstrap/Carousel"

const Carousel = ({ items, fade }) => (
  <div className="py-5">
    <BootstrapCarousel fade={fade}>
      {items.map(({ objectId, title_s, subtitle_s, mainImage_s }) => (
        <BootstrapCarousel.Item key={objectId}>
          <img className="d-block w-100" src={`${mainImage_s}`} alt={title_s} />
          <BootstrapCarousel.Caption>
            <h3>{title_s}</h3>
            <p>{subtitle_s}</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  </div>
)

Carousel.propTypes = {
  items: PropTypes.instanceOf(Array),
  fade: PropTypes.bool,
}

Carousel.defaultProps = {
  items: [],
  fade: false,
}

export default Carousel

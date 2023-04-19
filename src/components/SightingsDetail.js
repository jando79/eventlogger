//dj
import React from "react";
import PropTypes from "prop-types";

function SightingsDetail(props){
  const { sightings } =props;

  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>{sightings.userName}</h3>
      <h3>{sightings.location}</h3>
      <h3>{sightings.description}</h3>
      <hr/>
    </React.Fragment>
  );
}

SightingsDetail.propTypes = {
  ticket: PropTypes.object
};

export default SightingsDetail;
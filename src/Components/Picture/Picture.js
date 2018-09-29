import React from 'react';
import PropTypes from 'prop-types';

import openTab from '../../helpers/printFile';

const Picture = (props) => {
  const { previewURL } = props;
  return (
    <div>
      <img src={previewURL} alt="downloaded" />
      <button type="button" onClick={() => openTab(previewURL)}>
          Print Preview
      </button>
    </div>
  );
};

Picture.propTypes = {
  previewURL: PropTypes.string.isRequired,
};

export default Picture;

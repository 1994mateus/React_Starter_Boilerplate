import React from 'react';
import PropTypes from 'prop-types';

const HookExample = (props) => {
  const { count } = props;
  return (
    <p>
      This is a hook example:
      {' '}
      {count}
    </p>
  );
};

HookExample.propTypes = {
  count: PropTypes.number.isRequired,
};

export default HookExample;

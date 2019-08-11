import React from 'react';
import PropTypes from 'prop-types';
            
const HookExample = (props) => <p>This is a react's hook example: {props.count}</p>;

HookExample.propTypes = {
  count: PropTypes.number,
}

export default HookExample;
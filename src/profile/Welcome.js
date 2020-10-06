import React from 'react';
import PropTypes from "prop-types";
const Welcome = props => {
    const StyleObjectB={marginBottom :"10px", fontSize: "18px"};
    return (
        
      <button style={StyleObjectB} type="button" className="btn btn-warning" onClick={() => props.alertMyInput(`My name is Khaoula Mahfoudhi `)}>
        ClickMe
      </button>
    );
   };
   Welcome.propTypes = {
 alertMyInput: PropTypes.func
   };
   export default Welcome;
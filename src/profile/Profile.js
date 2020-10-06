import React from "react";
import PropTypes from "prop-types";
function Profile(props) {
  const StyleObjecttxt = {
    fontFamily: "sans-serif",
    paddingTop: "10px",
    color: "#FCF6F5FF",
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "300px"
  };
  return (
    <div>
      <h1 style={StyleObjecttxt}>
        {" "}
        my name is  {props.fullName} <br /> {props.bio} <br /> And right now, I'am
        a {props.profession}{" "}
      </h1>
      <h1 style={StyleObjecttxt}>
        {props.children} <br /> And This is me !{" "}
      </h1>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "superwoman",
};
Profile.propTypes = {
  bio: PropTypes.string,
  fullName: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;

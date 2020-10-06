import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF);

function Nav(props) {
  const StyleObject = {
    color: "#fee715ff" , marginTop: "2px", cursor: "pointer"
  };
  return (
    <div className="logos">
      <div>
        <a
          style={StyleObject}
          href="https://www.facebook.com"
          target="https://www.facebook.com"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
      </div>

      <div>
        <a
          style={StyleObject}
          href="https://www.gmail.com"
          target="https://www.gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      <div style={StyleObject} >
        <FontAwesomeIcon title="+216 20 978 159" icon={faPhone} />
      </div>
    </div>
  );
}

export default Nav;

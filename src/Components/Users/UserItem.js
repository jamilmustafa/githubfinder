import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ borderRadius: "50%", width: "85px" }}
          src={avatar_url}
          className="img-circle"
          alt={avatar_url}
        />

        <h3 style={{ fontSize: login.length > 12 ? "15px" : "25px" }}>
          {login}
        </h3>

        <Link to={`/user/${login}`}>
          <button className="btn btn-light">more</button>
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

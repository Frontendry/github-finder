import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  /* 
  Same as above on arguments
  const { login, avatar_url, html_url } = props.user; */

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        className="round-img"
        alt=""
        style={{ width: "60px" }}
      />

      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;

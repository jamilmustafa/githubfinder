import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layouts/Spinner";
import PropTypes from "prop-types";
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="row">
      {users.map(user => (
        <div key={user.id} className="col-md-4 col-sm-12 col-lg-2">
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};
Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;

import React, { Fragment, Component } from "react";
import Spinner from "../Layouts/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      following,
      public_gists,
      blog,
      html_url,
      login,
      followers,
      hireable,
      public_repos
    } = this.props.user;
    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <div>
          <Link to="/" className="btn btn-outline-success my-2 mr-sm-2">
            Back to Search
          </Link>
        </div>

        <div className="card grid-2 grid-sm-1 card-sm-1">
          <div
            style={{
              textAlign: "center",
              paddingTop: "3",
              marginTop: "3px"
            }}
          >
            <img
              style={{ borderRadius: "50%", width: "180px" }}
              src={avatar_url}
              className="img-circle"
              alt=""
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
            Hireable:{" "}
            {hireable ? (
              <i className="fa fa-check text-success" />
            ) : (
              <i className="fa fa-times-circle text-danger" />
            )}
          </div>

          <div className="container" style={{ minWidth: "100%" }}>
            {bio && (
              <Fragment>
                <h3>Bio:</h3>
                <p> {bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              {login && (
                <li>
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                </li>
              )}

              {company && (
                <li>
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                </li>
              )}

              {blog && (
                <li>
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                </li>
              )}
            </ul>

            <div className=" badge badge-primary">Following: {following}</div>
            <div className=" badge badge-success">Followers: {followers}</div>
            <div className=" badge badge-danger">
              Public Repos {public_repos}
            </div>
            <div className=" badge badge-dark">
              Public Gists: {public_gists}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;

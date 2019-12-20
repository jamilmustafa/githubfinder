import React, { Component } from "react";
import PropTypes from "prop-types";
export class SearchBar extends Component {
  state = {
    text: ""
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  onClick = e => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      console.log("Searching..");
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
        loading: false
      });
    }
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div className="navbar navbar-expand-md">
        <form onSubmit={this.onClick} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            name="text"
            placeholder="Search Users...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-success my-2 mr-sm-2"
            type="submit"
          >
            Search
          </button>
          {showClear && (
            <button
              className="btn btn-outline-danger ml-2 my-sm-0"
              onClick={clearUsers}
            >
              Clear Users
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default SearchBar;
/* <form onSubmit={this.onClick} className="form">
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              name="text"
              placeholder="Search Users...."
              value={this.state.text}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form> */

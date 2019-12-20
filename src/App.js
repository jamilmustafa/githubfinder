// import React from "react";

// function App() {
//   //components can be functions or classes (class components (state) --->functions(stateless) hooks
//   //allows use to have state inside functions )
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//     </div>
//   );
// }
import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../src/Components/Layouts/Navbar";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";
import SearchBar from "./Components/Users/Search";
import Alert from "./Components/Layouts/Alert";
import About from "./Components/Pages/About";

import axios from "axios";
class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   // console.log("1234");
  //   this.setState({
  //     loading: true
  //   });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchBar
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
            <Alert alert={this.state.alert} />
          </div>
        </div>
      </Router>
    );
  }

  //Get single Gihub user
  getUser = async username => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({
      user: res.data,
      loading: false
    });
  };
  //Search Github users
  searchUsers = async q => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${q}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({
      users: res.data.items,
      loading: false
    });
  };
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        // msg: msg,
        // type: type
        msg,
        type
      }
    });
    setTimeout(
      () =>
        this.setState({
          alert: null
        }),
      3000
    );
  };
  //Clear users form state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };
}
export default App;

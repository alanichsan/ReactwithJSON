import "./App.css";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import AddPost from "./components/AddPost";
import DetailPost from "./components/DetailPost";
import DetailAlbum from "./components/DetailAlbum";
import Comment from "./components/Comment";
import ViewPhotos from "./components/ViewPhotos";
import Update from "./components/Update";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavbarComp />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route exact path="/addpost" component={AddPost}></Route>
            <Route exact path="/post/edit/:id" component={Update}></Route>
            <Route exact path="/user/post/:id" component={DetailPost}></Route>
            <Route exact path="/user/album/:id" component={DetailAlbum}></Route>
            <Route exact path="/post/comments/:id" component={Comment}></Route>
            <Route exact path="/album/photo/:id" component={ViewPhotos}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

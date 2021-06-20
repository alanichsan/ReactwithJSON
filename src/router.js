import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/Post";
import NavbarComp from "./components/NavbarComp";
import AddPost from "./components/main/AddPost";
import DetailPost from "./components/main/DetailPost";
import DetailAlbum from "./components/main/DetailAlbum";
import Comment from "./components/main/Comment";
import ViewPhotos from "./components/main/ViewPhotos";
import Update from "./components/main/Update";

const router = () => {
    return (
        <div>
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
    )
}

export default router

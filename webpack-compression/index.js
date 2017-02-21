import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,IndexRoute } from 'react-router'
import App from './modules/App'
import Content from './modules/Content'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import UrlComponent from './modules/UrlComponent'
import Home from './modules/Home'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
      <Route path="/about/url" component={UrlComponent}/>
    </Route>
  </Router>
), document.getElementById('sss'))

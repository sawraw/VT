'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import NotFound from './components/NotFound'

import App from './components/App'
import ProductBuilder from './components/ProductBuilder'


//import {} from './reducers/productBuilder'

const onProductBuilderEnter = () => {

}



render(
 <Provider store={store}>
   <Router history={browserHistory}>
     <Route path="/" component={App} onEnter={onProductBuilderEnter}>
      <Route path='/productbuilder' component = {ProductBuilder}  />
      <IndexRedirect to="/productbuilder" />
     </Route>
     <Route path='*' component={NotFound} />

   </Router>
 </Provider>,
 document.getElementById('main')
)

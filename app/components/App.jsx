// Required libraries
import React from 'react'
import { connect } from 'react-redux'
import ProductBuilder from './ProductBuilder'

// ------------- Component
class App extends React.Component {

  render() {
    return (
      <ProductBuilder />
    )
  }
}


// ------------- Container
const mapStateToProps = null

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(App)

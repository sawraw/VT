// Required libraries
import React from 'react'
import { connect } from 'react-redux'
import {Link} from'react-router'



// ------------- Component
const ProductCalculator = (props) => {
 return (
    <div>
        <h1>Price: {props.price}</h1>
    </div>
    );
};

// ------------- Container
const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProductCalculator);



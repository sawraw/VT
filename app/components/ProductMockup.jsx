// Required libraries
import React from 'react'
import { connect } from 'react-redux'
import {Link} from'react-router'



// ------------- Component
const ProductMockup = (props) => {
 return (
    <div>
        <h1>Mockup!</h1>
    </div>
    );
};

// ------------- Container
const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProductMockup);



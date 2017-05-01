// // Required libraries
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from'react-router'
import ProductCalculator from './ProductCalculator'
import ProductMockup from './ProductMockup'
import ProductOptions from './ProductOptions'

// // ------------- Component
class ProductBuilder extends Component {

    constructor (props) {
        super(props);
        // this.state = {
        //     calculator: 0,
        //     actorType: "active",
        //     backdrop: "disabled",
        //     voiceover: "disabled",
        //     voiceChooser: "disabled",
        //     scriptBuilder: "disabled"
        // }
        // this.state = {
        //     calculator: 0,
        //     active: "actorType"
        // }
        // console.log(this.state);
        // this.product = {};
        // this.handleUserClick = this.handleUserClick.bind(this);
        this.productOptionsView = this.productOptionsView.bind(this);

    }
   
    handleUserClick = () => this.setState({calculator: 250})


    //each time you click on a button, send into handleUserClick():
    //attribute type (e.g., background)
    //price
    //output selection

    productOptionsView = (view) => {
        console.log(view);

    }
    //   <button onClick={()=>{this.handleUserClick(this.priceDiff)}}>360 Spin Video {this.priceDiff}</button>


    render (){

        return (
        <div>
        <div className="cd-product-builder">
            <header className="main-header">
                <h1>Product Video</h1>
                
                <nav className="cd-builder-main-nav disabled">
                    <ul>
                        <li className="active"><Link to="/" onClick={()=>{this.productOptionsView("videoType")}}>Video Type</Link></li>
                        <li><a href="#colors">Colors</a></li>
                        <li><a href="#accessories">Accessories</a></li>
                        <li><a href="#summary">Summary</a></li>
                    </ul>
                </nav>
            </header>
            <ProductOptions />
        </div>
            <ProductMockup />
        </div>  
        );
    }
};

// ------------- Container
const mapStateToProps = (state, ownProps) => {
    console.log("State is...", state);
    return({}
)}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProductBuilder);



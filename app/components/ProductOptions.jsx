// Required libraries
import React from 'react'
import { connect } from 'react-redux'
import {Link} from'react-router'



// ------------- Component
const ProductOptions = (props) => {

 return (
    <div className="cd-builder-steps">
        <ul>
          <li data-selection="models" className="active builder-step">
            <section className="cd-step-content">
              <header>
                <h1>Select Model</h1>
                <span className="steps-indicator">Step <b>1</b> of 4</span>
              </header>
              <ul className="models-list options-list cd-col-2">
                <li className="js-option js-radio" data-price={42400} data-model="product-01">
                  <span className="name">BMW i3</span>
                  <img src="img/product01_col01.jpg" alt="BMW i3" />
                  <span className="price">from $42.400</span>
                  <div className="radio" />
                </li>
                <li className="js-option js-radio" data-price={140700} data-model="product-02">
                  <span className="name">BMW i8</span>
                  <img src="img/product02_col01.jpg" alt="BMW i8" />
                  <span className="price">from $140.700</span>
                  <div className="radio" />
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </div>

    );
};

// ------------- Container
const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);



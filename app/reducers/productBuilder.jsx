// Required libraries
import axios from 'axios'

// ----------- Actions
const SELECT_PRODUCT_OPTION = 'SELECT_PRODUCT_OPTION'
const CHANGE_ACTIVE_STEP = 'CHANGE_ACTIVE_STEP'
const UPDATE_CALCULATOR = 'UPDATE_CALCULATOR'

// ----------- Action Creators

export const changeActiveStep = (step) => ({
  type: CHANGE_ACTIVE_STEP,
  step
})

export const selectProductOption = (selectedOption) => ({
  type: SELECT_PRODUCT_OPTION,
  selectedOption
})

export const updateCalculator = (price) => ({
  type: UPDATE_CALCULATOR,
  price
})



// ----------- Reducer
const initialState = {
  calculator : 0,
  activeStep: "",
  selectedOption: {},
  productComposition: {}
}

export default function productBuilderReducer(state = initialState, action) {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case SELECT_PRODUCT_OPTION:
      nextState.selectedOption = action.selectedOption
      let productKey = Object.keys(action.modification)[0];
      let productValue = action.modification[productKey];
      nextState.productComposition[productKey] = productValue;
      break

    case CHANGE_ACTIVE_STEP: 
      nextState.activeStep = action.step;
      break

    case UPDATE_CALCULATOR: 
      nextState.calculator += action.price;
      break

  default:
    return state
  }
  return nextState
}

// ----------- Disptachers

// export const addProduct = (productData) => (dispatch) => {
//   axios.post('/api/products/add', productData)
//       .then(() => {
//         // dispatch(newProduct(response.data));
//         dispatch(fetchProducts())
//       })
//       .catch(console.error)
// }


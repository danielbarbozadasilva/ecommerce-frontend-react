import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { reducer as toastrReducer } from 'react-redux-toastr'
import SignReducer from './auth/auth.reducer'
import ProductReducer from './product/product.reducer'
import CategoryReducer from './category/category.reducer'
import RatingReducer from './rating/rating.reducer'
import CartReducer from './cart/cart.reducer'
import SolicitationReducer from './solicitation/solicitation.reducer'
import PaymentReducer from './payment/payment.reducer'
import ClientReducer from './client/client.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  product: ProductReducer,
  category: CategoryReducer,
  rating: RatingReducer,
  cart: CartReducer,
  solicitation: SolicitationReducer,
  payment: PaymentReducer,
  client: ClientReducer,
  toastr: toastrReducer
})

const middlewares = [thunk, multi]

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store

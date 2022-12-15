import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { reducer as toastrReducer } from 'react-redux-toastr'
import SignReducer from './auth/auth.reducer'
import ProductReducer from './product/product.reducer'
import CategoryReducer from './category/category.reducer'
import RatingReducer from './rating/rating.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  product: ProductReducer,
  category: CategoryReducer,
  rating: RatingReducer,
  toastr: toastrReducer
})

const middlewares = [thunk, multi]

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store

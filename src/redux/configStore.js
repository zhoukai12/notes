import { createStore } from 'redux'
import reducer from './rootReduce'
const store = createStore(reducer)
export default store;
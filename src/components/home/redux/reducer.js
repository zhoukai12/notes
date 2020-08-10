import initialState from './initialState';
import reduce1 from './reduce1'
const reducers=[
    reduce1
]

export default function reducer(state=initialState,action){
    let newState;
    newState=state;
    return reducers.reduce((s,r)=>{r(s,action)},newState)
}
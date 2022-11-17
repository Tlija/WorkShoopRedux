import { ADD_VALUE, DECREMENT, INCREMENT, TOGGLE } from "../actionTypes/couterTypes"

export const increment =()=>{
    return{type:INCREMENT}
}
export const decrement =()=>{
    return{type:DECREMENT}
}
export const add_value=(value)=>{
    return{type:ADD_VALUE,payload:value}
}
export const toggle=()=>{
    return{type:TOGGLE}
}
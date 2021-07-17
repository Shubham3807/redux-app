import React from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/index'

const App = () => {
    let myState = useSelector((state) => { return state.changeTheNumber});
    const dispatch = useDispatch();
    //CODE REVIEW : way of passing anonymous function in useSelector hook
    return(
        <>
        <div className="container_l_0">
            <div className="container_l_1">
                <button onClick = {() => dispatch(incNumber())}> + </button>
                <input type = "text" value = {myState}/>
                <button onClick = {() => dispatch(decNumber())}> - </button>
            </div>
        </div>
        </>
    );
}

export default App;
import React from 'react';
import  {useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/index'
import InputCompo from './InputCompo.jsx';
const App = () => {
    const dispatch = useDispatch();
    //CODE REVIEW : DONE : way of passing anonymous function in useSelector hook
    return(
        <>
        <div className="container_l_0">
            <div className="container_l_1">
                <button onClick = {() => { return dispatch(incNumber())}}> + </button>
                <InputCompo/>
                <button onClick = {() => dispatch(decNumber())}> - </button>
            </div>
        </div>
        </>
    );
}

export default App;
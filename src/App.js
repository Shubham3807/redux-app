import React from 'react';
import  { useSelector } from 'react-redux';

const App = () => {
    let myState = useSelector((state) => { return state.changeTheNumber});
    //CODE REVIEW : way of passing anonymous function in useSelector hook
    return(
        <>
        <div className="container_l_0">
            <div className="container_l_1">
                <button> + </button>
                <input type = "text" defaultValue = {myState}/>
                <button> - </button>
            </div>
        </div>
        </>
    );
}

export default App;
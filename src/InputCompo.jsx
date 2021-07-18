import React from 'react';
import {useSelector} from 'react-redux';
const InputCompo = () => {
    const stateVar = useSelector((state) => {return state.changeTheNumber});
    return (
        <>
            <input type = "text" value = {stateVar} />
        </>
    )
}
export default InputCompo;
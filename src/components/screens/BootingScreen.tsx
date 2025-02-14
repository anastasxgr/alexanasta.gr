import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { setCurrentScreen } from '../../_store/reducers/screenSlice';


function BootingScreen() {
    const dispatch = useDispatch();
    const messages = ['Loading Components', 'Loading Assets'];
    const [index, setIndex] = useState(0);


    useEffect(() => {
        if (index < messages.length) {
            const timer = setTimeout(() => {
                setIndex((prevIndex) => prevIndex + 1);
            }, 3300);

            return () => clearTimeout(timer);
        } else {
            dispatch(setCurrentScreen('SCR_DESKTOP'));
        }
    }, [index, messages.length]);


    return (
        <div className="booting">

            <div className="loader"></div>


            <div className="data">
                <h1>Please Wait</h1>
                <p>{messages[index]}</p>
            </div>
        </div>
    )
}

export default BootingScreen;
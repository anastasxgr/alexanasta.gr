

import { useDispatch } from 'react-redux'
import { setCurrentScreen } from '../../_store/reducers/screenSlice'


function PoweredOff() {

    const dispatch = useDispatch();

    const handleOn = () => {
        dispatch(setCurrentScreen('SCR_BOOTING'));
    }
    return (
        <div className="shuttedown">

            <div className="texts">
                <h1>Welcome to my OS website</h1>
                <h2>Press power button to start computer</h2>
            </div>
            <div className="btnPower" onClick={handleOn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.709q-1.643-.708-2.859-1.923T3.709 15.51T3 12q0-1.87.701-3.499t1.936-2.864l.707.707q-1.1 1.1-1.722 2.544T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12q0-1.675-.622-3.116q-.622-1.44-1.722-2.54l.708-.708q1.234 1.235 1.935 2.865T21 12.008q0 1.856-.708 3.499q-.709 1.643-1.924 2.859t-2.856 1.925t-3.509.709m-.503-8V3h1v10z" /></svg>
            </div>
        </div>
    )
}

export default PoweredOff
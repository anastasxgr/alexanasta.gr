
import { CSSProperties } from "react"
import { useDispatch } from "react-redux";

import { openTerminal } from "../_store/reducers/AppsSlice";
//components
import TopLink from "./Topbar/TopLink";

interface StylesProps {
    topmenu: CSSProperties;

}

function TopMenu() {

    const dispatch = useDispatch();


    return (
        <div style={styles.topmenu}>
            <TopLink txt="Terminal" click={() => { dispatch(openTerminal()) }} />
            <TopLink txt="Settings" click={() => { alert("clicked") }} />
            <TopLink txt="Settings" click={() => { alert("clicked") }} />
        </div>
    )
}


const styles: StylesProps = {
    topmenu: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        left: '4rem',
        alignItems: 'center',
        color: '#fff',
        gap: 20
    }
}


export default TopMenu
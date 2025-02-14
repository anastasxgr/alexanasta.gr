import { CSSProperties } from 'react'


function PowerButton() {

    const style: CSSProperties = {
        width: "35px",
        height: "100%",
        position: "absolute",
        left: "1rem",
        cursor: "pointer",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


    return (
        <div style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709m-.007-4q2.081 0 3.543-1.461T17 12.005q0-1.057-.388-1.958q-.389-.9-1.073-1.586l-.714.714q.55.55.863 1.275T16 12q0 1.65-1.175 2.825T12 16t-2.825-1.175T8 12q0-.825.313-1.55t.862-1.275l-.713-.713q-.685.684-1.073 1.585Q7 10.95 7 12.005q0 2.072 1.457 3.534T11.995 17m-.495-5h1V7h-1z" /></svg>
        </div>
    )
}

export default PowerButton
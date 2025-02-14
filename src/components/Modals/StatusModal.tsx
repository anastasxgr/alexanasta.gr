import React, { ReactNode } from 'react'
import { CSSProperties } from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../../_store';


import { Online, Offline } from '../../icons';


interface StylesProps {
    modal: CSSProperties;
    content: CSSProperties;
    icon: CSSProperties;
    message: CSSProperties;
}




function StatusModal() {

    const { isOpen, message, status } = useSelector((state: RootState) => state.modal);
    if (!isOpen) return null;


    return (
        <div style={styles.modal}>
            <div style={styles.content}>

                <div style={styles.icon}>
                    {status == 'online' && <Online fontSize={45} />}
                    {status == 'offline' && <Online fontSize={45} />}
                </div>


                <p style={styles.message}>{message}</p>
            </div>
        </div>
    )
}


const styles: StylesProps = {
    modal: {
        width: 250,
        height: 200,
        backgroundColor: "rgba(0, 0, 0, 0.79)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10.7px)",
        WebkitBackdropFilter: "blur(10.7px)",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        borderRadius: 10
    },

    content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    icon: {
        color: '#fff'
    },

    message: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 600
    }

}

export default StatusModal;
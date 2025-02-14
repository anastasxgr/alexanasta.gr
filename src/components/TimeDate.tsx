import React, { useState, useEffect } from "react";
import { CSSProperties } from "react";

function TimeDate() {
    const [time, setTime] = useState(new Date());


    const style: CSSProperties = {
        width: "100px",
        position: "absolute",
        right: "0",
        color: "#fff"
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("el-GR", { hour12: false });
    };

    return (

        <div style={style}>{formatTime(time)}</div>

    );
}

export default TimeDate;

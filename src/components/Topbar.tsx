import React from "react";

import { CSSProperties } from "react";

import TimeDate from "./TimeDate";
import PowerButton from "./PowerButton";
import TopMenu from "./TopMenu";

function Topbar() {
    const style: CSSProperties = {
        width: "100%",
        height: "35px",
        background: "rgba(0, 0, 0, 0.595)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(22.4px)",
        WebkitBackdropFilter: "blur(22.4px)",
        position: "absolute",
        display: "grid",
        gridTemplateColumns: "35px 1fr 100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        top: "0",
    };

    return (
        <div style={style}>
            <PowerButton />
            <TopMenu />
            <TimeDate />
        </div>
    );
}

export default Topbar;

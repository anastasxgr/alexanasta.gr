

import React, { useState } from 'react'
import { MouseEventHandler } from 'react';


import { CSSProperties } from "react"

interface LinkProps {
    txt: string;
    click: MouseEventHandler;

}

function TopLink({ txt, click }: LinkProps) {


    const [isHover, setIsHover] = useState(false)

    const style: CSSProperties = {
        color: isHover ? 'red' : '#fff',
        cursor: 'pointer'

    }

    const hover = () => {
        setIsHover(true)
    }

    const unHover = () => {
        setIsHover(false)
    }


    return (
        <div style={style} onMouseOver={hover} onMouseLeave={unHover} onClick={click}>
            {txt}
        </div>
    )
}




export default TopLink
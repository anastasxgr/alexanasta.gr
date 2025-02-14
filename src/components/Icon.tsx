
import Draggable from 'react-draggable'
import { useRef } from 'react'

import { Online } from '../icons';


type Icons = "terminal" | "settings"


interface IconProps {
    x: number;
    y: number;
    ic: Icons;
    onc: void;
}

function Icon({ x, y, ic }: IconProps) {

    const icon = useRef<HTMLDivElement | null>(null);


    return (
        <Draggable nodeRef={icon} defaultPosition={{ x: x, y: y }}>
            <div className="iconbox" ref={icon}>
                <div className="icon" data-icon={ic}>

                </div>

                <div className="text">
                    {ic}
                </div>
            </div>
        </Draggable>
    )
}

export default Icon
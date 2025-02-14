import React from 'react'

import TimeDate from './TimeDate'
import PowerButton from './PowerButton'
import TopMenu from './TopMenu'
function Topbar() {
    return (
        <div className="topbar">
            <PowerButton />
            <TopMenu />
            <TimeDate />
        </div>
    )
}

export default Topbar
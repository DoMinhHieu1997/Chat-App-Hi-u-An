import React from 'react'
import SidebarRight from './sidebarRight';
import SidebarLeft from './sidebarLeft';

const RoomChatLayout = () => {
    return (
        <div className='wrapper'>
            <div className="main">
                <SidebarLeft />
                <div className="container">
                    <div className="container-left">
                        left
                    </div>
                    <div className="container-right">
                        right
                    </div>
                </div>
                <SidebarRight />
            </div>
        </div>
    )
}

export default RoomChatLayout

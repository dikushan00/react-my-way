import React from 'react';
import Playlist from "./Playlist";
import Controls from "./Controls";
import './Music.css'

const Music = () => {
    return (<>
        <Controls />
        <div className = "pageArea" style = {{marginTop: "5px"}}>
        <div className="main">
            <div className="top">
                <Playlist />
            </div>
        </div>
    </div>
    </>);
}

export default Music;
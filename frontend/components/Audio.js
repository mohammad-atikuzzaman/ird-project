"use client"
import React from 'react';

const Audio = ({audio}) => {
    if (!audio) return null;
    return (
        <audio controls>
            <source src={audio} type="audio/mpeg"/>
            <source src={audio} type="audio/ogg"/>
        </audio>
    );
};

export default Audio;
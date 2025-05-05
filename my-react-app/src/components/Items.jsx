import React from 'react'
import './items.css'

export const Items = ({icono, text}) => {
    return (
        <div className='item'>
            <div className='icono-box'>
                <div className='icono'>
                    <span>{icono}</span>
                </div>
            </div>
            <div className='item-texts'>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}
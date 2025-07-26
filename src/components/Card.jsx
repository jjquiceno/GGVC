import React from 'react'
import { Button } from './button.jsx' 
import { cn } from '../utils/cn.js'

export const Card = ({ }) => {
    return (
        <>
            <div className={cn('border border-gray-300 rounded-lg p-4 shadow-md flex flex-col items-center')}>
                <div>
                    <p>hola</p>
                </div>
                <Button/>
            </div>
        </>
    )
}
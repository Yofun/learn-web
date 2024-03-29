import React, { useState } from 'react'

export default function UseState() {
    const [value, setValue] = useState('')

    return (
        <div>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value)
            }} />
            <h3>{value}</h3>
        </div>
    )
}


import React from 'react'

const Button = ({ name, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled}>
        {name}
    </button>
)

export { Button }

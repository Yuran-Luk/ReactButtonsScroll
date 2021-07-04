import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '@comps/Button/Button'
import './ScrollWindow.scss'

const ScrollWindow = () => {
    const { scrollOptions } = useSelector(state => state.scroll)

    const item = useRef(null)
    const window = useRef(null)

    const onDownClick = () => {
        window.current.scrollTop += item.current.offsetHeight
    }

    const onUpClick = () => {
        window.current.scrollTop -= item.current.offsetHeight
    }

    return (
        <div className='scroll'>
            <div className='items-container' ref={window}>
                {scrollOptions.map(({ name, btnName }, i) => (
                    <div className='item' ref={item} key={i}>
                        <div className='item__name'>{name}</div>
                        <Button
                            name={btnName}
                        />
                    </div>
                ))}
            </div>
            <Button
                onClick={onUpClick}
                name={'Вверх'}
            />
            <Button
                onClick={onDownClick}
                name={'Вниз'}
            />
        </div>
    )
}

export { ScrollWindow }

import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '@comps/Button/Button'
import './ScrollWindow2.scss'

const ScrollWindow2 = () => {
    const [index, setIndex] = useState(0)

    const { scrollOptions } = useSelector(state => state.scroll)
    const itemsCount = 4
    const maxIndex = scrollOptions.length - itemsCount

    const onDownClick = () => {
        setIndex((current) => current + 1)
    }

    const onUpClick = () => {
        setIndex((current) => current - 1)
    }

    return (
        <div className='scroll'>
            <div className='items-container'>
                {scrollOptions.slice(index, index + itemsCount).map(({ name, btnName }, i) => (
                    <div className='item' key={i}>
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
                disabled={!index}
            />
            <Button
                onClick={onDownClick}
                name={'Вниз'}
                disabled={index === maxIndex}
            />
            <p>{'В таком варианте отсутствует плавность в прокрутке и тут вовсе без скрола работает. Когда начинал, казалось что интересно получится)'}</p>
        </div>
    )
}

export { ScrollWindow2 }

import React from 'react'
import { ScrollWindow } from '@comps/ScrollWindow/ScrollWindow'
import { ScrollWindow2 } from '@comps/ScrollWindow2/ScrollWindow2'

import './DevPage.scss'

const DevPage = () => (
    <div className='content'>
        <div className='column1'>
            <ScrollWindow />
        </div>
        <div className='column2'>
            <ScrollWindow2 />
        </div>

    </div>
)

export { DevPage }
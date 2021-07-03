import React from 'react'
import { render } from 'react-dom'

import { DevPage } from '@/pages/Dev/DevPage'

const App = () => (
    <>
        <DevPage />
    </>
)

render(<App />, document.getElementById('react'))

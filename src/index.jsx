import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import { DevPage } from '@/pages/Dev/DevPage'

const App = () => (
    <Provider store={store}>
        <DevPage />
    </Provider>
)

render(<App />, document.getElementById('react'))

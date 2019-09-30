import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Panel from 'components/Panel/Panel'
import store from 'store'
import './App.css'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={{}}>
                <div className="App">
                    <header className="App-header">
                        <Panel>test</Panel>
                    </header>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App

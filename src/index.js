import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Navigator } from './navigator'
import { theme } from './theme'
import { configureStore } from './store'

global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest

const store = configureStore()

export class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Navigator />
                </ThemeProvider>
            </Provider>
        )
    }
}

require('file-loader?name=[name].[ext]!./.htaccess')
require('file-loader?name=[name].[ext]!./index.html')

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)


root.render(
    <Router>        
        <App />       
    </Router>
)
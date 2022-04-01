// app entrypoint
import '../css/app.css'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOMClient from 'react-dom/client'
import Index from './index'
import React from 'react'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
root.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>
)

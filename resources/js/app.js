// app entrypoint
import '../css/app.css'
// import ReactDom from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import Index from './index'

// ReactDom.render(<Index />, document.getElementById('root'))

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)
root.render(<Index />)

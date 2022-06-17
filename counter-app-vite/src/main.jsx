import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {App} from './HelloWorldApp'
import FirstApp from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="TITLE PROP" subtitle={345}/>
  </React.StrictMode>
)

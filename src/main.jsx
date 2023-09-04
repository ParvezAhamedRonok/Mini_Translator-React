import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// the react.strictMode will show up two time in every rendering on console & somewhere else..
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <App />
  </React.StrictMode>

)

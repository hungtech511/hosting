import React from 'react'
import ReactDOM from 'react-dom/client'
import { PageRoute } from './Router/PageRoute'
import Provider from './Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <PageRoute />
    </Provider>
  </React.StrictMode>,
)

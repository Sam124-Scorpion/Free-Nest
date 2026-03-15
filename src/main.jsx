import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from './redux/store.js'
import {store2} from './redux2/store2.js'
import App2 from './App2.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store2}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</Provider>
    {/* <Provider store={store}>
      <App2 />
    </Provider> */}
  </StrictMode>,
)

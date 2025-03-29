import { createRoot } from 'react-dom/client'
import Root from './router/index'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./store"
createRoot(document.getElementById('root')!).render(
 
   <Provider store={store}>
     <Root />
   </Provider>

)
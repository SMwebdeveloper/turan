import { Outlet } from "react-router-dom"
import {DarkModeProvider } from "./context/darkmodeContext"
import { Footer, Header, } from "./components"
const App = () => {
  return (
    <DarkModeProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </DarkModeProvider>
   
  )
}

export default App

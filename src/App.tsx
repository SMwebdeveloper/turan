import { Outlet } from "react-router-dom"
import {DarkModeProvider } from "./context/darkmodeContext"
import { Header } from "./components"
const App = () => {
  return (
    <DarkModeProvider>
      <Header/>
      <Outlet/>
    </DarkModeProvider>
   
  )
}

export default App

import Navbar from "./components/Navbar"
import { Route, Routes} from "react-router-dom"
import Createproduct from "./pages/Createproduct"
import HomePage from "./pages/HomePage"

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<Createproduct />}></Route>
      </Routes>
    </>
  )
}

export default App

import AppWrapper from "./assets/AppWrapper.js"
import { Routes, Route } from "react-router-dom"
import HomeIndex from "./pages/home"
import About from "./pages/about"
import ORG from "./pages/ORG"
import Blog from "./pages/blog"
import SNT from "./pages/SNT"
import { Login } from "./pages/home/styles/NavBar.js"
import WorkInProgress from "./pages/work-in-progress/index.js"
import NotFound from "./pages/404/index.js"

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="about" element={<About />} />
        <Route path="SNT" element={<SNT/>}/>
        <Route path="ORG" element={<ORG/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="work-in-progress" element={<WorkInProgress/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>






    </AppWrapper>
  )
}

export default App

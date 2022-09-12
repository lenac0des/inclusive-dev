import HomeIndex from "./pages/home"
import AppWrapper from "./assets/AppWrapper.js"
import "./Provisional.css"

function App() {
  return (
    <AppWrapper>
      <HomeIndex />
      
      
      <h2 className="MainContentProvisional" id="MainContent">Main Content</h2>
      <div className="FooterProvisional">
        <p>Footer</p>
      </div>
    </AppWrapper>
  )
}

export default App

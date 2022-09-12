import HomeIndex from "./pages/home"
import AppWrapper from "./assets/AppWrapper.js"

function App() {
  return (
    <AppWrapper>
      <HomeIndex />
      <h2>Main Content</h2>
      <div>
        <p>Footer</p>
      </div>
    </AppWrapper>
  )
}

export default App

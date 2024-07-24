import Navbar from "./Navbar.jsx"
import Recettes from "./Recettes.jsx"
import Sidebar from "./Sidebar.jsx"

function App() {

  return (
    <>
      <Navbar />
      <div id="content">
        <Sidebar />
        <Recettes />
      </div>
    </>
  )
}

export default App

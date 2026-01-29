
import './App.css'
import Welcome from './componenets/Welcome.jsx'
import Car from './componenets/Car.jsx'

function App() {

  return (
    <>
      <div>
        <h1>Ruxsora</h1>
        <Welcome lang="React"/>
        <Welcome lang="C++"/>
        <Car/>
      </div>
    </>
  )
}

export default App
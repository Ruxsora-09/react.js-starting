
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
        <Car name="BMW" description="A luxury German car"/>
        <Car name="Tesla" description="An electric car company"/>
      </div>
    </>
  )
}

export default App
import { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import Header from './Components/Header'


function App() {
  const [ count, setCount ] = useState(0)

  return (
    <div className="App">
      <>
        <Header title='El mejor café de Colombia'></Header>
        <hr />
        <Form ></Form>
        <hr />
        <Card>mi Card</Card>

      </>


    </div>
  )
}

export default App

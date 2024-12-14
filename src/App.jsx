import { useState } from 'react'
import HeaderBar from './components/HeaderBar'
import Card from './components/Card'
import data from "./data.jsx"

function App() {
  const [count, setCount] = useState(0)

  //Get cards in cards
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})  

  return (
    <>
      <HeaderBar/>
      {cards}
    </>
  )
}

export default App

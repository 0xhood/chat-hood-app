import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import homePage from './pages/home/home.page'
import chatPage from './pages/chat/chat.page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Route path='/' exact component={homePage}></Route>
      <Route path='/chats' component={chatPage}></Route>
    </div>
  )
}

export default App

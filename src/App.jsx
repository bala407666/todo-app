import { useState, useEffect } from 'react'
import Header from './component/Header'
import './App.css'
import SearchBar from './component/SearchBar'
import ListCard from './component/ListCard'

import { v4 } from 'uuid'
import Example from './component/Example'


function App() {
  const LOCAL_STAORAGE_KEY = "tasks"
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STAORAGE_KEY))??[
  ])
  const [search,setSearch]=useState('')
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STAORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const addTasks = (task) => {
    setTasks([...tasks, { id: v4(), ...task }])
  }
  const searchHandler=(val)=>{
    console.log(val)
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onAdd={addTasks} term={search} searchHandler={searchHandler}/>
      <ListCard task={tasks} onDelete={deleteTasks} />
      

    </div>
  )
}

export default App

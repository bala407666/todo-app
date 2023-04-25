import { useState, useEffect } from 'react'
import Header from './component/Header'
import './App.css'
import SearchBar from './component/SearchBar'
import ListCard from './component/ListCard'

import { v4 } from 'uuid'
import Example from './component/Example'


function App() {
  const LOCAL_STAORAGE_KEY = "tasks"
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LOCAL_STAORAGE_KEY)) ?? [
  ])
  const [search, setSearch] = useState('')
  const [Fsearch, setFsearch] = useState('')
  const [checkbox,setcheck]=useState(false)



  useEffect(() => {
    localStorage.setItem(LOCAL_STAORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const addTasks = (task) => {
    setTasks([...tasks, { id: v4(), ...task }])
  }
  const searchHandler = (val) => {
    console.log(val)
    setSearch(val)
    if (search !== '') {
      const newTasks = tasks.filter((tasks) => {
        return Object.values(tasks).join('').toLowerCase().includes(search.toLowerCase())
      })
      setFsearch(newTasks)
    } else {
      setFsearch(tasks)
    }
    
    
  }
 const handlecheckbox=(id)=>{
  const newcheck=tasks.map((task)=>{
    if(task.id===id)  return {...task,check:!task.check}
    return task
    
  })
  setTasks(newcheck)
 }
  

  return (
    <div className="App">
      <Header />
      <SearchBar onAdd={addTasks} term={search} searchHandler={searchHandler} />

    <ListCard task={search.length < 1 ? tasks :Fsearch} onDelete={deleteTasks} handlecheck={handlecheckbox} />

    </div>
  )
}

export default App

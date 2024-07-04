import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container text-black mx-auto my-5 bg-purple-400 rounded-xl p-5 min-h-[80vh] max-w-[90vw]">
        <div className="header flex justify-end">
          <div className="addToDo flex gap-2">
            <h2 className='text-lg font-bold'>Add a Todo:</h2>
            <input className='rounded-2xl px-4' type="text" name="" id="" />
            <button className='border-x-2 border-y-2 border-purple-900 rounded-2xl px-3'>Submit</button>
          </div>
        </div>
          <h2 className="text-lg font-bold"> Your Todo's </h2>
        <div className="todos py-4">
          <div className="todo flex justify-between border-x-2 border-y-2 rounded-2xl border-purple-900 px-5 py-3">
            <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, omnis!</div>
            <div>
              <button className='p-2 py-1 mx-2 text-sm font-bold border-x-2 border-y-2 rounded-2xl border-purple-900'>Edit</button>
              <button className='p-2 py-1 mx-2 text-sm font-bold border-x-2 border-y-2 rounded-2xl border-purple-900'>Delete</button>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

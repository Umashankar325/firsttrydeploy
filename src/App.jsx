import React from 'react'

const App = () => {
  return (
    <div className='text-3xl bg-slate-300 text-red'>
      <h1>App</h1>
      <h2>{import.meta.env.VITE_CROMPASSS}</h2>
      </div>
  )
}

export default App  
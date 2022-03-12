import { useEffect, useMemo, useState } from 'react'

// use cases
// 1. Handling a slow function
// 2. Idea of referencial equality, only update when an obj or arr actually changes
 
const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // useMemo (memoization) saves value in memory
  // it should not be overused not to cause memory overuse
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input type={'number'} value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prev => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

export default App

function slowFunction(num) {
  console.log('Calling slow function')
  for (let i = 0; i <= 1000000000; i++) { }
  return num * 2
}
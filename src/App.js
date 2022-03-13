import { useEffect, useRef, useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  // refs can be used to store the previous value of states

  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  )
}

// import { useRef, useState } from 'react'

// const App = () => {

//   const [name, setName] = useState('')
//   // referencing elements inside the html is the biggest use case, each element has a ref attribute

//   const inputRef = useRef()

//   const focus = () => inputRef.current.focus()

//   return (
//     <>
//       <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </>
//   )
// }

// import { useEffect, useRef, useState } from 'react'

// const App = () => {

//   const [name, setName] = useState('')
//   // ref is similar to state but it doesn't cause the component to re-render upon change

//   const renderCount = useRef(1)

//   useEffect(() => {
//     renderCount.current += 1
//   })

//   return (
//     <>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       {renderCount.current}
//     </>
//   )
// }

export default App
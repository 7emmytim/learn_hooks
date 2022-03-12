import { useEffect, useState } from 'react'

const App = () => {

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))

      return () => console.log('cleaned up ' + resourceType)
  }, [resourceType])

  const handleResize = () => setWindowSize(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      // console.log('cleanup')
    }
  }, [])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{windowSize}</h1>
      <h1>{resourceType}</h1>
      {
        items?.map(item => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>
        })
      }
    </>
  )
}

export default App
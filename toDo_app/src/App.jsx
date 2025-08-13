import './App.css'

function App(props) {
  return (
    <>
      <h1>Hello {props.subject}</h1>
      <button type='button' className='primary'>Click Me</button>
    </>
  )
}

export default App

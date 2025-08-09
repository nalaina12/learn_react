import { Fragment } from "react"
function App() {
  const myElement = <h2>Learing to code with react</h2>

  return (
    <Fragment>
      <h1>Hello World</h1>
      {myElement}
      {/* comment inside the return */}
    </Fragment>
  )
}

export default App
// comment outside the return

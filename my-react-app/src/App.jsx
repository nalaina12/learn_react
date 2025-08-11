import { Fragment, useState } from "react"
import UserList from "./UserList"; //import the childComponent
function App() {
  const myElement = <h2 className="text-lowercase">Learing to code with react</h2>
  // Render a list using jsx
  const [users] = useState([
    { id: 1, name: "John Doe" , role: "Admin"},
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Alice Johnson", role: "Viewer" }
  ])
  return (
    <Fragment>
      <h1>Hello World</h1>
      {myElement}
      <p>The users list:</p>
      <UserList users={users} />
      {/* comment inside the return */}
    </Fragment>
  )
}

export default App
// comment outside the return

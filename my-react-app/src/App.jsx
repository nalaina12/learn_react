import { Fragment } from "react"
function App() {
  const myElement = <h2>Learing to code with react</h2>
  // Render a list using jsx
  const users = [
    { id: 1, name: "John Doe" , role: "Admin"},
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Alice Johnson", role: "Viewer" }
  ]
  return (
    <Fragment>
      <h1>Hello World</h1>
      {myElement}
      <p>The users list:</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
      {/* comment inside the return */}
    </Fragment>
  )
}

export default App
// comment outside the return

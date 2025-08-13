function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>To-Do List</h1>
      <p>Welcome to your To-Do List application!</p>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">What needs to be done?</label>
        </h2>
        <input type="text" name="text" id="new-todo-input" className="input input_lg" autoComplete="off" />
        <button type="submit" className="btn btn_primary btn_lg">Add</button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show</span>
          <span>All</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Active</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show</span>
          <span>Completed</span>
          <span className="visually-hidden">Tasks</span>
        </button>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked />
              <label className="todo-label" htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Eat</span>
              </button>
              <button type="button" className="btn btn_danger">
                Delete <span className="visually-hidden">Eat</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-1" type="checkbox" defaultChecked={false} />
              <label className="todo-label" htmlFor="todo-1">
                Learn
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Learn</span>
              </button>
              <button type="button" className="btn btn_danger">
                Delete <span className="visually-hidden">Learn</span>
              </button>
            </div>
          </li>
          <li className="todo stack-small">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" defaultChecked={false} />
              <label className="todo-label" htmlFor="todo-2">
                Sleep
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                Edit <span className="visually-hidden">Sleep</span>
              </button>
              <button type="button" className="btn btn_danger">
                Delete <span className="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
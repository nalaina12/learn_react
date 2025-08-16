import { useState } from "react";
function Todo(props){
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(props.name);

    function handleEdit() {
        props.editTask(props.id, newName);
        setIsEditing(false);
    }

    const editingTemplate = (
        <form action="" className="stack-small" onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
        }}>
            <div className="form-group">
                <label htmlFor={props.id} className="todo-label">
                    New name for {props.name}
                </label>
                <input id={props.id} className="todo-text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setIsEditing(false)}>
                    Cancel
                </button>
                <button type="button" className="btn" onClick={handleEdit}>
                    Save
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setIsEditing(true)}>
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn btn_danger" onClick={() => props.deleteTask(props.id)}>
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );
    return (
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
}
export default Todo;
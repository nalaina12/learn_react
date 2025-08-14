function Form(){
    function handleSubmit(event) {
        event.preventDefault();
        alert("Task added");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label_lg">What needs to be done?</label>
            </h2>
            <input type="text" name="text" id="new-todo-input" className="input input_lg" autoComplete="off" />
            <button type="submit" className="btn btn_primary btn_lg">Add</button>
        </form>
    );
}
export default Form;

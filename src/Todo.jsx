const Todo = (props) => {

    function deleteJob() {
        props.onChange(props.job.key);
    }

    return (
        <div className="job-row">
            <label className="job-name-lbl">Todo: {props.job.value}</label>
            <button className="delete-btn" onClick={() => deleteJob()}>Delete</button>
        </div>
    );
}

export default Todo;

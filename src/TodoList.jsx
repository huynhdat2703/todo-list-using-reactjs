import { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {

    const [jobList, setJobList] = useState([]);

    const [newJobValue, setNewJobValue] = useState("");

    function getMaxKey() {
        const maxKey = jobList.reduce((acc, job) => {
            return job.key > acc ? job.key : acc;
        }, 0);
        return maxKey;
    }

    function isNewJobValueEmpty() {
        return newJobValue === null || newJobValue === '';
    }

    function addJob() {
        if (isNewJobValueEmpty()) {
            return;
        }
        const newJob = {
            key: getMaxKey() + 1,
            value: newJobValue
        }
        setJobList((prevJobList) => [...prevJobList, newJob]);
        setNewJobValue("");
    }

    function handleChangeNewJobValue(value) {
        setNewJobValue(value);
    }

    function updateJobList(key) {
        setJobList(jobList.filter(job => job.key !== key));
    }

    return (
        <div className="containter">
            <h1 className="title">TODO LIST</h1>
            <div className="add-job-section">
                <input type="text" className="new-job-input"
                    value={newJobValue}
                    onChange={(e) => handleChangeNewJobValue(e.target.value)} />
                <button className="add-btn" onClick={() => addJob()}>Add job</button>
            </div>
            <div className="job-list-section">
                {
                    jobList.map(job => <Todo
                        key={job.key} job={job}
                        onChange={(key) => updateJobList(key)} />)
                }
            </div>
        </div>
    );
}

export default TodoList;

import React, { useState, useContext, Fragment } from "react";
import CartContext from "../store/Cart-Context.";
import Modal from "../UI/modal";
import classes from "./VoteForm.module.css";

const VoteForm = () => {
    const { addVote } = useContext(CartContext);
    const [enteredName, setEnteredName] = useState('');
    const [enteredMonitorName, setEnteredMonitorName] = useState('Ram');
    const [showForm, setShowForm] = useState(false);

    const nameChangeHandler = (event) => setEnteredName(event.target.value);
    const dropdownChangeHandler = (event) => setEnteredMonitorName(event.target.value);
    const addVoteHandler = () => setShowForm(true);
    const cancelFormHandler = () => setShowForm(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.length > 0) {
            addVote(enteredName, enteredMonitorName);
            setEnteredName("");
            setEnteredMonitorName("Ram");
            setShowForm(false);
        }
    };

    return (
        <Fragment>
            {showForm ? (
                <Modal>
                    <form onSubmit={submitHandler}>
                        <label htmlFor="student-name">Student Name:</label>
                        <input type="text" id="student-name" onChange={nameChangeHandler} value={enteredName} />
                        <label htmlFor="monitor-vote">Choose Monitor:</label>
                        <select id="monitor-vote" value={enteredMonitorName} onChange={dropdownChangeHandler}>
                            <option value="Ram">Ram</option>
                            <option value="Shyam">Shyam</option>
                            <option value="Babu">Babu</option>
                        </select>
                        <button type="submit">Vote</button>
                        <button type="button" onClick={cancelFormHandler}>X</button>
                    </form>
                </Modal>
            ) : (
                <div className={classes.AddButton}>
                    <button type="button" onClick={addVoteHandler}>Add New Vote</button>
                </div>
            )}
        </Fragment>
    );
};

export default VoteForm;
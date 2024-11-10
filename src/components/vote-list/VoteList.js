import React, { useContext } from "react";
import CartContext from "../store/Cart-Context.";

const VoteList = () => {
    const { monitorVotes, deleteVote } = useContext(CartContext);

    return (
        <React.Fragment>
            {monitorVotes.map((monitorData, i) => (
                <div key={monitorData.monitor}>
                    <h3>{monitorData.monitor}</h3>
                    <ul>
                        <p>Total vote: {monitorData.votes.length}</p>
                        {monitorData.votes.map((name, index) => (
                            <li key={index}>
                                {name}
                                <button type="button" onClick={() => deleteVote(i, index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </React.Fragment>
    );
};

export default VoteList;
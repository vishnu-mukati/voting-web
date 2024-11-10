import React, { useState } from "react";
import CartContext from "./Cart-Context.";



const CartProvider = (props) => {

    const [monitorVotes, setMonitorVotes] = useState([
        { monitor: 'Ram', votes: [] },
        { monitor: 'Shyam', votes: [] },
        { monitor: 'Babu', votes: [] },
    ]);

    const addVote = (name, monitorName) => {
        setMonitorVotes((prevVotes) =>
            prevVotes.map((item) =>
                item.monitor === monitorName
                    ? { ...item, votes: [...item.votes, name] }
                    : item
            )
        );
    };

    const deleteVote = (monitorIndex, voteIndex) => {
        setMonitorVotes((prevVotes) => {
            const updatedVotes = [...prevVotes];
            updatedVotes[monitorIndex].votes.splice(voteIndex, 1);
            return updatedVotes;
        });
    };

    const totalVotes = monitorVotes.reduce((acc, curr) => acc + curr.votes.length, 0);

    const Cartcontext = {
        monitorVotes: monitorVotes,
        totalVotes: totalVotes,
        addVote: addVote,
        deleteVote: deleteVote,
    }


    return (
        <CartContext.Provider value={Cartcontext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
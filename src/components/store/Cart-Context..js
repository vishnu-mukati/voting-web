import React from "react";

const CartContext = React.createContext({
    monitorVotes: [],
    totalVotes: 0,
    addVote: (name, monitorName) => { },
    deleteVote: (monitorIndex, voteIndex) => { },
});

export default CartContext;
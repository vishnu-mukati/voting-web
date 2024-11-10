import React, { useContext } from "react"
import CartContext from "../store/Cart-Context.";
import classes from "./TotalVotes.module.css";

const TotalVotes = (props) => {

    const Ctc = useContext(CartContext);

    return (
        <React.Fragment>

            <h1 className={classes.h1}>Class Monitor Vote</h1>
            <p className={classes.p1}>Total Votes: {Ctc.totalVotes}</p>
        </React.Fragment>
    );
}
export default TotalVotes;